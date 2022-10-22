import * as React from "react";
function Label({
  label,
  name,
  children,
  hint,
  className,
  textClassName,
  hintClassName
}) {
  const hintId = `${name}-hint`;
  return /* @__PURE__ */ React.createElement("label", {
    htmlFor: name,
    className: "brrr-Label".concat(className ? " " : "", className || "")
  }, typeof label === "string" ? /* @__PURE__ */ React.createElement("span", {
    className: "brrr-Label-text".concat(
      textClassName ? " " : "",
      textClassName || ""
    )
  }, label) : label, children, /* @__PURE__ */ React.createElement("span", {
    id: hintId,
    className: "brrr-Label-hint".concat(
      hintClassName ? " " : "",
      hintClassName || ""
    ),
    "aria-live": "polite"
  }, hint));
}
function InlineLabel({
  label,
  children,
  className
}) {
  return /* @__PURE__ */ React.createElement("label", {
    className: "brrr-Label".concat(className ? " " : "", className || "")
  }, children, label);
}
export {
  InlineLabel,
  Label
};
