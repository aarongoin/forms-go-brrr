import {
  FieldInputElement,
  FieldValues,
  isInputElement,
  isSelectElement,
  isTextareaElement,
} from "./types";

export function setFieldError(
  form: HTMLFormElement,
  name: string,
  error: string
): void {
  const elOrEls = form.elements.namedItem(name);
  // nothing found?
  if (!elOrEls) throw new Error(`Cannot find field with name ${name}`);
  const el =
    "length" in elOrEls && elOrEls.length
      ? (elOrEls.item(0) as HTMLInputElement)
      : (elOrEls as FieldInputElement);

  el.setCustomValidity(error);
  const hint = el
    .closest(".df-Label, .df-Fieldset")
    ?.querySelector(`#${el.name}-hint`);
  if (hint) hint.textContent = error;
}
