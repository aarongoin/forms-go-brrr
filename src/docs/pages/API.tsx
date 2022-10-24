import React from "react";
import {
  CodeBlock,
  Column,
  Header,
  Paragraph,
  StickyColumnPair,
} from "../components";

export const apiLinks = [
  "API",
  [
    "Components",
    [
      "Form",
      "Field",
      "Input",
      "Label",
      "Textarea",
      "Select",
      "Fieldset",
      "RadioGroup",
      "Checkboxes",
    ],
    "Core",
    [
      "setDefaultErrorMessages",
      "getErrorMessage",
      "getFormFieldValue",
      "getFormValuesAsFormData",
      "getFormValuesAsJson",
      "setFormFieldError",
    ],
  ],
];

export function API({ className }: { className?: string | undefined }) {
  return (
    <Column className={className}>
      <Header level={2} name="API" />
      <Header level={3} name="Components" />
      <Header level={4} name="Form" />
      <Header level={4} name="Field" />
      <Header level={4} name="Input" />
      <Header level={4} name="Label" />
      <Header level={4} name="Textarea" />
      <Header level={4} name="Select" />
      <Header level={4} name="Fieldset" />
      <Header level={4} name="RadioGroup" />
      <Header level={4} name="Checkboxes" />
      <Header level={3} name="Core" />
      <Paragraph>
        Most of the core utils documented below are used internally in the Form
        and Field components, and are provided here for advanced users.
      </Paragraph>
      <Header level={4} name="setDefaultErrorMessages" />
      <Header level={4} name="getErrorMessage" />
      <Header level={4} name="getFormFieldValue" />
      <Header level={4} name="getFormValuesAsFormData" />
      <Header level={4} name="getFormValuesAsJson" />
      <Header level={4} name="setFormFieldError" />
    </Column>
  );
}
