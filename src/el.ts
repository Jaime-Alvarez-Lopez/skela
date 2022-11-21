export default function cEl(type: string, props: any): HTMLElement | any {
  let _cEl = document.createElement.bind(document);
  let _cTx = document.createTextNode.bind(document);
  switch (type) {
    case "text":
      return _cTx(props);
    default:
      return _cEl(type);
  }
}
