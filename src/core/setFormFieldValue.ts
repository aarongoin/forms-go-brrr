import {
  FieldInputElement,
  FieldValues,
  isInputElement,
  isSelectElement,
  isTextareaElement,
} from "./types";

export function setFormFieldValue<V extends FieldValues>(
  form: HTMLFormElement,
  name: string,
  value: V
): void {
  const elOrEls = form.elements.namedItem(name);
  // nothing found?
  if (!elOrEls) throw new Error(`Cannot find field with name ${name}`);
  // found several things? (likely a group field)
  if ("length" in elOrEls && elOrEls.length) {
    const els = Array.from(elOrEls) as HTMLInputElement[];
    // dealing with a radio group or a checkbox group
    if (els[0].type === "radio") {
      els.forEach((el) => {
        el.checked = el.value === value;
      });
      return;
    }
    if (els[0].type === "checkbox") {
      els.forEach(
        Array.isArray(value)
          ? (el) => {
              el.checked = value.includes(el.value);
            }
          : (el) => {
              el.checked = el.value === value;
            }
      );
      return;
    }
    throw new Error(
      `Unexpected collection found in field name ${name}. Found type of ${els[0].type}`
    );
  }
  // found single field
  const el = elOrEls as FieldInputElement;
  if (isSelectElement(el)) {
    if (el.multiple) {
      Array.from(el.selectedOptions).forEach(
        Array.isArray(value)
          ? (el) => {
              el.selected = value.includes(el.value);
            }
          : (el) => {
              el.selected = el.value === value;
            }
      );
      return;
    }
    el.value = `${value}`;
    return;
  }
  if (isInputElement(el)) {
    if (el.type === "email" && el.multiple && Array.isArray(value)) {
      el.value = value.join(",");
      return;
    }
    if (el.type === "checkbox" && el.dataset.group !== el.name) {
      el.checked = !!value;
      return;
    }
    if (el.type === "radio") {
      el.checked = !!value;
      return;
    }
    el.value = `${value}`;
    return;
  }
  if (isTextareaElement(el)) {
    el.value = `${value}`;
    return;
  }
  throw new Error(
    // @ts-expect-error - just in case
    `Unexpected element found in field name ${name}. Found type of ${el.type}`
  );
}
