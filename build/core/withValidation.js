var __defProp = Object.defineProperty;
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
import * as React from "react";
import { getErrorMessage } from "./errorMessages";
import { getFieldValue } from "./getFieldValue";
function withValidation(onEvent) {
  return (Cmp, validators) => {
    const validatorList = Array.isArray(validators) ? validators : [validators];
    return function Validated(props) {
      return /* @__PURE__ */ React.createElement(Cmp, __spreadValues(__spreadValues({}, props), {
        [onEvent]: (event) => {
          var _a;
          const input = event.target;
          let error = !input.checkValidity() ? getErrorMessage(input) : "";
          if (!error) {
            const value = getFieldValue(input.form, input.name);
            for (const validator of validatorList) {
              error = validator(value);
              if (error)
                break;
            }
          }
          input.setCustomValidity(error);
          const hint = input.closest(`.${input.name}-hint`);
          if (hint)
            hint.textContent = error;
          return (_a = props[onEvent]) == null ? void 0 : _a.call(props, event);
        }
      }));
    };
  };
}
const withValidationOnChange = withValidation("onChange");
const withValidationOnBlur = withValidation("onBlur");
export {
  withValidation,
  withValidationOnBlur,
  withValidationOnChange
};
