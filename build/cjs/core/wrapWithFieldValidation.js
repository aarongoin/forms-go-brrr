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
function wrapWithFieldValidation(onEvent, validators, outerHandler) {
  const validateInput = (input) => {
    var _a;
    let error = !input.validity.valid ? (0, import_errorMessages.getErrorMessage)(input) : "";
    if (!error) {
      const value = (0, import_getFormFieldValue.getFormFieldValue)(input.form, input.name);
      for (const validator of validators) {
        error = validator(value);
        if (error)
          break;
      }
    }
    input.setCustomValidity(error);
    const hint = (_a = input.closest(".fgb-Label, .fgb-Fieldset")) == null ? void 0 : _a.querySelector(`#${input.name}-hint`);
    if (hint)
      hint.textContent = error;
    return !!error;
  };
  return {
    [onEvent]: (event) => {
      validateInput(event.target);
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
