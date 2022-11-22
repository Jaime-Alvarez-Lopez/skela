import REGISTRY from "./registry";
import { $RENDER } from "./symbols";
import { isSymbol } from "./utils";

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
  public access(key: symbol): CallableFunction | null {
    if (isSymbol(key))
      throw new Error(
        "Unrecognized key of type " +
          typeof key +
          ".Please use a symbol to access."
      );
    const _reg = REGISTRY.get(this.#ref);

    switch (key) {
      case $RENDER:
        return _reg.render.bind(_reg);
      default:
        return null;
    }
  }
}
