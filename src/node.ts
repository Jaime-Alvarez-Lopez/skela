import DISPATCHER, { FRAGMENT_NORENDER, FRAGMENT_RENDER } from "./dispatcher";
/**
 *  Represents a vnode. References a fragment.
 *  @class
 */
export default class Node implements N {
  readonly #ref: symbol;
  /**
   *  @constructs Node
   */
  constructor(ref: symbol) {
    this.#ref = ref;
  }

  public get $ref() {
    return this.#ref;
  }
  public paint(target?: HTMLElement | N) {
    void DISPATCHER(FRAGMENT_RENDER, { target: target, fragment: this.#ref });
  }
  public unpaint(): void {
    void DISPATCHER(FRAGMENT_NORENDER, { fragment: this.#ref });
  }
}
