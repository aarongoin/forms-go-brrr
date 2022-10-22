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
var Form_exports = {};
__export(Form_exports, {
  Form: () => Form
});
module.exports = __toCommonJS(Form_exports);
var React = __toESM(require("react"));
var import_getFieldValue = require("../core/getFieldValue");
var import_getFormValues = require("../core/getFormValues");
var import_setFieldError = require("../core/setFieldError");
var import_setFieldValue = require("../core/setFieldValue");
var import_validateForm = require("../core/validateForm");
function Form(_a) {
  var _b = _a, {
    dialog,
    method = "post",
    action,
    submitFormData,
    submitJson,
    validate,
    validator,
    className
  } = _b, props = __objRest(_b, [
    "dialog",
    "method",
    "action",
    "submitFormData",
    "submitJson",
    "validate",
    "validator",
    "className"
  ]);
  if (!submitFormData && !submitJson)
    throw new Error(
      "Must supply a submit method prop of either `submitFormData` or `submitJson`."
    );
  const smartProps = {};
  if (validate == null ? void 0 : validate.startsWith("onChange"))
    smartProps["onChange"] = (event) => {
      const form = event.target.form;
      const formErrors = validator(
        (name) => (0, import_getFieldValue.getFieldValue)(form, name),
        (name, value) => (0, import_setFieldValue.setFieldValue)(form, name, value)
      );
      console.log("Form onchange!", { formErrors });
      if (formErrors)
        for (const name of Object.keys(formErrors))
          (0, import_setFieldError.setFieldError)(form, name, formErrors[name]);
    };
  if (validate == null ? void 0 : validate.startsWith("onBlur"))
    smartProps["onBlur"] = (event) => {
      const form = event.target.form;
      const formErrors = validator(
        (name) => (0, import_getFieldValue.getFieldValue)(form, name),
        (name, value) => (0, import_setFieldValue.setFieldValue)(form, name, value)
      );
      if (formErrors)
        for (const name of Object.keys(formErrors))
          (0, import_setFieldError.setFieldError)(form, name, formErrors[name]);
    };
  return /* @__PURE__ */ React.createElement("form", __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, props), {
    className: "brrr-Form".concat(className ? " " : "", className || ""),
    noValidate: typeof window !== void 0,
    method: dialog ? "dialog" : method,
    action
  }), smartProps), {
    onSubmit: (event) => {
      const form = event.target;
      event.preventDefault();
      if ((0, import_validateForm.validateForm)(
        form,
        (validate == null ? void 0 : validate.endsWith("Submit")) && validator || void 0
      )) {
        const submit = submitFormData ? submitFormData((0, import_getFormValues.getFormValuesAsFormData)(form)) : submitJson((0, import_getFormValues.getFormValuesAsJson)(form));
        (submit && submit instanceof Promise ? submit : Promise.resolve(submit)).then((formErrors) => {
          if (!formErrors)
            return;
          for (const name of Object.keys(formErrors))
            (0, import_setFieldError.setFieldError)(form, name, formErrors[name]);
        });
      }
    }
  }));
}
