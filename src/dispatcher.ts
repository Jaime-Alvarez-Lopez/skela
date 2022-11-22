import Fragment from "./fragment";
import Node from "./node";
import REGISTRY from "./registry";
import { isArray, isSymbol } from "./utils";

export const VNODE_INSTANCE = "VNODE_INSTANCE";
export const FRAGMENT_RENDER = "FRAGMENT_RENDER";
export const FRAGMENT_MOUNT_ACCORDION = "FRAGMENT_MOUNT_ACCORDION";
export const APPEND_ELEMENT_CHILDS = "APPEND_ELEMENT_CHILDS";
export const CHILDREN_HYDRATE = "CHILDREN_HYDRATE";
export const STATE_UPDATE = "STATE_UPDATE";
export const FRAGMENT_SIDE_EFFECT = "FRAGMENT_SIDE_EFFECT";

class SkelaProcessEvents {
  static #events = new Map([
    [VNODE_INSTANCE, (ev: CustomEvent) => REGISTRY.set(ev.detail)],
    [
      APPEND_ELEMENT_CHILDS,
      (ev: CustomEvent) =>
        queueMicrotask(() => {
          const fragment: F = ev.detail;
          fragment.children.forEach((c) =>
            fragment.$el.appendChild(REGISTRY.get(c.$ref).$el)
          );
        }),
    ],
    [
      FRAGMENT_RENDER,
      (ev: CustomEvent) =>
        queueMicrotask(() => {
          const { target, fragment } = ev.detail;
          if (!fragment) return;
          let _fr = fragment;
          if (isSymbol(_fr) && REGISTRY.has(_fr)) _fr = REGISTRY.get(_fr) as F;
          if (!(_fr instanceof Fragment)) return;
          if (!target) document.body.appendChild(_fr.$el);
          if (target instanceof Fragment) target.$el.appendChild(_fr.$el);
          if (target instanceof Node)
            REGISTRY.get(_fr.key).$el.appendChild(fragment.$el);
          _fr.setMounted(true);
        }),
    ],
    [
      FRAGMENT_MOUNT_ACCORDION,
      (ev: CustomEvent) => {
        const _nodes: N[] = ev.detail;
        queueMicrotask(() => {
          _nodes.forEach((n) => REGISTRY.get(n.$ref).setMounted(true));
        });
      },
    ],
    [
      CHILDREN_HYDRATE,
      (ev: CustomEvent) =>
        queueMicrotask(() =>
          (ev.detail as N[]).forEach(
            (c) => void (REGISTRY.get(c.$ref) as F).hydrate()
          )
        ),
    ],
    [
      STATE_UPDATE,
      (ev: CustomEvent) =>
        queueMicrotask(() => {
          const updateTargets: symbol[] = ev.detail;
          if (isArray(updateTargets))
            updateTargets.forEach((t) => void (REGISTRY.get(t) as F).hydrate());
        }),
    ],
    [
      FRAGMENT_SIDE_EFFECT,
      (ev: CustomEvent) => {
        const cb: () => void = ev.detail;
        queueMicrotask(cb);
      },
    ],
  ]);
  static applyEvents() {
    this.#events.forEach(
      (ev, key) => void window.addEventListener(key, ev as EventListener)
    );
  }
}

class Dispatcher {
  constructor() {
    throw new Error("Illegal constructor");
  }
  public static dispatch(ev: string, data: any) {
    const Event = new CustomEvent(ev, {
      detail: data,
      cancelable: false,
      bubbles: false,
    });
    return void window.dispatchEvent(Event);
  }
}

SkelaProcessEvents.applyEvents();

const DISPATCHER = Dispatcher.dispatch.bind(Dispatcher);

export default DISPATCHER;
