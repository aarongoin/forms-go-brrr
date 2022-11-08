var __defProp = Object.defineProperty;
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
function Fieldset(_a) {
  var _b = _a, {
    name,
    label,
    children,
    hint,
    hintClassName,
    labelClassName,
    group,
    labelStyle,
    hintStyle
  } = _b, props = __objRest(_b, [
    "name",
    "label",
    "children",
    "hint",
    "hintClassName",
    "labelClassName",
    "group",
    "labelStyle",
    "hintStyle"
  ]);
  const hintId = `${name}-hint`;
  return /* @__PURE__ */ React.createElement("fieldset", __spreadValues({
    "data-fgb": "fieldset"
  }, props), /* @__PURE__ */ React.createElement("span", {
    id: hintId,
    "data-fgb": "hint",
    className: hintClassName,
    "aria-live": "polite",
    "data-fgb-hint": hint,
    style: __spreadValues({ order: 2 }, hintStyle)
  }, hint), group ? /* @__PURE__ */ React.createElement("legend", {
    "data-fgb": "label",
    className: labelClassName,
    style: labelStyle
  }, label) : /* @__PURE__ */ React.createElement("label", {
    htmlFor: name,
    "data-fgb": "label",
    className: labelClassName,
    style: labelStyle
  }, label), children);
}
export {
  Fieldset
};
