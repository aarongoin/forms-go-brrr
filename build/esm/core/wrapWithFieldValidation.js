import { getErrorMessage } from "./errorMessages";
import { getFormFieldValue } from "./getFormFieldValue";
function wrapWithFieldValidation(onEvent, validators, outerHandler) {
  const validateInput = (input) => {
    var _a;
    let error = !input.validity.valid ? getErrorMessage(input) : "";
    if (!error) {
      const value = getFormFieldValue(input.form, input.name);
      for (const validator of validators) {
        error = validator(value);
        if (error)
          break;
      }
    }
    input.setCustomValidity(error);
    const hint = (_a = input.closest(".fgb-Label, .fgb-Fieldset")) == null ? void 0 : _a.querySelector(`#${input.name}-hint`);
    if (hint)
      hint.textContent = error;
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
