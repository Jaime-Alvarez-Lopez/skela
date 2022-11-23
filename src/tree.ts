import Fragment from "./fragment";
import { Key } from "./key";
import Node from "./node";
import REGISTRY from "./registry";

/**
 *  @class
 */
class _Tree implements TreeRegistry {
  /**
   *  @throws {Error}
   */
  constructor() {
    throw new Error("Illegal constructor");
  }
  /**
   *  Returns an HTMLElement given a custom key or null if not found
   *  @param {KeyedRef} customKey
   *  @returns {HTMLElement | null}
   */
  public static getElement(customKey: KeyedRef): HTMLElement | null {
    if (!(customKey instanceof Key)) return null;
    const s = REGISTRY.getWhere((f) => {
      if (f.customKey) return f.customKey.key === customKey.key;
      return false;
    });
    if (s instanceof Fragment) return s.$el as HTMLElement;
    else return null;
  }
  /**
   *  Returns a Node given a custom key or null if not found
   *  @param {KeyedRef} customKey
   *  @returns {N | null}
   */
  public static getNode(customKey: KeyedRef): N | null {
    if (!(customKey instanceof Key)) return null;
    const s = REGISTRY.getWhere((f) => {
      if (f.customKey) return f.customKey.key === customKey.key;
      return false;
    });
    if (s instanceof Fragment) return new Node(s.key);
    else return null;
  }
}
const Tree = _Tree;
export default Tree;
