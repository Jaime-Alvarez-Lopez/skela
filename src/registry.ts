import Fragment from "./fragment";

class Registry {
  readonly #reg = new Map();

  set(fragment: F) {
    if (!(fragment instanceof Fragment)) return;
    return void this.#reg.set(fragment.key, fragment);
  }
  get(ref: symbol): F {
    return this.#reg.get(ref) ?? null;
  }
  getWhere(comparison: (v: F) => boolean) {
    const _reg = Array.from(this.#reg);
    if (!_reg.some((v) => comparison(v[1]))) return null;
    const _r = _reg.filter((v) => comparison(v[1]));
    if (_r.length > 0) return _r[0][1];
    else return null;
  }
  has(ref: symbol): boolean {
    return this.#reg.has(ref);
  }
  hasWhere(comparison: (v: F) => boolean) {
    const _reg = Array.from(this.#reg);
    return _reg.some((v) => comparison(v[1]));
  }
  remove(ref: symbol) {
    this.#reg.delete(ref);
  }
}
/**
 *  @readonly
 */

const REGISTRY = new Registry();

export default REGISTRY;
