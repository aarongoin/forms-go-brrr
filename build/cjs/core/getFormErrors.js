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
var getFormErrors_exports = {};
__export(getFormErrors_exports, {
  getFormErrors: () => getFormErrors
});
module.exports = __toCommonJS(getFormErrors_exports);
var import_getFieldHintElement = require("./getFieldHintElement");
function getFormErrors(form) {
  var _a;
  const errors = {};
  for (const el of Array.from(form.elements)) {
    if (!el.name)
      continue;
    errors[el.name] = ((_a = (0, import_getFieldHintElement.getFieldHintElement)(el)) == null ? void 0 : _a.textContent) || "";
  }
  return errors;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getFormErrors
});
