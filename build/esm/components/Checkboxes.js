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
import { Fieldset } from "./Fieldset";
import { Input } from "./Input";
import { InlineLabel } from "./Label";
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
  return /* @__PURE__ */ React.createElement(Fieldset, __spreadValues({
    label,
    name
  }, props), options.map((opt) => /* @__PURE__ */ React.createElement(InlineLabel, {
    label: typeof opt === "string" ? opt : opt.name
  }, /* @__PURE__ */ React.createElement(Input, {
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
export {
  Checkboxes
};
