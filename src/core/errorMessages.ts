import { FieldInputElement, isSelectElement, isTextareaElement } from "./types";

let errorMessages = {
  badinput: "Value is invalid.",
  required: "This field is required.",
  minlength: "Text is too short.",
  maxlength: "Text is too long.",
  pattern: "Value is invalid.",
  min: "Value is too low.",
  max: "Value is high.",
  step: "Value is invalid.",
  email: "Value is invalid.",
  url: "Value is invalid."
};

export function setErrorMessages<K extends keyof typeof errorMessages>(
  errs: Pick<typeof errorMessages, K>
): void {
  errorMessages = { ...errorMessages, ...errs };
}

export function getErrorMessage(input: FieldInputElement): string {
  if (input.validity.badInput) return errorMessages.badinput;
  if (input.validity.valueMissing) return errorMessages.required;

  // inputs and textareas only from here on
  if (isSelectElement(input)) return "";

  if (input.validity.tooShort) return errorMessages.minlength;
  if (input.validity.tooLong) return errorMessages.maxlength;

  // inputs only from here on
  if (isTextareaElement(input)) return "";

  if (input.validity.patternMismatch) return errorMessages.pattern;
  if (input.validity.rangeUnderflow) return errorMessages.min;
  if (input.validity.rangeOverflow) return errorMessages.max;
  if (input.validity.stepMismatch) return errorMessages.step;
  if (input.validity.typeMismatch) {
    if (input.type === "email") return errorMessages.email;
    if (input.type === "url") return errorMessages.url;
  }
  return "";
}