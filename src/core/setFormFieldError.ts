import { FieldInputElement } from "./types";

export function setFormFieldError(
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
    .closest("[data-fgb='fieldset']")
    ?.querySelector(`#${el.name}-hint`) as HTMLSpanElement | null;
  if (hint) hint.textContent = error || hint.dataset.fgbHint || "";
}
