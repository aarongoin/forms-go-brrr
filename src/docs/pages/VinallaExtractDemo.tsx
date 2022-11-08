import * as React from "react";
import { Form, Field, Submit } from "../../components";
import { DemoContext } from "../components";
import {
  formStyle,
  fieldStyle,
  inputStyle,
  submitButtonStyle,
} from "./VanillaExtractDemo.css";

export function VEDemoForm(props) {
  const { log } = React.useContext(DemoContext);
  React.useEffect(() => log("Form rendered"));
  return (
    <Form
      validate="onSubmit"
      {...props}
      className={formStyle}
      validator={(values) => {
        log("Validating form.");
        return {};
      }}
    />
  );
}

export function VEDemoField(props) {
  const { log } = React.useContext(DemoContext);
  React.useEffect(() => log("Field rendered"));
  return (
    <Field
      {...props}
      className={fieldStyle}
      inputClassName={inputStyle}
      validator={(value) => {
        log(`Validating ${props.name} field.`);
        return "";
      }}
    />
  );
}

export const VEDemoButton = ({ children }) => (
  <Submit className={submitButtonStyle}>{children}</Submit>
);
