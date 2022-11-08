function getFormErrors(form) {
  var _a;
  const errors = {};
  for (const el of Array.from(form.elements)) {
    if (!el.name)
      continue;
    const hint = (_a = el.closest("[data-fgb='label']")) == null ? void 0 : _a.querySelector(`#${el.name}-hint`);
    errors[el.name] = hint == null ? void 0 : hint.textContent;
  }
  return errors;
}
export {
  getFormErrors
};
