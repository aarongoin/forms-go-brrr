import { getFieldValue } from "./getFieldValue";
import { setFieldError } from "./setFieldError";
import { setFieldValue } from "./setFieldValue";
function validateForm(form, validator) {
  let is_valid = true;
  for (const input of Array.from(form.elements))
    if (!input.dispatchEvent(new Event("invalid", { cancelable: true })))
      is_valid = false;
  if (!validator)
    return is_valid;
  const formErrors = validator(
    (name) => getFieldValue(form, name),
    (name, value) => setFieldValue(form, name, value)
  );
  if (formErrors) {
    is_valid = false;
    for (const name of Object.keys(formErrors))
      setFieldError(form, name, formErrors[name]);
  }
  return is_valid;
}
export {
  validateForm
};
