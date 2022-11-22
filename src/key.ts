export class Key implements KeyedRef {
  #ref: symbol;
  constructor(namespace: string) {
    this.#ref = Symbol(`$${namespace}:ref`);
  }
  get key(): symbol {
    return this.#ref;
  }
}
export default function createFragmentKey(): Key {
  return new Key("fragment.custom");
}
