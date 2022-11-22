import Fragment from "./fragment";
import { Key } from "./key";
import REGISTRY from "./registry";
class _Tree {
  constructor() {
    throw new Error("Illegal constructor");
  }
  /**
   *  Returns an HTMLElement given a custom key or null if not found
   *  @returns {null | HTMLElement}
   */
  static getElement(customKey: KeyedRef): null | HTMLElement {
    if (!(customKey instanceof Key)) return null;
    const s = REGISTRY.getWhere((f) => {
      if (f.customKey) return f.customKey.key === customKey.key;
      return false;
    });
    if (s instanceof Fragment) return s.$el as HTMLElement;
    else return null;
  }
}
const Tree = _Tree;
export default Tree;
