import { getErrorMessage } from "./errorMessages";
import { getFormFieldValue } from "./getFormFieldValue";
import { setFormFieldError } from "./setFormFieldError";
function wrapWithFieldValidation(onEvent, validator, outerHandler) {
  const validateInput = (input) => {
    let error = !input.validity.valid ? getErrorMessage(input) : "";
    const value = getFormFieldValue(input.form, input.name);
    error = (validator == null ? void 0 : validator(value)) || error;
    setFormFieldError(input.form, input.name, error);
    return !!error;
  };
  return {
    [onEvent]: (event) => {
      setTimeout(validateInput, onEvent === "onChange" ? 0 : 120, event.target);
      return outerHandler == null ? void 0 : outerHandler(event);
    },
    onInvalid: (event) => {
      if (validateInput(event.target))
        event.preventDefault();
    }
  };
}
export {
  wrapWithFieldValidation
};
