import * as React from "react";
import { Form, Field, Submit } from "../../components";
import { DemoContext } from "../components";
import {
  formStyle,
  fieldStyle,
  inputStyle,
  submitButtonStyle,
} from "./VanillaExtractDemo.css";

export const cssStyles = `
[data-fgb='form'] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

[data-fgb='fieldset'] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 0;
}

[data-fgb='fieldset']:focus-within {
  color: #00a9d8;
  transition: color 150ms ease-in;
}

[data-fgb='fieldset']:invalid:not(:focus-within):has(span[data-fgb='hint']:not(:empty)) {
  color: red;
  transition: color 150ms ease-in;
}

[data-fgb='form'] > [data-fgb='fieldset']:not(:first-child) {
  margin-top: 16px;
}

[data-fgb='input'] {
  border: 0;
  border-radius: 2px;
  outline: solid 1px #77cce6;
}

[data-fgb='input']:focus-within {
  outline: solid 2px #00a9d8;
  transition: all 150ms ease-in;
}

[data-fgb='input']:hover:not(:focus-within) {
  outline: solid 1px #00a9d8;
  transition: all 150ms ease-in;
}

[data-fgb='fieldset']:invalid:not(:focus-within):has([data-fgb=hint]:not(:empty)) [data-fgb='input'] {
  outline: solid 2px red;
  transition: all 150ms;
}

[data-fgb='form'] > [data-fgb='submit'] {
  margin-top: 16px;
}`;

export function CssDemoForm(props) {
  const { log } = React.useContext(DemoContext);
  React.useEffect(() => log("Form rendered"));
  return (
    <div>
      <style>{cssStyles}</style>
      <Form
        validate="onSubmit"
        {...props}
        validator={(values) => {
          log("Validating form.");
          return {};
        }}
      />
    </div>
  );
}

export function CssDemoField(props) {
  const { log } = React.useContext(DemoContext);
  React.useEffect(() => log("Field rendered"));
  return (
    <Field
      {...props}
      validator={(value) => {
        log(`Validating ${props.name} field.`);
        return "";
      }}
    />
  );
}

export const CssDemoButton = ({ children }) => <Submit>{children}</Submit>;
