import {
  FieldInputElement,
  FieldValues,
  isInputElement,
  isSelectElement,
  isTextareaElement,
} from "./types";

export function getFieldValue<V extends FieldValues>(
  form: HTMLFormElement,
  name: string
): V {
  const elOrEls = form.elements.namedItem(name);
  // nothing found?
  if (!elOrEls) throw new Error(`Cannot find field with name ${name}`);
  // found several things? (likely a group field)
  if ("length" in elOrEls && elOrEls.length) {
    const els = Array.from(elOrEls) as HTMLInputElement[];
    // dealing with a radio group or a checkbox group
    if (els[0].type === "radio")
      return Array.from(els).find((e) => e.checked)?.value as V;
    if (els[0].type === "checkbox")
      return Array.from(els)
        .map((e) => (e.checked ? e.value : null))
        .filter(Boolean) as V;
    throw new Error(
      `Unexpected collection found in field name ${name}. Found type of ${els[0].type}`
    );
  }
  // found single field
  const el = elOrEls as FieldInputElement;
  if (isSelectElement(el)) {
    if (el.multiple)
      return Array.from(el.selectedOptions).map((opt) => opt.value) as V;
    return el.value as V;
  }
  if (isInputElement(el)) {
    if (el.type === "file") return el.files as V;
    if (el.type === "email" && el.multiple)
      return el.value.split(/\s*,\s*/) as V;
    if (el.type === "checkbox" && el.dataset.group !== el.name)
      return el.checked as V;
    if (el.type === "radio") return el.checked as V;

    return el.value as V;
  }
  if (isTextareaElement(el)) {
    return el.value as V;
  }
  throw new Error(
    `Unexpected element found in field name ${name}. Found ${el.tagName}`
  );
}
