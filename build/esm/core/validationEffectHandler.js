import { getFormFieldValue } from "./getFormFieldValue";
import { setFormFieldError } from "./setFormFieldError";
import { setFormFieldValue } from "./setFormFieldValue";
import {
  isFormElement
} from "./types";
function validationEffectHandler(validator, onEvent) {
  return (event) => {
    const form = isFormElement(event.target) ? event.target : "form" in event.target ? event.target.form : null;
    if (!form)
      throw new Error(
        "Expected to find a form element attached to wrapped event target."
      );
    const formErrors = validator(
      (name) => getFormFieldValue(form, name),
      (name, value) => setFormFieldValue(form, name, value)
    );
    if (formErrors)
      for (const name of Object.keys(formErrors))
        setFormFieldError(
          form,
          name,
          formErrors[name]
        );
    return onEvent == null ? void 0 : onEvent(event);
  };
}
export {
  validationEffectHandler
};
