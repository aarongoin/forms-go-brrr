var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import * as React from "react";
function Label(_a) {
  var _b = _a, {
    label,
    name,
    children,
    hint,
    textClassName,
    hintClassName,
    className
  } = _b, props = __objRest(_b, [
    "label",
    "name",
    "children",
    "hint",
    "textClassName",
    "hintClassName",
    "className"
  ]);
  const hintId = `${name}-hint`;
  return /* @__PURE__ */ React.createElement("label", __spreadProps(__spreadValues({
    htmlFor: name
  }, props), {
    className: "fgb-Label".concat(className ? " " : "", className || "")
  }), typeof label === "string" ? /* @__PURE__ */ React.createElement("span", {
    className: "fgb-Label-text".concat(
      textClassName ? " " : "",
      textClassName || ""
    )
  }, label) : label, children, /* @__PURE__ */ React.createElement("span", {
    id: hintId,
    className: "fgb-Label-hint".concat(
      hintClassName ? " " : "",
      hintClassName || ""
    ),
    "aria-live": "polite"
  }, hint));
}
function InlineLabel({
  label,
  children,
  className
}) {
  return /* @__PURE__ */ React.createElement("label", {
    className: "fgb-InlineLabel".concat(className ? " " : "", className || "")
  }, children, label);
}
export {
  InlineLabel,
  Label
};
