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
import {
  getFormValuesAsFormData,
  getFormValuesAsJson
} from "../core/getFormValues";
import { setFormFieldError } from "../core/setFormFieldError";
import { validateForm } from "../core/validateForm";
import { validationEffectHandler } from "../core/validationEffectHandler";
function Form(_a) {
  var _b = _a, {
    dialog,
    method = "post",
    action,
    submitFormData,
    submitJson,
    validateOnBlur,
    validateOnChange,
    autoComplete = false
  } = _b, props = __objRest(_b, [
    "dialog",
    "method",
    "action",
    "submitFormData",
    "submitJson",
    "validateOnBlur",
    "validateOnChange",
    "autoComplete"
  ]);
  if (!submitFormData && !submitJson)
    throw new Error(
      "Must supply a submit method prop of either `submitFormData` or `submitJson`."
    );
  return /* @__PURE__ */ React.createElement("form", __spreadProps(__spreadValues({}, props), {
    "data-fgb": "form",
    noValidate: typeof window !== void 0,
    autoComplete: autoComplete ? "on" : "off",
    method: dialog ? "dialog" : method,
    action,
    onChange: validateOnChange ? validationEffectHandler(
      validateOnChange,
      props.onChange
    ) : void 0,
    onBlur: validateOnBlur ? validationEffectHandler(
      validateOnBlur,
      props.onBlur
    ) : void 0,
    onSubmit: (event) => {
      const form = event.target;
      event.preventDefault();
      if (validateForm(form, validateOnChange || validateOnBlur || void 0)) {
        const submit = submitFormData ? submitFormData(getFormValuesAsFormData(form)) : submitJson(getFormValuesAsJson(form));
        (submit && submit instanceof Promise ? submit : Promise.resolve(submit)).then((formErrors) => {
          if (!formErrors)
            return;
          for (const name of Object.keys(formErrors))
            setFormFieldError(
              form,
              name,
              formErrors[name]
            );
        });
      }
    }
  }));
}
export {
  Form
};
