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
var setFieldError_exports = {};
__export(setFieldError_exports, {
  setFieldError: () => setFieldError
});
module.exports = __toCommonJS(setFieldError_exports);
function setFieldError(form, name, error) {
  var _a;
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  const el = "length" in elOrEls && elOrEls.length ? elOrEls.item(0) : elOrEls;
  el.setCustomValidity(error);
  const hint = (_a = el.closest(".df-Label, .df-Fieldset")) == null ? void 0 : _a.querySelector(`#${el.name}-hint`);
  if (hint)
    hint.textContent = error;
}
