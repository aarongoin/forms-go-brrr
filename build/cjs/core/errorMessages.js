"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var errorMessages_exports = {};
__export(errorMessages_exports, {
  getErrorMessage: () => getErrorMessage,
  setErrorMessages: () => setErrorMessages
});
module.exports = __toCommonJS(errorMessages_exports);
var import_types = require("./types");
let errorMessages = {
  badInput: "Value is invalid.",
  required: "This field is required.",
  minLength: "Text is too short.",
  maxLength: "Text is too long.",
  pattern: "Value is invalid.",
  min: "Value is too low.",
  max: "Value is high.",
  step: "Value is invalid.",
  email: "Value is invalid.",
  url: "Value is invalid."
};
function setErrorMessages(errs) {
  errorMessages = __spreadValues(__spreadValues({}, errorMessages), errs);
}
function getErrorMessage(input) {
  if (input.validity.badInput)
    return errorMessages.badInput;
  if (input.validity.valueMissing)
    return errorMessages.required;
  if ((0, import_types.isSelectElement)(input))
    return "";
  if (input.validity.tooShort)
    return errorMessages.minLength;
  if (input.validity.tooLong)
    return errorMessages.maxLength;
  if ((0, import_types.isTextareaElement)(input))
    return "";
  if (input.validity.patternMismatch)
    return errorMessages.pattern;
  if (input.validity.rangeUnderflow)
    return errorMessages.min;
  if (input.validity.rangeOverflow)
    return errorMessages.max;
  if (input.validity.stepMismatch)
    return errorMessages.step;
  if (input.validity.typeMismatch) {
    if (input.type === "email")
      return errorMessages.email;
    if (input.type === "url")
      return errorMessages.url;
  }
  return "";
}
