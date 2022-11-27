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
var wrapWithFieldValidation_exports = {};
__export(wrapWithFieldValidation_exports, {
  wrapWithFieldValidation: () => wrapWithFieldValidation
});
module.exports = __toCommonJS(wrapWithFieldValidation_exports);
var import_errorMessages = require("./errorMessages");
var import_getFormFieldValue = require("./getFormFieldValue");
var import_setFormFieldError = require("./setFormFieldError");
function wrapWithFieldValidation(onEvent, validator, outerHandler) {
  const validateInput = (input) => {
    let error = !input.validity.valid ? (0, import_errorMessages.getErrorMessage)(input) : "";
    const value = (0, import_getFormFieldValue.getFormFieldValue)(input.form, input.name);
    error = (validator == null ? void 0 : validator(value)) || error;
    (0, import_setFormFieldError.setFormFieldError)(input.form, input.name, error);
    return !!error;
  };
  return {
    [onEvent]: (event) => {
      setTimeout(validateInput, onEvent === "onChange" ? 0 : 120, event.target);
      return outerHandler == null ? void 0 : outerHandler(event);
    },
    onInvalid: (event) => {
      if (validateInput(event.target))
        event.preventDefault();
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  wrapWithFieldValidation
});
