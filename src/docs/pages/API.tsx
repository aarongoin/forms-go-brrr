import React from "react";
import {
  Code,
  CodeBlock,
  Column,
  Header,
  MdnLink,
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
      "Default error messages",
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
    <Column space={2} className={className}>
      <Header level={2} name="API" />

      <Header level={3} name="Components" />

      <Header level={4} name="Form" />
      <Paragraph>Description</Paragraph>
      <Paragraph>Typed Interface</Paragraph>
      <Paragraph>Prop details</Paragraph>

      <Header level={4} name="Field" />
      <Paragraph>Description</Paragraph>
      <Paragraph>Typed Interface</Paragraph>
      <Paragraph>Prop details</Paragraph>

      <Header level={4} name="Input" />
      <Paragraph>Description</Paragraph>
      <Paragraph>Typed Interface</Paragraph>
      <Paragraph>Prop details</Paragraph>

      <Header level={4} name="Label" />
      <Paragraph>Description</Paragraph>
      <Paragraph>Typed Interface</Paragraph>
      <Paragraph>Prop details</Paragraph>

      <Header level={4} name="Textarea" />
      <Paragraph>Description</Paragraph>
      <Paragraph>Typed Interface</Paragraph>
      <Paragraph>Prop details</Paragraph>

      <Header level={4} name="Select" />
      <Paragraph>Description</Paragraph>
      <Paragraph>Typed Interface</Paragraph>
      <Paragraph>Prop details</Paragraph>

      <Header level={4} name="Fieldset" />
      <Paragraph>Description</Paragraph>
      <Paragraph>Typed Interface</Paragraph>
      <Paragraph>Prop details</Paragraph>

      <Header level={4} name="RadioGroup" />
      <Paragraph>Description</Paragraph>
      <Paragraph>Typed Interface</Paragraph>
      <Paragraph>Prop details</Paragraph>

      <Header level={4} name="Checkboxes" />
      <Paragraph>Description</Paragraph>
      <Paragraph>Typed Interface</Paragraph>
      <Paragraph>Prop details</Paragraph>

      <Header level={3} name="Core" />
      <Paragraph>
        Most of the core utils documented below are used internally in the Form
        and Field components, and are provided here for advanced users.
      </Paragraph>

      <Header level={4} name="Default error messages" />
      <Paragraph>
        Validation is built on-top of native HTML form client-side validation,
        which defines a number of attributes for form elements to govern what
        the browser considers valid or invalid inputs.
      </Paragraph>
      <Paragraph>
        <CodeBlock>{`let defaultErrorMessages = {
  badInput: "Malformed input.",
  required: "This field is required.",
  minLength: "Text is too short.",
  maxLength: "Text is too long.",
  pattern: "Value is invalid.",
  min: "Value is too low.",
  max: "Value is high.",
  step: "Value is off-step.",
  email: "Invalid email address.",
  url: "Invalid url."
};`}</CodeBlock>
      </Paragraph>
      <Paragraph>
        Most of the keys here are coming directly from the keys defined on the
        input{" "}
        <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState">
          ValidityState
        </MdnLink>{" "}
        object. The only exceptions are the <Code>email</Code> and{" "}
        <Code>url</Code> keys which are small improvements to the browsers'{" "}
        <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/typeMismatch">
          typeMismatch
        </MdnLink>{" "}
        validity property which groups the two input types.
      </Paragraph>
      <Paragraph>
        If during validation, inputs with the right props are found with one of
        these errors the default error is used to populate the field error
        element.
      </Paragraph>
      <Paragraph>
        Any of these errors can be overriden using the{" "}
        <Code>setDefaultErrorMessages</Code> function documented below.
      </Paragraph>

      <Header level={4} name="setDefaultErrorMessages" />
      <Paragraph>
        Call this to customize any of the default error messages used for the
        the built-in field vaidation.
      </Paragraph>
      <Paragraph>
        <b>Signature:</b>{" "}
        <Code>
          {
            "setDefaultErrorMessages(errs: Record<DefaultErrorKeys, string>): void"
          }
        </Code>
      </Paragraph>
      <Paragraph>
        <b>Arguments:</b> Object whose keys are one of the predefined client
        error types, and values are static strings used as the error message.
      </Paragraph>
      <Paragraph>
        <b>Return value:</b> None.
      </Paragraph>
      <Paragraph>
        <b>Side effects:</b> Will set default error messages, mutating private
        module state. All future client errors will leverage these messages.
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>
          {`setDefaultErrorMessages({
  required: "You must fill this field out",
  minLength: "Field value should be longer",
  maxLength: "For real? You writing an essay???",
});`}
        </CodeBlock>
      </Paragraph>

      <Header level={4} name="getErrorMessage" />
      <Paragraph>
        Called when validating an input if{" "}
        <Code>inputElement.validity.valid === false</Code> in order to map the
        ValidityState to an error message. This function uses the default error
        messages, or any custom overrides you have set.
      </Paragraph>
      <Paragraph>
        <b>Signature:</b>{" "}
        <Code>{"getErrorMessage(input: FieldInputElement): string"}</Code>
      </Paragraph>
      <Paragraph>
        <b>Arguments:</b> A valid form input:{" "}
        <Code>HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement</Code>{" "}
        whose{" "}
        <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState">
          ValidityState
        </MdnLink>{" "}
        will be parsed.
      </Paragraph>
      <Paragraph>
        <b>Return value:</b> A string containing the human readable error
        message, or an empty string if the field's ValidityState is valid.
      </Paragraph>
      <Paragraph>
        <b>Side effects:</b> None.
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`getErrorMessage(textInput);`}</CodeBlock>
      </Paragraph>

      <Header level={4} name="getFormFieldValue" />
      <Paragraph>
        This function is the uncurried version provided by the form validators
        that allows for pulling the current value of any named input within a
        given form.
      </Paragraph>
      <Paragraph>
        <b>Signature:</b>{" "}
        <Code>
          {"getFormFieldValue(form: HTMLFormElement, name: string): FieldValue"}
        </Code>
      </Paragraph>
      <Paragraph>
        <b>Arguments:</b> An html form element and the name of the field to
        read. Field with name must exist within the form or else an error will
        be thrown.
      </Paragraph>
      <Paragraph>
        <b>Return value:</b> Parsed value of general type FieldValue. Depending
        on the type of the field parsed from, the specific type of the value
        will differ.
      </Paragraph>
      <Paragraph>
        <b>Throws:</b> An error if no field found by the given name, or if
        element found is some unexpected type outside of the types supported by
        forms-go-brrr.
      </Paragraph>
      <Paragraph>
        <b>Side effects:</b> None.
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`getFormFieldValue(formElement, "username");`}</CodeBlock>
      </Paragraph>

      <Header level={4} name="getFormValuesAsFormData" />
      <Paragraph>
        Get all the values from a form as a FormData instance, just as if the
        form had been submitted natively.
      </Paragraph>
      <Paragraph>
        <b>Signature:</b>{" "}
        <Code>
          {"getFormValuesAsFormData(form: HTMLFormElement): FormData"}
        </Code>
      </Paragraph>
      <Paragraph>
        <b>Arguments:</b> An html form element and the name of the field to
        read. Field with name must exist within the form or else an error will
        be thrown.
      </Paragraph>
      <Paragraph>
        <b>Return value:</b> Parsed values of the form as a{" "}
        <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/API/FormData">
          FormData
        </MdnLink>{" "}
        instance.
      </Paragraph>
      <Paragraph>
        <b>Side effects:</b> None.
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`getFormValuesAsFormData(formElement);`}</CodeBlock>
      </Paragraph>

      <Header level={4} name="getFormValuesAsJson" />
      <Paragraph>
        Get all the values from a form as a javascript object.
      </Paragraph>
      <Paragraph>
        <b>Signature:</b>{" "}
        <Code>
          {
            "getFormValuesAsJson(form: HTMLFormElement): Record<string, FieldValue>"
          }
        </Code>
      </Paragraph>
      <Paragraph>
        <b>Arguments:</b> An html form element.
      </Paragraph>
      <Paragraph>
        <b>Return value:</b> Parsed values of form as a javascript object with
        keys being the name of the field, and values the parsed FieldValue.
        Depending on the type of the field parsed from, the specific type of the
        value will differ.
      </Paragraph>
      <Paragraph>
        <b>Side effects:</b> None.
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`getFormValuesAsJson(formElement);`}</CodeBlock>
      </Paragraph>

      <Header level={4} name="setFormFieldError" />
      <Paragraph>
        Function used by the library to set the error text for any named field
        within a form.
      </Paragraph>
      <Paragraph>
        <b>Signature:</b>{" "}
        <Code>
          {
            "setFormFieldError(form: HTMLFormElement, name: string, error: string): void"
          }
        </Code>
      </Paragraph>
      <Paragraph>
        <b>Arguments:</b> An html form element, the name of the field, and the
        error message string. Field with name must exist within the form or else
        an error will be thrown.
      </Paragraph>
      <Paragraph>
        <b>Return value:</b> None.
      </Paragraph>
      <Paragraph>
        <b>Throws:</b> An error if no field found by the given name, or if
        element found is some unexpected type outside of the types supported by
        forms-go-brrr.
      </Paragraph>
      <Paragraph>
        <b>Side effects:</b> Sets the error message for the input and adds the
        error to the hint element.
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`setFormFieldError(formElement, "username", "This field is required!");`}</CodeBlock>
      </Paragraph>
    </Column>
  );
}
