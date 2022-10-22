import * as React from "react";
import { BaseInputProps } from "./Input";

export type TextareaType = {
  type: "textarea";
  minRows?: number;
  maxRows?: number;
  spellcheck?: boolean;
  autosize?: boolean;
};

export type TextareaProps = BaseInputProps &
  TextareaType &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
  type,
  minRows = 3,
  autosize,
  className,
  ...props
}: TextareaProps) {
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
