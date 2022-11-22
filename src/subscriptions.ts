import DISPATCHER, { STATE_UPDATE } from "./dispatcher";
import { isFunction, isSymbol } from "./utils";

class MiddlewareSubscription implements Subscription {
  readonly #subscripted = new Set<symbol>();

  public get subscriptions(): symbol[] {
    return Array.from(this.#subscripted);
  }

  public subscribe(ref: symbol): void {
    if (!isSymbol(ref) || this.#subscripted.has(ref))
      throw new Error(
        "The ref associated is registered or is not of type symbol."
      );
    this.#subscripted.add(ref);
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
  public getState(): any {
    return this.#state;
  }
  public setState(nextState: any | ((lastState: any) => any)): void {
    if (isFunction(nextState)) this.#state = nextState(this.#state);
    else this.#state = nextState;
    if (this.#observed) DISPATCHER(STATE_UPDATE, this.subscriptions);
  }
}

/**
 *  Creates an state. If ovserved is true, adds the subscription in the 3rd position.
 *  @returns {([getter: CallableFunction,setter: CallableFunction,subscribe: FragmentSubscription] | [getter: CallableFunction, setter: CallableFunction])}
 */
export function createState(
  initialValue?: any,
  observed: boolean = false
): StateExecutors {
  const _state = new State(initialValue, observed);
  const getter = _state.getState.bind(_state);
  const setter = _state.setState.bind(_state);
  return observed
    ? [getter, setter, _state.subscribe.bind(_state)]
    : [getter, setter];
}
