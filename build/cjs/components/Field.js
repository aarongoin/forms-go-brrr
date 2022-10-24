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
var Field_exports = {};
__export(Field_exports, {
  Field: () => Field
});
module.exports = __toCommonJS(Field_exports);
var React = __toESM(require("react"));
var import_Checkboxes = require("./Checkboxes");
var import_Input = require("./Input");
var import_RadioGroup = require("./RadioGroup");
var import_Select = require("./Select");
var import_Textarea = require("./Textarea");
var import_Label = require("./Label");
var import_core = require("../core");
const inlineFieldTypes = ["radio", "checkbox"];
function Field(props) {
  const validationProps = props.validate ? (0, import_core.wrapWithFieldValidation)(
    props.validate,
    props.validators || (props.validator ? [props.validator] : []),
    props[props.validate]
  ) : null;
  if (props.type === "checkboxes") {
    return /* @__PURE__ */ React.createElement(import_Checkboxes.Checkboxes, __spreadValues(__spreadValues({}, props), validationProps));
  }
  if (props.type === "radiogroup") {
    return /* @__PURE__ */ React.createElement(import_RadioGroup.RadioGroup, __spreadValues(__spreadValues({}, props), validationProps));
  }
  const _a = props, { label, hint, className, inputClassName } = _a, inputProps = __objRest(_a, ["label", "hint", "className", "inputClassName"]);
  const LabelCmp = inlineFieldTypes.includes(props.type) ? import_Label.InlineLabel : import_Label.Label;
  return /* @__PURE__ */ React.createElement(LabelCmp, {
    label,
    name: inputProps.name,
    hint,
    className
  }, props.type === "select" ? /* @__PURE__ */ React.createElement(import_Select.Select, __spreadValues(__spreadProps(__spreadValues({}, props), {
    className: inputClassName
  }), validationProps)) : props.type === "textarea" ? /* @__PURE__ */ React.createElement(import_Textarea.Textarea, __spreadValues(__spreadProps(__spreadValues({}, props), {
    className: inputClassName
  }), validationProps)) : /* @__PURE__ */ React.createElement(import_Input.Input, __spreadValues(__spreadProps(__spreadValues({}, props), {
    className: inputClassName
  }), validationProps)));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Field
});
