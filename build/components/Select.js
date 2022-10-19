var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
import * as React from "react";
function Select(_a) {
  var _b = _a, {
    options,
    type,
    defaultSelected,
    name,
    renderOption,
    className,
    optionClassName
  } = _b, props = __objRest(_b, [
    "options",
    "type",
    "defaultSelected",
    "name",
    "renderOption",
    "className",
    "optionClassName"
  ]);
  const finalOptionClassName = "df-Select-option".concat(
    optionClassName ? " " : "",
    optionClassName || ""
  );
  return /* @__PURE__ */ React.createElement("select", __spreadProps(__spreadValues({
    name,
    tabindex: 0,
    "aria-describedby": `${name}-hint`
  }, props), {
    className: "df-Select".concat(className ? " " : "", className || "")
  }), options.map((opt) => /* @__PURE__ */ React.createElement("option", {
    key: typeof opt === "string" ? opt : opt.id,
    value: typeof opt === "string" ? opt : opt.id,
    className: finalOptionClassName,
    defaultChecked: !!defaultSelected && (props.multiple && Array.isArray(defaultSelected) ? defaultSelected.some(
      typeof opt === "string" ? (e) => e === opt : (e) => e === opt.id
    ) : defaultSelected === (typeof opt === "string" ? opt : opt.id))
  }, renderOption ? renderOption(opt) : typeof opt === "string" ? opt : opt.name)));
}
export {
  Select
};
