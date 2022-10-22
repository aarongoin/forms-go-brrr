"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
function Label({
  label,
  name,
  children,
  hint,
  className,
  textClassName,
  hintClassName
}) {
  const hintId = `${name}-hint`;
  return /* @__PURE__ */ React.createElement("label", {
    htmlFor: name,
    className: "brrr-Label".concat(className ? " " : "", className || "")
  }, typeof label === "string" ? /* @__PURE__ */ React.createElement("span", {
    className: "brrr-Label-text".concat(
      textClassName ? " " : "",
      textClassName || ""
    )
  }, label) : label, children, /* @__PURE__ */ React.createElement("span", {
    id: hintId,
    className: "brrr-Label-hint".concat(
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
    className: "brrr-Label".concat(className ? " " : "", className || "")
  }, children, label);
}
