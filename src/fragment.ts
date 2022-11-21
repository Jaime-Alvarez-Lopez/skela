import { attrs, filterRestrictedAtributes } from "./atributtes";
import DISPATCH, {
  APPEND_ELEMENT_CHILDS,
  CHILDREN_HYDRATE,
  FRAGMENT_RENDER,
  FRAGMENT_REQUEST,
} from "./dispatcher";
import cEl from "./el";
import REGISTRY from "./registry";
import { $GLOBAL_REF, $NO_PROPS, $PARENT_PROPS } from "./symbols";

/**
 *  The Fragment element.
 *  @class
 */
export default class Fragment implements F {
  readonly #ref: symbol = Symbol("$fragment$");
  #owner: symbol;
  #el: HTMLElement;
  #props: FragmentProps | any;
  #children: N[];
  /**
   *  @param {string} tag
   *  @param {FragmentProps} props
   *  @constructs Fragment
   */
  constructor(tag: string, props: FragmentProps, children: N[]) {
    this.#el = cEl(tag, props);
    this.#props = props;
    this.#children = children;
    this.#owner = $GLOBAL_REF;
    {
      if (this.#children.length > 0) DISPATCH(APPEND_ELEMENT_CHILDS, this);
      if (typeof this.props === "object") {
        const _p = this.#props as Props;
        if (_p.subscriptions) _p.subscriptions.forEach((s) => s(this.#ref));
        if (_p.onmount) DISPATCH(FRAGMENT_REQUEST, _p.onmount);
      }
    }
  }
  public get owner(): any {
    return this.#owner;
  }
  hydrate(): void {
    // Add the attributes
    switch (this.#props) {
      case $PARENT_PROPS:
        const _parent =
          this.#owner === $GLOBAL_REF
            ? (() => {
                throw new Error(
                  "Can't inherit props from an object whose parent is the global document."
                );
              })()
            : (REGISTRY.get(this.#owner) as F);
        this.#props = _parent.props;
        break;
      case $NO_PROPS:
        this.#props = null;
        break;
    }
    if (this.#el instanceof HTMLElement && this.#props)
      attrs(
        this.#el,
        filterRestrictedAtributes(
          typeof this.#props === "function" ? this.#props() : this.#props
        )
      );
    if (this.#el instanceof Text && this.#props)
      this.#el.data =
        typeof this.#props === "function" ? this.#props() : this.#props;

    if (this.hasChildren) DISPATCH(CHILDREN_HYDRATE, this.#children);
  }
  public get props(): any {
    return this.#props;
  }
  public get hasChildren(): boolean {
    return this.#children.length > 0;
  }
  public get children(): N[] {
    return this.#children;
  }
  public get $ref() {
    return this.#ref;
  }
  public get $el() {
    return this.#el;
  }
  public set _owner(owner: symbol) {
    this.#owner = owner;
  }
  public render(target?: HTMLElement | F | N) {
    this.hydrate();
    DISPATCH(FRAGMENT_RENDER, { target: target, fragment: this });
  }
}
