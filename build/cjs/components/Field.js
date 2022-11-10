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
var import_Input = require("./Input");
var import_Group = require("./Group");
var import_Select = require("./Select");
var import_Textarea = require("./Textarea");
var import_Fieldset = require("./Fieldset");
var import_wrapWithFieldValidation = require("../core/wrapWithFieldValidation");
function Field(props) {
  const validationProps = (0, import_wrapWithFieldValidation.wrapWithFieldValidation)(
    props.validateOnChange ? "onChange" : "onBlur",
    typeof props.validateOnChange === "function" ? props.validateOnChange : typeof props.validateOnBlur === "function" ? props.validateOnBlur : void 0,
    props[props.validateOnChange ? "onChange" : "onBlur"]
  );
  const _a = props, {
    label,
    hint,
    className,
    style,
    hintClassName,
    hintStyle,
    labelClassName,
    labelStyle,
    inputClassName,
    inputStyle,
    inputLabelClassName,
    inputLabelStyle,
    name,
    type = "text"
  } = _a, inputProps = __objRest(_a, [
    "label",
    "hint",
    "className",
    "style",
    "hintClassName",
    "hintStyle",
    "labelClassName",
    "labelStyle",
    "inputClassName",
    "inputStyle",
    "inputLabelClassName",
    "inputLabelStyle",
    "name",
    "type"
  ]);
  return /* @__PURE__ */ React.createElement(import_Fieldset.Fieldset, {
    label,
    name,
    hint,
    className,
    style,
    hintStyle,
    hintClassName,
    labelStyle,
    labelClassName,
    "data-fgb-type": type,
    group: type === "radios" || type === "checkboxes"
  }, type === "select" ? /* @__PURE__ */ React.createElement(import_Select.Select, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    name,
    className: inputClassName,
    style: inputStyle
  })) : type === "textarea" ? /* @__PURE__ */ React.createElement(import_Textarea.Textarea, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    name,
    className: inputClassName,
    style: inputStyle
  })) : type === "checkboxes" || type === "radios" ? /* @__PURE__ */ React.createElement(import_Group.Group, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    type,
    name,
    className: inputLabelClassName,
    style: inputLabelStyle,
    inputClassName,
    inputStyle
  })) : /* @__PURE__ */ React.createElement(import_Input.Input, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    name,
    type,
    className: inputClassName,
    style: inputStyle
  })));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Field
});
