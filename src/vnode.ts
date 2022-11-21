import DISPATCH, { VNODE_INSTANCE } from "./dispatcher";
import Fragment from "./fragment";
import Node from "./node";

export function vNode(
  type: string,
  props: FragmentProps = null,
  children: N[] = []
): N {
  const fragment = new Fragment(type, props, children);
  // TODO: NEED TO MOVE THIS
  {
    DISPATCH(VNODE_INSTANCE, fragment);
  }
  return new Node(fragment.$ref);
}
