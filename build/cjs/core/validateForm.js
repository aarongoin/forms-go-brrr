"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var validateForm_exports = {};
__export(validateForm_exports, {
  validateForm: () => validateForm
});
module.exports = __toCommonJS(validateForm_exports);
var import_getFieldValue = require("./getFieldValue");
var import_setFieldError = require("./setFieldError");
var import_setFieldValue = require("./setFieldValue");
function validateForm(form, validator) {
  let is_valid = true;
  for (const input of Array.from(form.elements))
    if (!input.dispatchEvent(new Event("invalid", { cancelable: true })))
      is_valid = false;
  if (!validator)
    return is_valid;
  const formErrors = validator(
    (name) => (0, import_getFieldValue.getFieldValue)(form, name),
    (name, value) => (0, import_setFieldValue.setFieldValue)(form, name, value)
  );
  if (formErrors) {
    is_valid = false;
    for (const name of Object.keys(formErrors))
      (0, import_setFieldError.setFieldError)(form, name, formErrors[name]);
  }
  return is_valid;
}
