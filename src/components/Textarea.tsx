import * as React from "react";
import { Optional } from "../core/types";
import { BaseInputProps } from "./Input";

export type TextareaType = {
  type: "textarea";
  minRows?: number;
  maxRows?: number;
  spellcheck?: boolean;
  autosize?: boolean;
};

export type TextareaFieldProps = BaseInputProps &
  TextareaType &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TextareaProps = BaseInputProps &
  Optional<TextareaType, "type"> &
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
      className={"fgb-Textarea".concat(className ? " " : "", className || "")}
      rows={minRows}
    ></textarea>
  );
}
