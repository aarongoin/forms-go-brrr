function isFormElement(el) {
  return el.tagName === "FORM";
}
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
  isFormElement,
  isInputElement,
  isSelectElement,
  isTextareaElement
};
