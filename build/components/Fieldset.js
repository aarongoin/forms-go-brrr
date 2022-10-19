import * as React from "react";
function Fieldset({
  name,
  label,
  disabled,
  children,
  className,
  hint,
  hintClassName
}) {
  const hintId = `${name}-hint`;
  return /* @__PURE__ */ React.createElement("fieldset", {
    disabled,
    className: "df-Fieldset".concat(className ? " " : "", className || "")
  }, /* @__PURE__ */ React.createElement("legend", null, label), children, /* @__PURE__ */ React.createElement("span", {
    id: hintId,
    className: "df-Fieldset-hint".concat(
      hintClassName ? " " : "",
      hintClassName || ""
    ),
    "aria-live": "polite"
  }, hint));
}
export {
  Fieldset
};
