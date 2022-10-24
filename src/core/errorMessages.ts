import { FieldInputElement, isSelectElement, isTextareaElement } from "./types";

let errorMessages = {
  badInput: "Malformed input.",
  required: "This field is required.",
  minLength: "Text is too short.",
  maxLength: "Text is too long.",
  pattern: "Value is invalid.",
  min: "Value is too low.",
  max: "Value is high.",
  step: "Value is off-step.",
  email: "Invalid email address.",
  url: "Invalid url."
};

export function setDefaultErrorMessages<K extends keyof typeof errorMessages>(
  errs: Pick<typeof errorMessages, K>
): void {
  errorMessages = { ...errorMessages, ...errs };
}

export function getErrorMessage(input: FieldInputElement): string {
  if (input.validity.badInput) return errorMessages.badInput;
  if (input.validity.valueMissing) return errorMessages.required;

  // inputs and textareas only from here on
  if (isSelectElement(input)) return "";

  if (input.validity.tooShort) return errorMessages.minLength;
  if (input.validity.tooLong) return errorMessages.maxLength;

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