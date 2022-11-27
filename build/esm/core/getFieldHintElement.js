function getFieldHintElement(el, errorOnly = true) {
  var _a;
  const hint = (_a = el.closest("[data-fgb='fieldset']")) == null ? void 0 : _a.querySelector(
    `#${el.name}-hint${errorOnly ? "[data-fgb='error']" : ""}`
  );
  return hint || null;
}
export {
  getFieldHintElement
};
