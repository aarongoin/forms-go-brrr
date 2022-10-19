import { BaseInputProps } from "./Input";

export type TextareaType = {
  type: "textarea";
  minRows?: number;
  maxRows?: number;
  minlength?: number;
  maxlength?: number;
  spellcheck?: boolean;
  autosize?: boolean;
  className?: string | undefined;
};

export function Textarea({
  type,
  minRows = 3,
  autosize,
  className,
  ...props
}: BaseInputProps & TextareaType) {
  return (
    <textarea
      {...props}
      onInput={
        autosize
          ? (event) => {
              const el = event.target as HTMLTextAreaElement;
              setTimeout(() => {
                el.style.height = "auto";
                el.style.height = `${el.scrollHeight}px`;
              }, 0);
            }
          : undefined
      }
      className={"df-Textarea".concat(className ? " " : "", className || "")}
      rows={minRows}
    ></textarea>
  );
}
