import DISPATCHER, { STATE_UPDATE } from "./dispatcher";
import { isFunction, isSymbol } from "./utils";

export class FragmentIntermediarySubscriptor {
  #subscription: CallableFunction;
  constructor(subscription: CallableFunction) {
    this.#subscription = subscription;
  }
  public subscriptor(ref: symbol) {
    this.#subscription(ref);
  }
}

class MiddlewareSubscription implements Subscription {
  readonly #subscripted = new Set<symbol>();

  #add_subscription(ref: any) {
    if (!isSymbol(ref)) throw new Error("The ref associated is not a symbol.");
    if (this.#subscripted.has(ref))
      throw new Error("The ref associated is registered");
    this.#subscripted.add(ref);
  }

  public get subscriptions(): symbol[] {
    return Array.from(this.#subscripted);
  }

  public subscribe(): FragmentIntermediarySubscriptor {
    const subscriptor = new FragmentIntermediarySubscriptor(
      this.#add_subscription.bind(this)
    );
    return subscriptor;
  }
}

class State extends MiddlewareSubscription implements StateMiddleware {
  #state: any = null;
  #observed: boolean = false;
  constructor(initialState: any, observed: boolean) {
    super();
    this.#state = initialState ?? null;
    this.#observed = observed;
  }
  /**
   *  Returns the actual state
   *  @returns {any}
   */
  public getState(): any {
    return this.#state;
  }
  /**
   *  Sets a new state given a callback or a value
   *  @param {((lastState: any) => any) | any} nextState
   */
  public setState(nextState: ((lastState: any) => any) | any): void {
    if (isFunction(nextState)) this.#state = nextState(this.#state);
    else this.#state = nextState;
    if (this.#observed) DISPATCHER(STATE_UPDATE, this.subscriptions);
  }
}

/**
 *  Creates an state. If ovserved is true, adds the subscription in the 3rd position of the returned array.
 *  @returns {StateExecutors} State executors
 */
export function createState(
  initialValue?: any,
  observed: boolean = false
): StateExecutors {
  const _state = new State(initialValue, observed);
  const getter = _state.getState.bind(_state);
  const setter = _state.setState.bind(_state);
  const subscibe = _state.subscribe();
  return observed ? [getter, setter, subscibe] : [getter, setter];
}
