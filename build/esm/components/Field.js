var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
import * as React from "react";
import { Input } from "./Input";
import { Group } from "./Group";
import { Select } from "./Select";
import { Textarea } from "./Textarea";
import { Fieldset } from "./Fieldset";
import { wrapWithFieldValidation } from "../core";
function Field(props) {
  const validationProps = wrapWithFieldValidation(
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
  return /* @__PURE__ */ React.createElement(Fieldset, {
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
  }, type === "select" ? /* @__PURE__ */ React.createElement(Select, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    name,
    className: inputClassName,
    style: inputStyle
  })) : type === "textarea" ? /* @__PURE__ */ React.createElement(Textarea, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    name,
    className: inputClassName,
    style: inputStyle
  })) : type === "checkboxes" || type === "radios" ? /* @__PURE__ */ React.createElement(Group, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    type,
    name,
    className: inputLabelClassName,
    style: inputLabelStyle,
    inputClassName,
    inputStyle
  })) : /* @__PURE__ */ React.createElement(Input, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    name,
    type,
    className: inputClassName,
    style: inputStyle
  })));
}
export {
  Field
};
