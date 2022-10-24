import { getFormFieldValue } from "./getFormFieldValue";
import { setFormFieldError } from "./setFormFieldError";
import { setFormFieldValue } from "./setFormFieldValue";
function validateForm(form, validator) {
  let is_valid = true;
  for (const input of Array.from(form.elements))
    if (!input.dispatchEvent(new Event("invalid", { cancelable: true })))
      is_valid = false;
  if (!validator)
    return is_valid;
  const formErrors = validator(
    (name) => getFormFieldValue(form, name),
    (name, value) => setFormFieldValue(form, name, value)
  );
  if (formErrors) {
    for (const name of Object.keys(formErrors)) {
      if (formErrors[name])
        is_valid = false;
      setFormFieldError(form, name, formErrors[name]);
    }
  }
  return is_valid;
}
export {
  validateForm
};
