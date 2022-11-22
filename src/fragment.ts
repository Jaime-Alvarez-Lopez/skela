import { Key } from "./key";
import { attrs, filterRestrictedAtributes } from "./atributtes";
import DISPATCHER, {
  APPEND_ELEMENT_CHILDS,
  CHILDREN_HYDRATE,
  FRAGMENT_SIDE_EFFECT,
} from "./dispatcher";
import cEl from "./el";
import { isArray, isFunction, isObject, sanityzeProps } from "./utils";

/**
 *  Represents an htmlelement.
 *  @class
 */
export default class Fragment extends Key implements F {
  #el: HTMLElement | Text;
  #props: FragmentProps | any;
  #children: N[];
  #customKey: null | KeyedRef = null;
  /**
   *  @param {string} tag
   *  @param {FragmentProps} props
   *  @constructs Fragment
   */
  constructor(tag: string, props: FragmentProps, children: N[]) {
    super("fragment");
    this.#el = cEl(tag, props);
    this.#props = sanityzeProps(props);
    this.#children = children;
    {
      if (this.hasChildren) DISPATCHER(APPEND_ELEMENT_CHILDS, this);
      if (isObject(this.#props)) {
        const _p = this.#props as Props;
        if (_p.key && _p.key instanceof Key) this.#customKey = _p.key;
        if (_p.subscriptions) _p.subscriptions.forEach((s) => s(this.key));
        if (_p.onmount) DISPATCHER(FRAGMENT_SIDE_EFFECT, _p.onmount);
      }
    }
  }
  public hydrate(): void {
    if (this.#el instanceof HTMLElement && this.#props)
      attrs(
        this.#el,
        filterRestrictedAtributes(
          isFunction(this.#props) ? this.#props() : this.#props
        )
      );
    if (this.#el instanceof Text && this.#props) {
      this.#el.deleteData(0, this.#el.data.length);
      this.#el.insertData(
        0,
        isFunction(this.#props) ? this.#props() : this.#props
      );
    }
    if (this.hasChildren) DISPATCHER(CHILDREN_HYDRATE, this.#children);
  }
  public get props(): any {
    return this.#props;
  }
  public get hasChildren(): boolean {
    return isArray(this.#children) && this.#children.length > 0;
  }
  public get children(): N[] {
    return this.#children;
  }
  public get customKey(): null | KeyedRef {
    return this.#customKey;
  }
  public get $el() {
    return this.#el;
  }
}
