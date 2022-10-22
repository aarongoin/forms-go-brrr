function isInputElement(el) {
  return el.tagName === "INPUT";
}
function isSelectElement(el) {
  return el.tagName === "SELECT";
}
function isTextareaElement(el) {
  return el.tagName === "TEXTAREA";
}
export {
  isInputElement,
  isSelectElement,
  isTextareaElement
};
