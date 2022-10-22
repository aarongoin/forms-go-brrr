"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
var withValidation_exports = {};
__export(withValidation_exports, {
  withValidation: () => withValidation,
  withValidationOnBlur: () => withValidationOnBlur,
  withValidationOnChange: () => withValidationOnChange,
  wrapWithValiation: () => wrapWithValiation
});
module.exports = __toCommonJS(withValidation_exports);
var React = __toESM(require("react"));
var import_errorMessages = require("./errorMessages");
var import_getFieldValue = require("./getFieldValue");
function withValidation(onEvent) {
  return (Cmp, validators) => {
    const validatorList = Array.isArray(validators) ? validators : [validators];
    return function Validated(_a) {
      var _b = _a, {
        validators: _validators
      } = _b, props = __objRest(_b, [
        "validators"
      ]);
      return /* @__PURE__ */ React.createElement(Cmp, __spreadValues(__spreadValues({}, props), wrapWithValiation(
        onEvent,
        _validators ? validatorList.concat(_validators) : validatorList,
        props[onEvent]
      )));
    };
  };
}
function wrapWithValiation(onEvent, validators, outerHandler) {
  const validateInput = (input) => {
    var _a;
    let error = !input.validity.valid ? (0, import_errorMessages.getErrorMessage)(input) : "";
    if (!error) {
      const value = (0, import_getFieldValue.getFieldValue)(input.form, input.name);
      for (const validator of validators) {
        error = validator(value);
        if (error)
          break;
      }
    }
    input.setCustomValidity(error);
    const hint = (_a = input.closest(".df-Label, .df-Fieldset")) == null ? void 0 : _a.querySelector(`#${input.name}-hint`);
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
const withValidationOnChange = withValidation("onChange");
const withValidationOnBlur = withValidation("onBlur");
