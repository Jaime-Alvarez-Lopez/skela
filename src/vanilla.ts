import { vNode } from "./vnode";

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Container = (
  props: FragmentProps,
  children: N[] | (() => N[])
): N => vNode("div", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Main = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("main", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Section = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("section", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Article = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("article", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Nav = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("nav", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Aside = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("aside", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Header = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("header", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Footer = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("footer", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const H1 = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("h1", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const H2 = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("h2", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const H3 = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("h3", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const H4 = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("h4", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const H5 = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("h5", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const H6 = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("h6", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Paragraph = (
  props: FragmentProps,
  children: N[] | (() => N[])
): N => vNode("p", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Span = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("span", props, children);

/**
 *  @param {string | (() => string)} text
 *  @returns {N} The generated node
 */
export const Text = (text: string | (() => string)) => vNode("text", text, []);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Img = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("img", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Table = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("table", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const THead = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("thead", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const TBody = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("tbody", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const TFoot = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("tfoot", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Tr = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("tr", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Th = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("th", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Td = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("td", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Button = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("button", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Link = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("a", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Form = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("form", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const TextArea = (
  props: FragmentProps,
  children: N[] | (() => N[])
): N => vNode("textarea", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Input = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("input", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Label = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("label", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Meter = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("meter", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Progress = (
  props: FragmentProps,
  children: N[] | (() => N[])
): N => vNode("progress", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Details = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("details", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Summary = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("summary", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Legend = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("legend", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Dialog = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("dialog", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Slot = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("slot", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Select = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("select", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Option = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("option", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const OptGroup = (
  props: FragmentProps,
  children: N[] | (() => N[])
): N => vNode("optgroup", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Ul = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("ul", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Ol = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("ol", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Li = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("li", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @returns {N} The generated node
 */
export const Hr = (props: FragmentProps): N => vNode("hr", props, []);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @returns {N} The generated node
 */
export const Br = (props: FragmentProps): N => vNode("br", props, []);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Menu = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("menu", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Pre = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("pre", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Code = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("code", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Cite = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("cite", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Caption = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("caption", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Col = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("col", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const ColGroup = (
  props: FragmentProps,
  children: N[] | (() => N[])
): N => vNode("colgroup", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Mark = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("mark", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Small = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("small", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Strong = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("strong", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Canvas = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("canvas", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Audio = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("audio", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Video = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("video", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const IFrame = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("iframe", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Picture = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("picture", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Source = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("source", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Svg = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("svg", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const NoScript = (
  props: FragmentProps,
  children: N[] | (() => N[])
): N => vNode("noscript", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[] | (() => N[])} children
 *  @returns {N} The generated node
 */
export const Script = (props: FragmentProps, children: N[] | (() => N[])): N =>
  vNode("script", props, children);
