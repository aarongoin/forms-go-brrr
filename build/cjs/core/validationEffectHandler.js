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
var validationEffectHandler_exports = {};
__export(validationEffectHandler_exports, {
  validationEffectHandler: () => validationEffectHandler
});
module.exports = __toCommonJS(validationEffectHandler_exports);
var import_getFormFieldValue = require("./getFormFieldValue");
var import_setFormFieldError = require("./setFormFieldError");
var import_setFormFieldValue = require("./setFormFieldValue");
var import_types = require("./types");
function validationEffectHandler(validator, onEvent) {
  return (event) => {
    const form = (0, import_types.isFormElement)(event.target) ? event.target : "form" in event.target ? event.target.form : null;
    if (!form)
      throw new Error(
        "Expected to find a form element attached to wrapped event target."
      );
    const formErrors = validator(
      (name) => (0, import_getFormFieldValue.getFormFieldValue)(form, name),
      (name, value) => (0, import_setFormFieldValue.setFormFieldValue)(form, name, value)
    );
    if (formErrors)
      for (const name of Object.keys(formErrors))
        (0, import_setFormFieldError.setFormFieldError)(form, name, formErrors[name]);
    return onEvent == null ? void 0 : onEvent(event);
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  validationEffectHandler
});
