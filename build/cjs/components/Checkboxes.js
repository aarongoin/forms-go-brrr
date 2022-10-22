"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
var Checkboxes_exports = {};
__export(Checkboxes_exports, {
  Checkboxes: () => Checkboxes
});
module.exports = __toCommonJS(Checkboxes_exports);
var React = __toESM(require("react"));
var import_Fieldset = require("./Fieldset");
var import_Input = require("./Input");
var import_Label = require("./Label");
function Checkboxes(_a) {
  var _b = _a, {
    type,
    name,
    options,
    label,
    defaultChecked
  } = _b, props = __objRest(_b, [
    "type",
    "name",
    "options",
    "label",
    "defaultChecked"
  ]);
  return /* @__PURE__ */ React.createElement(import_Fieldset.Fieldset, __spreadValues({
    label,
    name
  }, props), options.map((opt) => /* @__PURE__ */ React.createElement(import_Label.InlineLabel, {
    label: typeof opt === "string" ? opt : opt.name
  }, /* @__PURE__ */ React.createElement(import_Input.Input, {
    key: typeof opt === "string" ? opt : opt.id,
    type: "checkbox",
    name,
    value: typeof opt === "string" ? opt : String(opt.id),
    "data-group": name,
    defaultChecked: defaultChecked ? defaultChecked.some(
      typeof opt === "string" ? (e) => e === opt : (e) => e === opt.id
    ) : false
  }))));
}
