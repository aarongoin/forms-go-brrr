import { FormValues, isInputElement, isSelectElement, isTextareaElement } from "./types";

export const getFormValuesAsFormData = (form: HTMLFormElement) => new FormData(form);

function setKV(res: Record<string, any>, k: string, v: any) {
  if (!res[k]) {
    res[k] = v;
  } else {
    if (!Array.isArray(res[k])) res[k] = [res[k]];
    res[k].push(v);
  }
}

export const getFormValuesAsJson = <FV extends FormValues = FormValues>(form: HTMLFormElement): FV => {
  const result = {} as FV;

  for (const input of Array.from(form.elements) as Array<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >) {
    if (isInputElement(input)) {
      switch (input.type) {
        case "number":
        case "range":
          setKV(result, input.name, +input.value);
          continue;
        case "radio":
          if (!input.checked && !result[input.name])
            setKV(result, input.name, null);
          if (input.checked) setKV(result, input.name, input.value);
          continue;
        case "checkbox":
          if (input.dataset.fgbGroup !== input.name)
            setKV(result, input.name, !!input.checked);
          else if (!input.checked && !result[input.name])
            setKV(result, input.name, []);
          else if (input.checked) setKV(result, input.name, input.value);
          continue;
        case "email":
          if (input.multiple)
            setKV(result, input.name, input.value.split(/\s*,\s*/));
          else setKV(result, input.name, input.value);
          continue;
        case "file":
          setKV(result, input.name, input.files);
        default:
          setKV(result, input.name, input.value);
          continue;
      }
    }
    if (isSelectElement(input)) {
      if (input.multiple)
        setKV(
          result,
          input.name,
          Array.from(input.selectedOptions).map((opt) => opt.value)
        );
      else setKV(result, input.name, input.value);
    }
    if (isTextareaElement(input)) setKV(result, input.name, input.value);
  }

  return result;
}
