enum RestrictedProps {
  subscriptions = "subscriptions",
  onmount = "onmount",
}
enum HTMLProps {
  id = "id",
  className = "className",
  style = "style",
}
enum EventProps {
  onabort = "onabort",
  onanimationcancel = "onanimationcancel",
  onanimationend = "onanimationend",
  onanimationiteration = "onanimationiteration",
  onanimationstart = "onanimationstart",
  onauxclick = "onauxclick",
  onbeforeinput = "onbeforeinput",
  onblur = "onblur",
  oncancel = "oncancel",
  oncanplay = "oncanplay",
  onplaythrough = "onplaythrough",
  onchange = "onchange",
  onclick = "onclick",
  onclose = "onclose",
  oncontextmenu = "oncontextmenu",
  oncopy = "oncopy",
  oncuechange = "oncuechange",
  oncut = "oncut",
  ondblclick = "ondblclick",
  ondrag = "ondrag",
  ondragstart = "ondragstart",
  ondragend = "ondragend",
  ondragenter = "ondragenter",
  ondragleave = "ondragleave",
  ondragover = "ondragover",
  ondrop = "ondrop",
  ondurationchange = "ondurationchange",
  onemptied = "onemptied",
  onended = "onended",
  onerror = "onerror",
  onfocus = "onfocus",
  onformdata = "onformdata",
  onfullscreenchange = "onfullscreenchange",
  onfullscreenerror = "onfullscreenerror",
  ongotpointercapture = "ongotpointercapture",
  oninput = "oninput",
  oninvalid = "oninvalid",
  onkeydown = "onkeydown",
  onkeyup = "onkeyup",
  onload = "onload",
  onloadd = "onloadd",
  onloadeddata = "onloadeddata",
  onloadedmetadata = "onloadedmetadata",
  onloadstart = "onloadstart",
  onlostpointercapture = "onlostpointercapture",
  onmousedown = "onmousedown",
  onmouseenter = "onmouseenter",
  onmouseleave = "onmouseleave",
  onmousemove = "onmousemove",
  onmouseout = "onmouseout",
  onmouseover = "onmouseover",
  onmouseup = "onmouseup",
  onpaste = "onpaste",
  onpause = "onpause",
  onplay = "onplay",
  onplaying = "onplaying",
  onpointercancel = "onpointercancel",
  onpointerdown = "onpointerdown",
  onpointerenter = "onpointerenter",
  onpointerleave = "onpointerleave",
  onpointermove = "onpointermove",
  onpointerout = "onpointerout",
  onpointerover = "onpointerover",
  onpointerup = "onpointerup",
  onprogress = "onprogress",
  onratechange = "onratechange",
  onreset = "onreset",
  onresize = "onresize",
  onscroll = "onscroll",
  onsecuritypolicyviolation = "onsecuritypolicyviolation",
  onseeked = "onseeked",
  onseeking = "onseeking",
  onselect = "onselect",
  onselectionchange = "onselectionchange",
  onselectstart = "onselectstart",
  onslotchange = "onslotchange",
  onstalled = "onstalled",
  onstorage = "onstorage",
  onsubmit = "onsubmit",
  onsuspend = "onsuspend",
  ontimeupdate = "ontimeupdate",
  ontoggle = "ontoggle",
  ontouchcancel = "ontouchcancel",
  ontouchend = "ontouchend",
  ontouchmove = "ontouchmove",
  ontouchstart = "ontouchstart",
  ontransitioncancel = "ontransitioncancel",
  ontransitionend = "ontransitionend",
  ontransitionstart = "ontransitionstart",
  onvolumechange = "onvolumechange",
  onwaiting = "onwaiting",
  onwheel = "onwheel",
}

export function filterRestrictedAtributes(att: Props) {
  const keys = Object.keys(att);
  let f = {};
  keys.forEach((k) => {
    if (!(k in RestrictedProps)) f[k] = att[k];
  });
  return f;
}

export function attrs(el: HTMLElement, props: AssignableAtributeProps) {
  if (typeof props === "object" && !Array.isArray(props)) {
    const at = Array.from(el.attributes);
    at.forEach((k) => {
      if (!(k.nodeName in props)) el.removeAttribute(k.nodeName);
    });
    for (const k in props) {
      if (k in RestrictedProps) continue;
      if (k in HTMLProps) el[k] = props[k];
      else if (k in EventProps)
        el.addEventListener(k.replace(/^on/, "") as string, props[k]);
      else if (!("on" + k in EventProps)) el.setAttribute(k, props[k]);
    }
  }
}
