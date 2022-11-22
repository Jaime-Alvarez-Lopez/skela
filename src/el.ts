import { isString } from "./utils";

export default function cEl(type: string, props?: any): HTMLElement | Text {
  let _cEl = document.createElement.bind(document);
  let _cTx = document.createTextNode.bind(document);
  switch (type) {
    case "text":
      return _cTx(isString(props) ? props : "");
    default:
      return _cEl(type);
  }
}
