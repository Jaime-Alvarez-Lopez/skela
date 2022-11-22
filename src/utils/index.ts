import { $NO_PROPS } from "../symbols";

export function isObject<K extends any>(target: K): boolean {
  return (
    target &&
    typeof target === "object" &&
    !isArray(target) &&
    !isFunction(target)
  );
}

export function isArray<K extends any>(target: K): boolean {
  return typeof target === "object" && Array.isArray(target);
}

export function isFunction<K extends any>(target: K): boolean {
  return typeof target === "function";
}

export function isSymbol<K extends any>(target: K): boolean {
  return typeof target === "symbol";
}
export function isString<K extends any>(target: K): boolean {
  return typeof target === "string";
}

export function sanityzeProps(props: FragmentProps | any): FragmentProps {
  if (props === $NO_PROPS) return null;
  else if (isFunction(props) || isString(props) || isObject(props))
    return props;
  else return null;
}
