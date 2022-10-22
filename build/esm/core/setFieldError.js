function setFieldError(form, name, error) {
  var _a;
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  const el = "length" in elOrEls && elOrEls.length ? elOrEls.item(0) : elOrEls;
  el.setCustomValidity(error);
  const hint = (_a = el.closest(".brrr-Label, .brrr-Fieldset")) == null ? void 0 : _a.querySelector(`#${el.name}-hint`);
  if (hint)
    hint.textContent = error;
}
export {
  setFieldError
};
