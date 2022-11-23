import { Key } from "./key";
import { attrs, filterRestrictedAtributes } from "./atributtes";
import DISPATCHER, {
  APPEND_ELEMENT_CHILDS,
  CHILDREN_HYDRATE,
  FRAGMENT_MOUNT_ACCORDION,
  FRAGMENT_SIDE_EFFECT,
  FRAGMENT_UNMOUNT_ACCORDION,
} from "./dispatcher";
import cEl from "./el";
import { isArray, isFunction, isObject, sanityzeProps } from "./utils";
import REGISTRY from "./registry";

/**
 *  Represents an htmlelement.
 *  @class
 */
export default class Fragment extends Key implements F {
  #el: HTMLElement | Text;
  #props: FragmentProps | any;
  #children: N[];
  #customKey: null | KeyedRef = null;
  #mounted = false;
  #cycle: { onmount: (() => void) | null; onunmount: (() => void) | null } = {
    onmount: null,
    onunmount: null,
  };
  #index: number = 0;
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
        if (_p.key && _p.key instanceof Key) {
          if (REGISTRY.hasWhere((v) => v.customKey === _p.key))
            throw new Error(
              "A Node has already been referenced with this key. Plese provide a different key."
            );
          this.#customKey = _p.key;
        }
        if (_p.subscriptions) _p.subscriptions.forEach((s) => s(this.key));
        if (_p.onmount) this.#cycle.onmount = _p.onmount as () => void;
        if (_p.onunmount) this.#cycle.onunmount = _p.onunmount as () => void;
      }
    }
  }
  public setIndexAt(index: number): void {
    this.#index = index;
  }
  public get indexedAt(): number {
    return this.#index;
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
      this.#el.deleteData(0, this.#el.data.length),
        this.#el.insertData(
          0,
          isFunction(this.#props) ? this.#props() : this.#props
        );
    }
    if (this.hasChildren) DISPATCHER(CHILDREN_HYDRATE, this.#children);
  }
  public setMounted(mounted: boolean) {
    if (mounted === this.#mounted) return;
    if (mounted) {
      if (this.hasChildren)
        DISPATCHER(FRAGMENT_MOUNT_ACCORDION, this.#children);
      if (this.#cycle.onmount)
        DISPATCHER(FRAGMENT_SIDE_EFFECT, this.#cycle.onmount);
    } else {
      if (this.hasChildren)
        DISPATCHER(FRAGMENT_UNMOUNT_ACCORDION, this.#children);
      if (this.#cycle.onunmount)
        DISPATCHER(FRAGMENT_SIDE_EFFECT, this.#cycle.onunmount);
    }
    this.#mounted = mounted;
  }
  public get mounted() {
    return this.#mounted;
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
