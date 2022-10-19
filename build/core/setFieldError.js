function setFieldError(form, name, error) {
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  const el = "length" in elOrEls && elOrEls.length ? elOrEls.item(0) : elOrEls;
  el.setCustomValidity(error);
  const hint = el.closest(`.${name}-hint`);
  if (hint)
    hint.textContent = error;
}
export {
  setFieldError
};
