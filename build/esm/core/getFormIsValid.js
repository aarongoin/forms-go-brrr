function getFormIsValid(form) {
  var _a;
  for (const el of Array.from(form.elements)) {
    if (!el.name)
      continue;
    const hint = (_a = el.closest("[data-fgb='label']")) == null ? void 0 : _a.querySelector(`#${el.name}-hint`);
    if (hint == null ? void 0 : hint.textContent)
      return false;
  }
  return true;
}
export {
  getFormIsValid
};
