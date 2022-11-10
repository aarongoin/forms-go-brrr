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
var getFieldHintElement_exports = {};
__export(getFieldHintElement_exports, {
  getFieldHintElement: () => getFieldHintElement
});
module.exports = __toCommonJS(getFieldHintElement_exports);
function getFieldHintElement(el) {
  var _a;
  const hint = (_a = el.closest("[data-fgb='fieldset']")) == null ? void 0 : _a.querySelector(`#${el.name}-hint`);
  return hint || null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getFieldHintElement
});