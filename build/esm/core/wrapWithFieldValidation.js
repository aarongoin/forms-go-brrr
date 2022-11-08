import { getErrorMessage } from "./errorMessages";
import { getFormFieldValue } from "./getFormFieldValue";
import { setFormFieldError } from "./setFormFieldError";
function wrapWithFieldValidation(onEvent, validator, outerHandler) {
  const validateInput = (input) => {
    let error = !input.validity.valid ? getErrorMessage(input) : "";
    const value = getFormFieldValue(input.form, input.name);
    error = (validator == null ? void 0 : validator(value)) || error;
    console.log({ name: input.name, error, value, validated: validator == null ? void 0 : validator(value), validity: input.validity });
    setFormFieldError(input.form, input.name, error);
    return !!error;
  };
  return {
    [onEvent]: (event) => {
      validateInput(event.target);
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
