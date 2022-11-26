import { getFieldHintElement } from "./getFieldHintElement";
function getFormIsValid(form) {
  var _a;
  for (const el of Array.from(form.elements)) {
    if (!("name" in el) || !el.name)
      continue;
    if (!el.validity.valid || ((_a = getFieldHintElement(el)) == null ? void 0 : _a.textContent))
      return false;
  }
  return true;
}
export {
  getFormIsValid
};
