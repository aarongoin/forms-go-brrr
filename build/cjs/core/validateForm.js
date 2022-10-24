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
var import_getFormFieldValue = require("./getFormFieldValue");
var import_setFormFieldError = require("./setFormFieldError");
var import_setFormFieldValue = require("./setFormFieldValue");
function validateForm(form, validator) {
  let is_valid = true;
  for (const input of Array.from(form.elements))
    if (!input.dispatchEvent(new Event("invalid", { cancelable: true })))
      is_valid = false;
  if (!validator)
    return is_valid;
  const formErrors = validator(
    (name) => (0, import_getFormFieldValue.getFormFieldValue)(form, name),
    (name, value) => (0, import_setFormFieldValue.setFormFieldValue)(form, name, value)
  );
  if (formErrors) {
    for (const name of Object.keys(formErrors)) {
      if (formErrors[name])
        is_valid = false;
      (0, import_setFormFieldError.setFormFieldError)(form, name, formErrors[name]);
    }
  }
  return is_valid;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  validateForm
});
