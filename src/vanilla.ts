import { vNode } from "./vnode";

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Container = (props: FragmentProps, ...children: N[]): N =>
  vNode("div", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Main = (props: FragmentProps, ...children: N[]): N =>
  vNode("main", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Section = (props: FragmentProps, ...children: N[]): N =>
  vNode("section", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Article = (props: FragmentProps, ...children: N[]): N =>
  vNode("article", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Nav = (props: FragmentProps, ...children: N[]): N =>
  vNode("nav", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Aside = (props: FragmentProps, ...children: N[]): N =>
  vNode("aside", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Header = (props: FragmentProps, ...children: N[]): N =>
  vNode("header", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Footer = (props: FragmentProps, ...children: N[]): N =>
  vNode("footer", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const H1 = (props: FragmentProps, ...children: N[]): N =>
  vNode("h1", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const H2 = (props: FragmentProps, ...children: N[]): N =>
  vNode("h2", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const H3 = (props: FragmentProps, ...children: N[]): N =>
  vNode("h3", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const H4 = (props: FragmentProps, ...children: N[]): N =>
  vNode("h4", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const H5 = (props: FragmentProps, ...children: N[]): N =>
  vNode("h5", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const H6 = (props: FragmentProps, ...children: N[]): N =>
  vNode("h6", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Paragraph = (props: FragmentProps, ...children: N[]): N =>
  vNode("p", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Span = (props: FragmentProps, ...children: N[]): N =>
  vNode("p", props, children);

/**
 *  @param {string | (() => string)} text
 *  @returns {N}
 */
export const Text = (text: string | (() => string)) => vNode("text", text, []);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Img = (props: FragmentProps, ...children: N[]): N =>
  vNode("img", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Table = (props: FragmentProps, ...children: N[]): N =>
  vNode("table", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const THead = (props: FragmentProps, ...children: N[]): N =>
  vNode("thead", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const TBody = (props: FragmentProps, ...children: N[]): N =>
  vNode("tbody", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const TFoot = (props: FragmentProps, ...children: N[]): N =>
  vNode("tfoot", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Tr = (props: FragmentProps, ...children: N[]): N =>
  vNode("tr", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Th = (props: FragmentProps, ...children: N[]): N =>
  vNode("th", props, children);
/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Td = (props: FragmentProps, ...children: N[]): N =>
  vNode("td", props, children);

/**
 *  Creates a vanilla node
 *  @param {FragmentProps} props
 *  @param {N[]} children
 *  @returns {N}
 */
export const Button = (props: FragmentProps, ...children: N[]): N =>
  vNode("button", props, children);
