
export type FieldInputElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type FieldElement = FieldInputElement | HTMLButtonElement;

export function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return el.tagName === "INPUT";
}

export function isSelectElement(el: HTMLElement): el is HTMLSelectElement {
  return el.tagName === "SELECT";
}

export function isTextareaElement(el: HTMLElement): el is HTMLTextAreaElement {
  return el.tagName === "TEXTAREA";
}

export type FieldValues =
  | string
  | boolean
  | (string | null)[]
  | FileList
  | null
  | undefined;

export type FormValues = Record<string, FieldValues>;

export type Option = { id: number | string; name: string };

export type ChangeEventT = React.ChangeEvent<FieldInputElement>;
export type BlurEventT = React.FocusEvent<FieldInputElement>;

export type GetValue<FV extends FormValues = FormValues> = <
  K extends keyof FV & string = keyof FV & string
>(
  name: K
) => FV[K];

export type SetValue<FV extends FormValues = FormValues> = <
  K extends keyof FV & string = keyof FV & string
>(
  name: K,
  value: FV[K]
) => void;

export type FormErrors<FV extends FormValues = FormValues> = Record<
  keyof FV,
  string
>;

export type FormHandler<FV extends FormValues = FormValues> = (
  getValue: GetValue<FV>,
  setValue: SetValue<FV>
) => FormErrors<FV> | undefined | null;
