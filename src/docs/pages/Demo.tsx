import * as React from "react";
import { Form, Field } from "../../components";
import { DemoContext } from "../components";


export function DemoForm(props) {
  const {log} = React.useContext(DemoContext);
  React.useEffect(() => log("Form rendered"));
  return <Form validate="onSubmit" {...props} validator={values => {
    log("Validating form.");
    return {};
  }} />
}

export function DemoField(props) {
  const {log} = React.useContext(DemoContext);
  React.useEffect(() => log("Field rendered"));
  return <Field {...props} validator={value => {
    log(`Validating ${props.name} field.`);
    return "";
  }} />
}

export const DemoButton = ({children}) => <button type="submit">{children}</button>