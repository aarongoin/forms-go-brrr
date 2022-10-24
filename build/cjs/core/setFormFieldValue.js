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
var setFormFieldValue_exports = {};
__export(setFormFieldValue_exports, {
  setFormFieldValue: () => setFormFieldValue
});
module.exports = __toCommonJS(setFormFieldValue_exports);
var import_types = require("./types");
function setFormFieldValue(form, name, value) {
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  if ("length" in elOrEls && elOrEls.length) {
    const els = Array.from(elOrEls);
    if (els[0].type === "radio") {
      els.forEach((el2) => {
        el2.checked = el2.value === value;
      });
      return;
    }
    if (els[0].type === "checkbox") {
      els.forEach(
        Array.isArray(value) ? (el2) => {
          el2.checked = value.includes(el2.value);
        } : (el2) => {
          el2.checked = el2.value === value;
        }
      );
      return;
    }
    throw new Error(
      `Unexpected collection found in field name ${name}. Found type of ${els[0].type}`
    );
  }
  const el = elOrEls;
  if ((0, import_types.isSelectElement)(el)) {
    if (el.multiple) {
      Array.from(el.selectedOptions).forEach(
        Array.isArray(value) ? (el2) => {
          el2.selected = value.includes(el2.value);
        } : (el2) => {
          el2.selected = el2.value === value;
        }
      );
      return;
    }
    el.value = `${value}`;
    return;
  }
  if ((0, import_types.isInputElement)(el)) {
    if (el.type === "email" && el.multiple && Array.isArray(value)) {
      el.value = value.join(",");
      return;
    }
    if (el.type === "checkbox" && el.dataset.group !== el.name) {
      el.checked = !!value;
      return;
    }
    if (el.type === "radio") {
      el.checked = !!value;
      return;
    }
    el.value = `${value}`;
    return;
  }
  if ((0, import_types.isTextareaElement)(el)) {
    el.value = `${value}`;
    return;
  }
  throw new Error(
    `Unexpected element found in field name ${name}. Found type of ${el.type}`
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  setFormFieldValue
});
