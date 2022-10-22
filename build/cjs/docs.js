"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_react = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import__ = require("../index");
function ExampleApp() {
  return /* @__PURE__ */ import_react.default.createElement(import__.Form, {
    submitJson: (v) => console.log(v),
    validate: "onChangeOrSubmit",
    validator: (getValue, setValue) => {
      const a = getValue("text_field");
      const b = getValue("text_area");
      if (a.length > b.length)
        return { text_area: "Too short!" };
    }
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }, /* @__PURE__ */ import_react.default.createElement(import__.Field, {
    label: "Text field",
    name: "text_field",
    type: "text",
    defaultValue: "Text field",
    required: true,
    minLength: 5,
    maxLength: 10,
    validate: "onChange"
  }), /* @__PURE__ */ import_react.default.createElement(import__.Field, {
    label: "Textarea field",
    name: "text_area",
    type: "textarea",
    autosize: true,
    required: true,
    validate: "onChange"
  }), /* @__PURE__ */ import_react.default.createElement(import__.Field, {
    label: "Custom field",
    name: "custom",
    type: "text",
    validate: "onChange",
    validators: [(v) => v !== "foo" ? "This field is in error!" : ""]
  }), /* @__PURE__ */ import_react.default.createElement("button", {
    type: "submit"
  }, "Submit test form")));
}
const rootElement = document.getElementById("root");
if (!rootElement)
  throw new Error("Missing root element!");
(0, import_react_dom.render)(/* @__PURE__ */ import_react.default.createElement(ExampleApp, null), rootElement);
