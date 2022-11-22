import Fragment from "./fragment";
import Node from "./node";
import REGISTRY from "./registry";

export const VNODE_INSTANCE = "VNODE_INSTANCE";
export const FRAGMENT_RENDER = "FRAGMENT_RENDER";
export const APPEND_ELEMENT_CHILDS = "APPEND_ELEMENT_CHILDS";
export const CHILDREN_HYDRATE = "CHILDREN_HYDRATE";
export const STATE_UPDATE = "STATE_UPDATE";
export const FRAGMENT_SIDE_EFFECT = "FRAGMENT_SIDE_EFFECT";

class SkelaProcessEvents {
  static #events = new Map([
    [VNODE_INSTANCE, (ev: CustomEvent) => void REGISTRY.set(ev.detail)],
    [
      APPEND_ELEMENT_CHILDS,
      (ev: CustomEvent) =>
        void queueMicrotask(() => {
          const fragment: F = ev.detail;
          fragment.children.forEach((c) =>
            fragment.$el.appendChild(REGISTRY.get(c.$ref).$el)
          );
        }),
    ],
    [
      FRAGMENT_RENDER,
      (ev: CustomEvent) =>
        void queueMicrotask(() => {
          const { target, fragment } = ev.detail;
          if (!fragment && !(fragment instanceof Fragment)) return;
          if (!target) document.body.appendChild((fragment as F).$el);
          if (target instanceof Fragment)
            target.$el.appendChild((fragment as F).$el);
          if (target instanceof Node)
            REGISTRY.get((target as N).$ref).$el.appendChild(fragment.$el);
        }),
    ],
    [
      CHILDREN_HYDRATE,
      (ev: CustomEvent) =>
        void queueMicrotask(() =>
          (ev.detail as N[]).forEach(
            (c) => void (REGISTRY.get(c.$ref) as F).hydrate()
          )
        ),
    ],
    [
      STATE_UPDATE,
      (ev: CustomEvent) =>
        void queueMicrotask(() => {
          const updateTargets: symbol[] = ev.detail;
          updateTargets.forEach((t) => void (REGISTRY.get(t) as F).hydrate());
        }),
    ],
    [
      FRAGMENT_SIDE_EFFECT,
      (ev: CustomEvent) =>
        void queueMicrotask(async () => {
          const cb: CallableFunction = ev.detail;
          await cb();
        }),
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

const DISPATCHERER = Dispatcher.dispatch.bind(Dispatcher);

export default DISPATCHERER;
