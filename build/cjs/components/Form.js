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
var Form_exports = {};
__export(Form_exports, {
  Form: () => Form
});
module.exports = __toCommonJS(Form_exports);
var React = __toESM(require("react"));
var import_getFormValues = require("../core/getFormValues");
var import_setFormFieldError = require("../core/setFormFieldError");
var import_validateForm = require("../core/validateForm");
var import_validationEffectHandler = require("../core/validationEffectHandler");
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
    onChange: validateOnChange ? (0, import_validationEffectHandler.validationEffectHandler)(
      validateOnChange,
      props.onChange
    ) : void 0,
    onBlur: validateOnBlur ? (0, import_validationEffectHandler.validationEffectHandler)(
      validateOnBlur,
      props.onBlur
    ) : void 0,
    onSubmit: (event) => {
      const form = event.target;
      event.preventDefault();
      if ((0, import_validateForm.validateForm)(form, validateOnChange || validateOnBlur || void 0)) {
        const submit = submitFormData ? submitFormData((0, import_getFormValues.getFormValuesAsFormData)(form)) : submitJson((0, import_getFormValues.getFormValuesAsJson)(form));
        (submit && submit instanceof Promise ? submit : Promise.resolve(submit)).then((formErrors) => {
          if (!formErrors)
            return;
          for (const name of Object.keys(formErrors))
            (0, import_setFormFieldError.setFormFieldError)(
              form,
              name,
              formErrors[name]
            );
        });
      }
    }
  }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Form
});
