import { getFormFieldValue } from "./getFormFieldValue";
import { setFormFieldError } from "./setFormFieldError";
import { setFormFieldValue } from "./setFormFieldValue";
function validateForm(form, validator) {
  let form_valid = true;
  const formErrors = validator == null ? void 0 : validator(
    (name) => getFormFieldValue(form, name),
    (name, value) => setFormFieldValue(form, name, value)
  );
  for (const el of Array.from(form.elements)) {
    if (!("name" in el))
      continue;
    const err = (formErrors == null ? void 0 : formErrors[el.name]) || "";
    let is_valid = el.dispatchEvent(new Event("invalid", { cancelable: true })) && !err;
    if (is_valid || err)
      setFormFieldError(form, el.name, err);
    if (!is_valid)
      form_valid = false;
  }
  return form_valid;
}
export {
  validateForm
};
