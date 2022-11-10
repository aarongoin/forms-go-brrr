function getFieldHintElement(el) {
  var _a;
  const hint = (_a = el.closest("[data-fgb='fieldset']")) == null ? void 0 : _a.querySelector(`#${el.name}-hint`);
  return hint || null;
}
export {
  getFieldHintElement
};
