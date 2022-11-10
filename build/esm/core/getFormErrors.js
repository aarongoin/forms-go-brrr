import { getFieldHintElement } from "./getFieldHintElement";
function getFormErrors(form) {
  var _a;
  const errors = {};
  for (const el of Array.from(form.elements)) {
    if (!el.name)
      continue;
    errors[el.name] = ((_a = getFieldHintElement(el)) == null ? void 0 : _a.textContent) || "";
  }
  return errors;
}
export {
  getFormErrors
};
