import { getFieldHintElement } from "./getFieldHintElement";
import { FieldInputElement } from "./types";

export function getFormIsValid(form: HTMLFormElement): boolean {
  for (const el of Array.from(form.elements) as Array<FieldInputElement>) {
    if (!("name" in el) || !el.name) continue;
    if (!el.validity.valid || getFieldHintElement(el)?.textContent) return false;
  }
  return true;
}
