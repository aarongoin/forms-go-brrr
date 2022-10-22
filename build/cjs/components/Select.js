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
var Select_exports = {};
__export(Select_exports, {
  Select: () => Select
});
module.exports = __toCommonJS(Select_exports);
var React = __toESM(require("react"));
function Select(_a) {
  var _b = _a, {
    options,
    type,
    defaultSelected,
    name,
    renderOption,
    className,
    optionClassName
  } = _b, props = __objRest(_b, [
    "options",
    "type",
    "defaultSelected",
    "name",
    "renderOption",
    "className",
    "optionClassName"
  ]);
  const finalOptionClassName = "df-Select-option".concat(
    optionClassName ? " " : "",
    optionClassName || ""
  );
  return /* @__PURE__ */ React.createElement("select", __spreadProps(__spreadValues({
    name,
    tabIndex: 0,
    "aria-describedby": `${name}-hint`
  }, props), {
    className: "df-Select".concat(className ? " " : "", className || "")
  }), options.map((opt) => /* @__PURE__ */ React.createElement("option", {
    key: typeof opt === "string" ? opt : opt.id,
    value: typeof opt === "string" ? opt : opt.id,
    className: finalOptionClassName,
    defaultChecked: !!defaultSelected && (props.multiple && Array.isArray(defaultSelected) ? defaultSelected.some(
      typeof opt === "string" ? (e) => e === opt : (e) => e === opt.id
    ) : defaultSelected === (typeof opt === "string" ? opt : opt.id))
  }, renderOption ? renderOption(opt) : typeof opt === "string" ? opt : opt.name)));
}
