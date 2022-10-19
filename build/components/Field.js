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
import { Checkboxes } from "./Checkboxes";
import { Input } from "./Input";
import { RadioGroup } from "./RadioGroup";
import { Select } from "./Select";
import { Textarea } from "./Textarea";
import { Label, InlineLabel } from "./Label";
const inlineFieldTypes = ["radio", "checkbox"];
function Field(props) {
  if (props.type === "checkboxes") {
    return /* @__PURE__ */ React.createElement(Checkboxes, __spreadValues({}, props));
  }
  if (props.type === "radiogroup") {
    return /* @__PURE__ */ React.createElement(RadioGroup, __spreadValues({}, props));
  }
  const _a = props, { label, hint, className, inputClassName } = _a, inputProps = __objRest(_a, ["label", "hint", "className", "inputClassName"]);
  const LabelCmp = inlineFieldTypes.includes(props.type) ? InlineLabel : Label;
  return /* @__PURE__ */ React.createElement(LabelCmp, {
    label,
    name: inputProps.name,
    hint,
    className
  }, props.type === "select" ? /* @__PURE__ */ React.createElement(Select, __spreadProps(__spreadValues({}, props), {
    className: inputClassName
  })) : props.type === "textarea" ? /* @__PURE__ */ React.createElement(Textarea, __spreadProps(__spreadValues({}, props), {
    className: inputClassName
  })) : /* @__PURE__ */ React.createElement(Input, __spreadProps(__spreadValues({}, props), {
    className: inputClassName
  })));
}
export {
  Field
};
