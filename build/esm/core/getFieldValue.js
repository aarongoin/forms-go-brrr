import {
  isInputElement,
  isSelectElement,
  isTextareaElement
} from "./types";
function getFieldValue(form, name) {
  var _a;
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  if ("length" in elOrEls && elOrEls.length) {
    const els = Array.from(elOrEls);
    if (els[0].type === "radio")
      return (_a = Array.from(els).find((e) => e.checked)) == null ? void 0 : _a.value;
    if (els[0].type === "checkbox")
      return Array.from(els).map((e) => e.checked ? e.value : null).filter(Boolean);
    throw new Error(
      `Unexpected collection found in field name ${name}. Found type of ${els[0].type}`
    );
  }
  const el = elOrEls;
  if (isSelectElement(el)) {
    if (el.multiple)
      return Array.from(el.selectedOptions).map((opt) => opt.value);
    return el.value;
  }
  if (isInputElement(el)) {
    if (el.type === "file")
      return el.files;
    if (el.type === "email" && el.multiple)
      return el.value.split(/\s*,\s*/);
    if (el.type === "checkbox" && el.dataset.group !== el.name)
      return el.checked;
    if (el.type === "radio")
      return el.checked;
    return el.value;
  }
  if (isTextareaElement(el)) {
    return el.value;
  }
  throw new Error(
    `Unexpected element found in field name ${name}. Found ${el.tagName}`
  );
}
export {
  getFieldValue
};
