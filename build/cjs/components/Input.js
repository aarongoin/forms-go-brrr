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
var Input_exports = {};
__export(Input_exports, {
  Input: () => Input
});
module.exports = __toCommonJS(Input_exports);
var React = __toESM(require("react"));
function Input(_a) {
  var _b = _a, {
    type,
    options
  } = _b, props = __objRest(_b, [
    "type",
    "options"
  ]);
  const input = /* @__PURE__ */ React.createElement("input", __spreadProps(__spreadValues(__spreadValues({
    tabIndex: 0
  }, type === "numeric" ? {
    type: "text",
    inputMode: "numeric",
    pattern: "[0-9]*"
  } : { type }), props), {
    "aria-describedby": `${props.name}-hint`,
    "data-fgb": "input",
    list: Array.isArray(options) && options.length ? `${props.name}-options` : void 0
  }));
  return Array.isArray(options) && options.length ? /* @__PURE__ */ React.createElement(React.Fragment, null, input, /* @__PURE__ */ React.createElement("datalist", {
    id: `${props.name}-options`
  }, options.map(
    (o) => typeof o === "object" ? /* @__PURE__ */ React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label) : /* @__PURE__ */ React.createElement("option", {
      key: o,
      value: o
    }, o)
  ))) : input;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input
});
