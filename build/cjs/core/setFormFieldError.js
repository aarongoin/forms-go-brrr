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
var setFormFieldError_exports = {};
__export(setFormFieldError_exports, {
  setFormFieldError: () => setFormFieldError
});
module.exports = __toCommonJS(setFormFieldError_exports);
var import_getFieldHintElement = require("./getFieldHintElement");
function setFormFieldError(form, name, error) {
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  const el = "length" in elOrEls && elOrEls.length ? elOrEls.item(0) : elOrEls;
  el.setCustomValidity(error);
  const hint = (0, import_getFieldHintElement.getFieldHintElement)(el, false);
  if (hint) {
    hint.dataset.fgb = error ? "error" : "hint";
    hint.textContent = error || hint.dataset.fgbHint || "";
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  setFormFieldError
});
