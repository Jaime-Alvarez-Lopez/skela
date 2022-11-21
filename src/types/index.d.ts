type Props = {
  id?: string;
  className?: string;
  style?: string;
  onmount?: CallableFunction;
  subscriptions?: ((ref: symbol) => void)[];
  onabort?: EventListener;
  onanimationcancel?: EventListener;
  onanimationend?: EventListener;
  onanimationiteration?: EventListener;
  onanimationstart?: EventListener;
  onauxclick?: EventListener;
  onbeforeinput?: EventListener;
  onblur?: EventListener;
  oncancel?: EventListener;
  oncanplay?: EventListener;
  onplaythrough?: EventListener;
  onchange?: EventListener;
  onclick?: EventListener;
  onclose?: EventListener;
  oncontextmenu?: EventListener;
  oncopy?: EventListener;
  oncuechange?: EventListener;
  oncut?: EventListener;
  ondblclick?: EventListener;
  ondrag?: EventListener;
  ondragstart?: EventListener;
  ondragend?: EventListener;
  ondragenter?: EventListener;
  ondragleave?: EventListener;
  ondragover?: EventListener;
  ondrop?: EventListener;
  ondurationchange?: EventListener;
  onemptied?: EventListener;
  onended?: EventListener;
  onerror?: EventListener;
  onfocus?: EventListener;
  onformdata?: EventListener;
  onfullscreenchange?: EventListener;
  onfullscreenerror?: EventListener;
  ongotpointercapture?: EventListener;
  oninput?: EventListener;
  oninvalid?: EventListener;
  onkeydown?: EventListener;
  onkeyup?: EventListener;
  onload?: EventListener;
  onloadd?: EventListener;
  onloadeddata?: EventListener;
  onloadedmetadata?: EventListener;
  onloadstart?: EventListener;
  onlostpointercapture?: EventListener;
  onmousedown?: EventListener;
  onmouseenter?: EventListener;
  onmouseleave?: EventListener;
  onmousemove?: EventListener;
  onmouseout?: EventListener;
  onmouseover?: EventListener;
  onmouseup?: EventListener;
  onpaste?: EventListener;
  onpause?: EventListener;
  onplay?: EventListener;
  onplaying?: EventListener;
  onpointercancel?: EventListener;
  onpointerdown?: EventListener;
  onpointerenter?: EventListener;
  onpointerleave?: EventListener;
  onpointermove?: EventListener;
  onpointerout?: EventListener;
  onpointerover?: EventListener;
  onpointerup?: EventListener;
  onprogress?: EventListener;
  onratechange?: EventListener;
  onreset?: EventListener;
  onresize?: EventListener;
  onscroll?: EventListener;
  onsecuritypolicyviolation?: EventListener;
  onseeked?: EventListener;
  onseeking?: EventListener;
  onselect?: EventListener;
  onselectionchange?: EventListener;
  onselectstart?: EventListener;
  onslotchange?: EventListener;
  onstalled?: EventListener;
  onstorage?: EventListener;
  onsubmit?: EventListener;
  onsuspend?: EventListener;
  ontimeupdate?: EventListener;
  ontoggle?: EventListener;
  ontouchcancel?: EventListener;
  ontouchend?: EventListener;
  ontouchmove?: EventListener;
  ontouchstart?: EventListener;
  ontransitioncancel?: EventListener;
  ontransitionend?: EventListener;
  ontransitionstart?: EventListener;
  onvolumechange?: EventListener;
  onwaiting?: EventListener;
  onwheel?: EventListener;
};

type FragmentProps = Props | (() => Props | string) | string | null;

declare abstract class F {
  constructor(tag: string, props: FragmentProps, children: N[]);
  public abstract get $el(): HTMLElement;
  public abstract get $ref(): symbol;
  public abstract get hasChildren(): boolean;
  public abstract get children(): N[];
  public abstract get props(): any;
  public abstract get owner(): any;
  public abstract render(target?: HTMLElement | F): void;
  public abstract set _owner(owner: symbol);
  public abstract hydrate(): void;
}
declare abstract class N {
  public abstract get $ref(): symbol;
  public abstract access(key: symbol): CallableFunction | null;
}

declare abstract class Subscription {
  public abstract subscribe(ref: symbol): void;
}
type FragmentSubscription = (ref: symbol) => void;

declare abstract class StateMiddleware extends Subscription {
  constructor(initialState: any, observed: boolean);
  public abstract getState(): any;
  public abstract setState(nextState: any | ((lastState: any) => any)): void;
}

type StateExecutors =
  | [
      getter: () => any,
      setter: (nextState: (lastState: any) => any) => void,
      subscription: FragmentSubscription
    ]
  | [getter: () => any, setter: (nextState: (lastState: any) => any) => void];

type HTMLAtributes = {
  id?: string;
  className?: string;
  style?: string;
};
type EventAtributes = {
  onabort?: EventListener;
  onanimationcancel?: EventListener;
  onanimationend?: EventListener;
  onanimationiteration?: EventListener;
  onanimationstart?: EventListener;
  onauxclick?: EventListener;
  onbeforeinput?: EventListener;
  onblur?: EventListener;
  oncancel?: EventListener;
  oncanplay?: EventListener;
  onplaythrough?: EventListener;
  onchange?: EventListener;
  onclick?: EventListener;
  onclose?: EventListener;
  oncontextmenu?: EventListener;
  oncopy?: EventListener;
  oncuechange?: EventListener;
  oncut?: EventListener;
  ondblclick?: EventListener;
  ondrag?: EventListener;
  ondragstart?: EventListener;
  ondragend?: EventListener;
  ondragenter?: EventListener;
  ondragleave?: EventListener;
  ondragover?: EventListener;
  ondrop?: EventListener;
  ondurationchange?: EventListener;
  onemptied?: EventListener;
  onended?: EventListener;
  onerror?: EventListener;
  onfocus?: EventListener;
  onformdata?: EventListener;
  onfullscreenchange?: EventListener;
  onfullscreenerror?: EventListener;
  ongotpointercapture?: EventListener;
  oninput?: EventListener;
  oninvalid?: EventListener;
  onkeydown?: EventListener;
  onkeyup?: EventListener;
  onload?: EventListener;
  onloadd?: EventListener;
  onloadeddata?: EventListener;
  onloadedmetadata?: EventListener;
  onloadstart?: EventListener;
  onlostpointercapture?: EventListener;
  onmousedown?: EventListener;
  onmouseenter?: EventListener;
  onmouseleave?: EventListener;
  onmousemove?: EventListener;
  onmouseout?: EventListener;
  onmouseover?: EventListener;
  onmouseup?: EventListener;
  onpaste?: EventListener;
  onpause?: EventListener;
  onplay?: EventListener;
  onplaying?: EventListener;
  onpointercancel?: EventListener;
  onpointerdown?: EventListener;
  onpointerenter?: EventListener;
  onpointerleave?: EventListener;
  onpointermove?: EventListener;
  onpointerout?: EventListener;
  onpointerover?: EventListener;
  onpointerup?: EventListener;
  onprogress?: EventListener;
  onratechange?: EventListener;
  onreset?: EventListener;
  onresize?: EventListener;
  onscroll?: EventListener;
  onsecuritypolicyviolation?: EventListener;
  onseeked?: EventListener;
  onseeking?: EventListener;
  onselect?: EventListener;
  onselectionchange?: EventListener;
  onselectstart?: EventListener;
  onslotchange?: EventListener;
  onstalled?: EventListener;
  onstorage?: EventListener;
  onsubmit?: EventListener;
  onsuspend?: EventListener;
  ontimeupdate?: EventListener;
  ontoggle?: EventListener;
  ontouchcancel?: EventListener;
  ontouchend?: EventListener;
  ontouchmove?: EventListener;
  ontouchstart?: EventListener;
  ontransitioncancel?: EventListener;
  ontransitionend?: EventListener;
  ontransitionstart?: EventListener;
  onvolumechange?: EventListener;
  onwaiting?: EventListener;
  onwheel?: EventListener;
};

type AssignableAtributeProps = HTMLAtributes & EventAtributes;
