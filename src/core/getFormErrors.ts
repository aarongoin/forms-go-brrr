import { getFieldHintElement } from "./getFieldHintElement";
import { FieldInputElement } from "./types";

export function getFormErrors<K extends string = string>(
  form: HTMLFormElement
): Record<K, string> {
  const errors = {} as Record<K, string>;
  for (const el of Array.from(form.elements) as Array<FieldInputElement>) {
    if (!el.name) continue;
    errors[el.name as K] = getFieldHintElement(el)?.textContent || "";
  }
  return errors;
}
