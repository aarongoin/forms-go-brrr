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
var getFormIsValid_exports = {};
__export(getFormIsValid_exports, {
  getFormIsValid: () => getFormIsValid
});
module.exports = __toCommonJS(getFormIsValid_exports);
var import_getFieldHintElement = require("./getFieldHintElement");
function getFormIsValid(form) {
  var _a;
  for (const el of Array.from(form.elements)) {
    if (!("name" in el) || !el.name)
      continue;
    if (!el.validity.valid || ((_a = (0, import_getFieldHintElement.getFieldHintElement)(el)) == null ? void 0 : _a.textContent))
      return false;
  }
  return true;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getFormIsValid
});
