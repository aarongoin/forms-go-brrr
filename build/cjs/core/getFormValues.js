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
var getFormValues_exports = {};
__export(getFormValues_exports, {
  getFormValuesAsFormData: () => getFormValuesAsFormData,
  getFormValuesAsJson: () => getFormValuesAsJson
});
module.exports = __toCommonJS(getFormValues_exports);
var import_types = require("./types");
const getFormValuesAsFormData = (form) => new FormData(form);
function setKV(res, k, v) {
  if (!res[k]) {
    res[k] = v;
  } else {
    if (!Array.isArray(res[k]))
      res[k] = [res[k]];
    res[k].push(v);
  }
}
const getFormValuesAsJson = (form) => {
  const result = {};
  for (const input of Array.from(form.elements)) {
    if ((0, import_types.isInputElement)(input)) {
      switch (input.type) {
        case "number":
        case "range":
          setKV(result, input.name, +input.value);
          continue;
        case "radio":
          if (!input.checked && !result[input.name])
            setKV(result, input.name, null);
          if (input.checked)
            setKV(result, input.name, input.value);
          continue;
        case "checkbox":
          if (input.dataset.group !== input.name)
            setKV(result, input.name, !!input.checked);
          else if (!input.checked && !result[input.name])
            setKV(result, input.name, []);
          else if (input.checked)
            setKV(result, input.name, input.value);
          continue;
        case "email":
          if (input.multiple)
            setKV(result, input.name, input.value.split(/\s*,\s*/));
          else
            setKV(result, input.name, input.value);
          continue;
        case "file":
          setKV(result, input.name, input.files);
        default:
          setKV(result, input.name, input.value);
          continue;
      }
    }
    if ((0, import_types.isSelectElement)(input)) {
      if (input.multiple)
        setKV(
          result,
          input.name,
          Array.from(input.selectedOptions).map((opt) => opt.value)
        );
      else
        setKV(result, input.name, input.value);
    }
    if ((0, import_types.isTextareaElement)(input))
      setKV(result, input.name, input.value);
  }
  return result;
};
