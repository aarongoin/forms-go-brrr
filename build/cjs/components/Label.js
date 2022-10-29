"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Label_exports = {};
__export(Label_exports, {
  InlineLabel: () => InlineLabel,
  Label: () => Label
});
module.exports = __toCommonJS(Label_exports);
var React = __toESM(require("react"));
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
    "aria-live": "polite",
    "data-hint": hint
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InlineLabel,
  Label
});
