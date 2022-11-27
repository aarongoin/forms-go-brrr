import { getFieldHintElement } from "./getFieldHintElement";
function setFormFieldError(form, name, error) {
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  const el = "length" in elOrEls && elOrEls.length ? elOrEls.item(0) : elOrEls;
  el.setCustomValidity(error);
  const hint = getFieldHintElement(el);
  if (hint) {
    hint.dataset.fgb = error ? "error" : "hint";
    hint.textContent = error || hint.dataset.fgbHint || "";
  }
}
export {
  setFormFieldError
};
