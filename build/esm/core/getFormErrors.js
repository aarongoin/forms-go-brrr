function getFormErrors(form) {
  var _a;
  const errors = {};
  for (const el of Array.from(form.elements)) {
    if (!el.name)
      continue;
    const hint = (_a = el.closest(".fgb-Label, .fgb-Fieldset")) == null ? void 0 : _a.querySelector(`#${el.name}-hint`);
    errors[el.name] = hint.textContent;
  }
  return errors;
}
export {
  getFormErrors
};
