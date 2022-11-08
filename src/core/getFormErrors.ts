export function getFormErrors<K extends string = string>(
  form: HTMLFormElement
): Record<K, string> {
  const errors = {};
  for (const el of Array.from(form.elements)) {
    if (!el.name) continue;
    const hint = el
      .closest("[data-fgb='label']")
      ?.querySelector(`#${el.name}-hint`);
    errors[el.name] = hint?.textContent;
  }
  return errors;
}
