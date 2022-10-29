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
    "<Form /> component",
    "<Submit /> component",
    "<Field /> component",
    [
      "checkbox",
      "checkboxes",
      "date",
      "datetime-local",
      "email",
      "file",
      "month",
      "number",
      "password",
      "radio",
      "radiogroup",
      "range",
      "search",
      "select",
      "tel",
      "text",
      "textarea",
      "url",
      "week",
      // "Input",
      // "Label",
      // "Textarea",
      // "Select",
      // "Fieldset",
      // "RadioGroup",
      // "Checkboxes",
    ],
    "Core",
    [
      "Default error messages",
      "setDefaultErrorMessages()",
      "getErrorMessage()",
      "getFormFieldValue()",
      "getFormValuesAsFormData()",
      "getFormValuesAsJson()",
      "setFormFieldError()",
    ],
  ],
];

export function API({ className }: { className?: string | undefined }) {
  return (
    <Column space={2} className={className}>
      <Header level={2} name="API" />
      <Header level={3} name="<Form /> component" />
      <Paragraph>
        The Form component is a thin wrapper around the native form element that
        enhances the form submit and validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="Form validateOnBlur">
          validateOnBlur
        </Header>
        <Paragraph>
          <b>Optional Function</b>
          <br />
          <b>Type:</b>{" "}
          <Code>
            {
              "(getValue: GetValue, setValue: SetValue) => FormErrors | undefined | null"
            }
          </Code>
          <br />
          An optional custom validator that will be run when a field within the
          form is blurred. It gets passed synchronous getter and setter methods
          for form values.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Form validateOnChange">
          validateOnChange
        </Header>
        <Paragraph>
          <b>Optional Function</b>
          <br />
          <b>Type:</b>{" "}
          <Code>
            {
              "(getValue: GetValue, setValue: SetValue) => FormErrors | undefined | null"
            }
          </Code>
          <br />
          An optional custom validator that will be run when a field within the
          form is changed. It gets passed synchronous getter and setter methods
          for form values.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Form submitFormData">
          submitFormData
        </Header>
        <Paragraph>
          <b>Optional Function</b>
          <br />
          <b>Type:</b>{" "}
          <Code>
            {
              "(data: FormData) => void | FormErrors | Promise<void | FormErrors>"
            }
          </Code>
          <br />
          JavaScript submit method that will be used instead of submitting
          directly to the form action. Form values will be validated, and if
          valid then submitted to this callback with the form values as a
          FormData object. You may return a FormErrors shaped object to set or
          clear errors on the form fields.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Form submitJson">
          submitJson
        </Header>
        <Paragraph>
          <b>Optional Function</b>
          <br />
          <b>Type:</b>{" "}
          <Code>
            {
              "(data: Record<string, unknown>) => void | FormErrors | Promise<void | FormErrors>"
            }
          </Code>
          <br />
          JavaScript submit method that will be used instead of submitting
          directly to the form action. Form values will be validated, and if
          valid then submitted to this callback with the form values as a
          JavAscript object. You may return a FormErrors shaped object to set or
          clear errors on the form fields. If you have defined a{" "}
          <Code>submitFormData</Code> then this prop will be ignored.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Form dialog">
          dialog
        </Header>
        <Paragraph>
          <b>Optional Boolean</b>
          <br />
          <b>Type:</b> <Code>boolean</Code>
          <br />
          Boolean which indicates the form is embedded within a dialog context
          and will therefor not fallback to an HTTP submit if there is no
          JavaScript submit handler. If this is true, then submitting the form
          will trigger the usual submit event, but will also close the dialog.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Form method">
          method
        </Header>
        <Paragraph>
          <b>Optional String</b>
          <br />
          <b>Type:</b> <Code>"post" | "get"</Code>
          <br />
          If the form is submitted and there is no JavaScript handler set then
          the form will submit natively using this HTTP method as well as the
          form <Code>action</Code>.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Form action">
          action
        </Header>
        <Paragraph>
          <b>Optional String</b>
          <br />
          <b>Type:</b> <Code>string</Code>
          <br />
          If the form is submitted and there is no JavaScript handler set then
          the form will submit natively to the url specified here using the HTTP
          method specified in the <Code>method</Code>.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Form target">
          target
        </Header>
        <Paragraph>
          <b>Optional String</b>
          <br />
          <b>Type:</b> <Code>"_self" | "_blank" | "_parent" | "_top"</Code>
          <br />
          If the form is submitted and there is no JavaScript handler set then
          the form will submit natively to the url specified here using the HTTP
          method specified in the <Code>method</Code>.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Form encType">
          encType
        </Header>
        <Paragraph>
          <b>Optional String</b>
          <br />
          <b>Type:</b>{" "}
          <Code>
            "application/x-www-form-urlencoded" | "multipart/form-data" |
            "text/plain"
          </Code>
          <br />
          If the form is submitted via the "post" method then this is the MIME
          type used. Use <Code>"multipart/form-data"</Code> if your form
          contains an input with a file.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Form autoComplete">
          autoComplete
        </Header>
        <Paragraph>
          <b>Optional Boolean</b>
          <br />
          <b>Type:</b> <Code>boolean</Code>
          <br />
          Sets the default autoComplete value for all inputs in this form.
          Sometimes browsers will ignore this on forms it thinks it knows better
          about, ex. login forms.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Form
  method="post"
  action="/my-endpoint/"
  target="_blank"
  submitFormData={data =>
    myApiService.post("/my-endpoint/", data)
      .then(err => {
        if (err) return err;
        setUIState("success");
      })}
/>`}</CodeBlock>
      </Paragraph>
      <Header level={3} name="<Submit /> component" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="Submit validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={3} name="<Field /> component" />
      <Paragraph>
        The Field is a consolidated, typed wrapper around native HTML labels and
        inputs which provides a solid, accessible foundation to build your
        forms. Since the vast majority of HTML form inputs are under a single
        tag with a <Code>type</Code> attribute, we go just a step farther to
        bring the <Code>textarea</Code>, <Code>select</Code> under the same
        pattern. Additionally we have defined two new field types: the{" "}
        <Code>checkboxes</Code> and <Code>radiogroup</Code> types which are
        convenient ways to handle a checklist of options, or a set of radio
        options.
      </Paragraph>
      <Paragraph>
        <b>Props:</b> (shared by all field types)
      </Paragraph>
      <Paragraph>
        <Header level={5} name="Field name">
          name
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>string</Code>
          <br />
          The name by which this field's value will be referenced.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Field validateOnChange">
          validateOnChange
        </Header>
        <Paragraph>
          <b>Optional Function</b><br />
          <b>Type:</b> <Code>{"(value: FieldValue) => string"}</Code>
          <br />
          Validation function to be run on every field change. It takes the
          current field value and should return a string error message or an
          empty string if no error.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Field validateOnBlur">
          validateOnBlur
        </Header>
        <Paragraph>
          <b>Optional Function</b><br />
          <b>Type:</b> <Code>{"(value: FieldValue) => string"}</Code>
          <br />
          Validation function to be run on field blur. If{" "}
          <Code>validateOnChange</Code> is also defined, then this prop is
          ignored. It takes the current field value and should return a string
          error message or an empty string if no error.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Field disabled">
          disabled
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>boolean | undefined</Code>
          <br />
          Optional boolean prop to specify that this field should be disabled
          and prevent user input or modification.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Field autoFocus">
          autoFocus
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>boolean | undefined</Code>
          <br />
          Optional boolean prop to specify that this field should be autofocused
          on render. Only one field should have this property set to true at a
          time.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Field required">
          required
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>boolean | undefined</Code>
          <br />
          Optional boolean prop to make field required in order to submit the
          form.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Field className">
          className
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>string | undefined</Code>
          <br />
          An optional prop passes to label element as the <Code>
            className
          </Code>{" "}
          prop.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Field inputClassName">
          inputClassName
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>string | undefined</Code>
          <br />
          An optional prop passes to input compontent as the{" "}
          <Code>className</Code> prop.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <Header level={5} name="Field hintClassName">
          hintClassName
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>string | undefined</Code>
          <br />
          An optional prop passes to span wrapping the hint text as the{" "}
          <Code>className</Code> prop.
        </Paragraph>
      </Paragraph>
      <br />
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Field
  name="topping"
  label="Pick your toppings:"
  options={["Lettuce","Onion","Tomato","Bacon","Pickle"]}
  defaultChecked={["Lettuce", "Tomato"]}
/>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="checkbox" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="checkbox validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="checkboxes" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="checkboxes validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="date" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="date validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="datetime-local" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="datetime-local validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="email" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="email validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="file" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="file validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="month" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="month validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="number" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="number validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="password" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="password validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="radio" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="radio validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="radiogroup" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="radiogroup validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="range" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="range validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="search" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="search validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="select" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="select validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="tel" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="tel validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="text" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="text validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="textarea" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="textarea validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="url" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="url validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      <Header level={4} name="week" />
      <Paragraph>
        The Submit component is a thin wrapper around the native HTML button
        element. It defines the button type as a submit button for you, and
        hooks into the form it's enclosed in so that it will automatically
        disable or enable based on the form and field validation.
      </Paragraph>
      <Paragraph>
        <b>Props:</b>
      </Paragraph>
      <Paragraph>
        <Header level={5} name="week validate">
          validate
        </Header>
        <Paragraph>
          <b>Type:</b> <Code>"onChange" | "onBlur"</Code>
          <br />
          Set when the submit button will check the form validity to determine
          if it should be disabled or not.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        <b>Example:</b>
        <CodeBlock>{`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}</CodeBlock>
      </Paragraph>
      {/* <Header level={4} name="Input" />
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
      */}
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
  required: "Required.",
  minLength: "Too short.",
  maxLength: "Too long.",
  pattern: "Invalid value.",
  min: "Too low.",
  max: "Too high.",
  step: "Off-step.",
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
      <Header level={4} name="setDefaultErrorMessages()" />
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
      <Header level={4} name="getErrorMessage()" />
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
      <Header level={4} name="getFormFieldValue()" />
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
      <Header level={4} name="getFormValuesAsFormData()" />
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
      <Header level={4} name="getFormValuesAsJson()" />
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
      <Header level={4} name="setFormFieldError()" />
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
