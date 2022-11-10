import { FieldInputElement } from "./types";

export function getFieldHintElement(
  el: FieldInputElement
): HTMLSpanElement | null {
  const hint = el
    .closest("[data-fgb='fieldset']")
    ?.querySelector(`#${(el as HTMLInputElement).name}-hint`);
  return (hint as HTMLSpanElement) || null;
}
