export function getFormIsValid(form: HTMLFormElement): boolean {
  for (const el of Array.from(form.elements)) {
    if (!el.name) continue;
    const hint = el
      .closest(".fgb-Label, .fgb-Fieldset")
      ?.querySelector(`#${el.name}-hint`);
    if (hint.textContent) return false;
  }
  return true;
}
