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
var Fieldset_exports = {};
__export(Fieldset_exports, {
  Fieldset: () => Fieldset
});
module.exports = __toCommonJS(Fieldset_exports);
var React = __toESM(require("react"));
function Fieldset({
  name,
  label,
  disabled,
  children,
  className,
  hint,
  hintClassName
}) {
  const hintId = `${name}-hint`;
  return /* @__PURE__ */ React.createElement("fieldset", {
    disabled,
    className: "brrr-Fieldset".concat(className ? " " : "", className || "")
  }, /* @__PURE__ */ React.createElement("legend", null, label), children, /* @__PURE__ */ React.createElement("span", {
    id: hintId,
    className: "brrr-Fieldset-hint".concat(
      hintClassName ? " " : "",
      hintClassName || ""
    ),
    "aria-live": "polite"
  }, hint));
}
