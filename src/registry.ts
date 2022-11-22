import Fragment from "./fragment";

class Registry {
  readonly #reg = new Map();

  set(fragment: F) {
    if (!(fragment instanceof Fragment)) return;
    return void this.#reg.set(fragment.$ref, fragment);
  }
  get(ref: symbol): F {
    return this.#reg.get(ref) ?? null;
  }
  has(ref: symbol): boolean {
    return this.#reg.has(ref);
  }
}
/**
 *  @readonly
 */

const REGISTRY = new Registry();

export default REGISTRY;
