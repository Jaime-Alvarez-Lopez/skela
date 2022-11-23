import Fragment from "./fragment";
import Node from "./node";
import REGISTRY from "./registry";
import { isArray, isSymbol } from "./utils";

export const VNODE_INSTANCE = "VNODE_INSTANCE";
export const FRAGMENT_RENDER = "FRAGMENT_RENDER";
export const FRAGMENT_NORENDER = "FRAGMENT_NORENDER";
export const FRAGMENT_MOUNT_ACCORDION = "FRAGMENT_MOUNT_ACCORDION";
export const FRAGMENT_UNMOUNT_ACCORDION = "FRAGMENT_UNMOUNT_ACCORDION";

export const APPEND_ELEMENT_CHILDS = "APPEND_ELEMENT_CHILDS";
export const CHILDREN_HYDRATE = "CHILDREN_HYDRATE";
export const STATE_UPDATE = "STATE_UPDATE";
export const FRAGMENT_SIDE_EFFECT = "FRAGMENT_SIDE_EFFECT";
export const FRAGMENT_APPEND_AT_INDEX = "FRAGMENT_APPEND_AT_INDEX";

class SkelaProcessEvents {
  static #events = new Map([
    [VNODE_INSTANCE, (ev: CustomEvent) => REGISTRY.set(ev.detail)],
    [
      APPEND_ELEMENT_CHILDS,
      (ev: CustomEvent) =>
        queueMicrotask(() => {
          const fragment: F = ev.detail;
          fragment.children.forEach((c, i) => {
            const _fr = REGISTRY.get(c.$ref);
            _fr.setIndexAt(i);
            fragment.$el.appendChild(_fr.$el);
          });
        }),
    ],
    [
      FRAGMENT_RENDER,
      (ev: CustomEvent) => {
        const { target, fragment } = ev.detail;
        if (!fragment) return;
        queueMicrotask(() => {
          let _fr: any = fragment;
          if (isSymbol(_fr) && REGISTRY.has(_fr)) _fr = REGISTRY.get(_fr) as F;
          if (!(_fr instanceof Fragment)) return;
          if (_fr.mounted) return;
          const _target = !target
            ? document.body
            : target instanceof HTMLElement
            ? target
            : target instanceof Fragment
            ? target.$el
            : target instanceof Node
            ? REGISTRY.get(target.$ref).$el
            : null;
          if (!_target)
            return console.warn(
              "Could't find a target to paint the component."
            );

          DISPATCHER(FRAGMENT_APPEND_AT_INDEX, {
            fragment: _fr,
            parent: _target,
          });
          _fr.setMounted(true);
          queueMicrotask(() => _fr.hydrate());
        });
      },
    ],
    [
      FRAGMENT_NORENDER,
      (ev: CustomEvent) => {
        const { fragment } = ev.detail;
        if (!fragment) return;
        queueMicrotask(() => {
          let _fr: any = fragment;
          if (isSymbol(_fr)) _fr = REGISTRY.get(_fr);
          if (!(_fr instanceof Fragment)) return;
          if (!_fr.mounted) return;
          const parent = _fr.$el.parentElement;
          if (!parent) return;
          parent.removeChild(_fr.$el);
          _fr.setMounted(false);
        });
      },
    ],
    [
      FRAGMENT_APPEND_AT_INDEX,
      (ev: CustomEvent) => {
        const { parent, fragment } = ev.detail as {
          parent: HTMLElement;
          fragment: F;
        };
        const index = fragment.indexedAt;
        const el = fragment.$el;
        if (index >= parent.children.length) {
          parent.appendChild(el);
        } else {
          parent;
          parent.insertBefore(el, parent.children[index]);
        }
      },
    ],
    [
      FRAGMENT_MOUNT_ACCORDION,
      (ev: CustomEvent) => {
        const _nodes: N[] = ev.detail;
        queueMicrotask(() => {
          _nodes.forEach((n) => {
            const _reg = REGISTRY.get(n.$ref);
            _reg.setMounted(true);
          });
        });
      },
    ],
    [
      FRAGMENT_UNMOUNT_ACCORDION,
      (ev: CustomEvent) => {
        const _nodes: N[] = ev.detail;
        queueMicrotask(() => {
          _nodes.forEach((n) => {
            const _reg = REGISTRY.get(n.$ref);
            _reg.setMounted(false);
          });
        });
      },
    ],
    [
      CHILDREN_HYDRATE,
      (ev: CustomEvent) =>
        queueMicrotask(() =>
          (ev.detail as N[]).forEach((c) =>
            (REGISTRY.get(c.$ref) as F).hydrate()
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
