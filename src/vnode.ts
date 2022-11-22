import DISPATCHER, { VNODE_INSTANCE } from "./dispatcher";
import Fragment from "./fragment";
import Node from "./node";

/**
 *  Generates a Fragment and registers it. Returns a Node referencing to it.
 *  @returns {N}
 */
export function vNode(
  type: string,
  props: FragmentProps = null,
  children: N[] = []
): N {
  const fragment = new Fragment(type, props, children);
  // TODO: need to take this somewhere
  {
    DISPATCHER(VNODE_INSTANCE, fragment);
  }
  return new Node(fragment.$ref);
}
