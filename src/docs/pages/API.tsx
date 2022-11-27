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
    "Form",
    "Submit",
    "Field",
    [
      "checkbox",
      "checkboxes",
      "color",
      "date",
      "datetime-local",
      "email",
      "file",
      "hidden",
      "month",
      "number",
      "numeric",
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
    ],
    "Core",
    [
      "Default error messages",
      "setDefaultErrorMessages",
      "getErrorMessage",
      "getFormFieldValue",
      "setFormFieldValue",
      "getFormValuesAsFormData",
      "getFormValuesAsJson",
      "setFormFieldError",
    ],
  ],
];

type ComponentDocsProps = {
  name: string;
  description: Array<string | React.ReactNode>;
  example: string;
  props: Array<{
    name: string;
    description: string | React.ReactNode;
    type: string;
    optional?: boolean;
  }>;
  className?: string | undefined;
};

function ComponentDocs({
  name,
  description,
  props,
  example,
  className,
}: ComponentDocsProps) {
  return (
    <section className={className}>
      <Header level={3} name={name} />
      {description.map((d, i) => (
        <Paragraph key={String(i)}>{d}</Paragraph>
      ))}
      <StickyColumnPair
        left={
          <Column space={2}>
            <Header level={4} name={`${name} Props`}>
              Props
            </Header>
            {props.map((p) => (
              <Paragraph key={p.name}>
                <Header level={5} name={`${name} ${p.name}`}>
                  {p.name}
                  {p.optional ? (
                    <Paragraph style={{ display: "inline", fontWeight: "300" }}>
                      {" "}
                      (optional){" "}
                    </Paragraph>
                  ) : null}
                </Header>
                <Paragraph>
                  <b>Type:</b> <Code>{p.type}</Code>
                  <br />
                  {p.description}
                </Paragraph>
              </Paragraph>
            ))}
          </Column>
        }
        right={
          <Paragraph>
            <Header level={4} name={`${name} Example`}>
              Example
            </Header>
            <CodeBlock>{example}</CodeBlock>
          </Paragraph>
        }
      />
    </section>
  );
}

export function API({ className }: { className?: string | undefined }) {
  return (
    <Column space={2} className={className}>
      <Header level={2} name="API" />
      <ComponentDocs
        name="Form"
        description={[
          "The Form component is a thin wrapper around the native form element that enhances the form submit and validation.",
        ]}
        props={[
          {
            name: "validateOnBlur",
            optional: true,
            type: "(getValue: GetValue, setValue: SetValue) => FormErrors | undefined | null",
            description:
              "An optional custom validator that will be run when a field within the form is blurred. It gets passed synchronous getter and setter methods for form values.",
          },
          {
            name: "validateOnChange",
            optional: true,
            type: "(getValue: GetValue, setValue: SetValue) => FormErrors | undefined | null",
            description:
              "An optional custom validator that will be run when a field within the form is changed. It gets passed synchronous getter and setter methods for form values.",
          },
          {
            name: "submitFormData",
            optional: true,
            type: "(data: FormData) => void | FormErrors | Promise<void | FormErrors>",
            description:
              "JavaScript submit method that will be used instead of submitting directly to the form action. Form values will be validated, and if valid then submitted to this callback with the form values as a FormData object. You may return a FormErrors shaped object to set or clear errors on the form fields.",
          },
          {
            name: "submitJson",
            optional: true,
            type: "(data: Record<string, FieldValue>) => void | FormErrors | Promise<void | FormErrors>",
            description: (
              <span>
                JavaScript submit method that will be used instead of submitting
                directly to the form action. Form values will be validated, and
                if valid then submitted to this callback with the form values as
                a JavAscript object. You may return a FormErrors shaped object
                to set or clear errors on the form fields. If you have defined a{" "}
                <Code>submitFormData</Code> then this prop will be ignored.
              </span>
            ),
          },
          {
            name: "dialog",
            optional: true,
            type: "boolean | undefined",
            description:
              "Boolean which indicates the form is embedded within a dialog context and will therefor not fallback to an HTTP submit if there is no JavaScript submit handler. If this is true, then submitting the form will trigger the usual submit event, but will also close the dialog.",
          },
          {
            name: "method",
            optional: true,
            type: '"post" | "get"',
            description: (
              <span>
                If the form is submitted and there is no JavaScript handler set
                then the form will submit natively using this HTTP method as
                well as the form <Code>action</Code>.
              </span>
            ),
          },
          {
            name: "action",
            optional: true,
            type: "string",
            description: (
              <span>
                If the form is submitted and there is no JavaScript handler set
                then the form will submit natively to the url specified here
                using the HTTP method specified in the <Code>method</Code>.
              </span>
            ),
          },
          {
            name: "target",
            optional: true,
            type: '"_self" | "_blank" | "_parent" | "_top"',
            description: (
              <span>
                If the form is submitted and there is no JavaScript handler set
                then the form will submit natively to the url specified here
                using the HTTP method specified in the <Code>method</Code>.
              </span>
            ),
          },
          {
            name: "encType",
            optional: true,
            type: '"application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain"',
            description: (
              <span>
                If the form is submitted via the "post" method then this is the
                MIME type used. Use <Code>"multipart/form-data"</Code> if your
                form contains an input with a file.
              </span>
            ),
          },
          {
            name: "autoComplete",
            optional: true,
            type: "boolean",
            description:
              "Sets the default autoComplete value for all inputs in this form. Sometimes browsers will ignore this on forms it thinks it knows better about, ex. login forms.",
          },
        ]}
        example={`<Form
  method="post"
  action="/my-endpoint/"
  target="_blank"
  submitFormData={data =>
    myApiService.post("/my-endpoint/", data)
      .then(err => {
        if (err) return err;
        setUIState("success");
      })}
>
  {formContents}
</Form>`}
      />
      <ComponentDocs
        name="Submit"
        description={[
          "The Submit component is a thin wrapper around the native HTML button element. It defines the button type as a submit button for you, and hooks into the form it's enclosed in so that it will automatically disable or enable based on the form and field validation.",
        ]}
        props={[
          {
            name: "validate",
            optional: true,
            type: '"onChange" | "onBlur"',
            description:
              "Set when the submit button will check the form validity to determine if it should be disabled or not.",
          },
        ]}
        example={`<Submit validate="onChange" disabled={myCustomReasonToDisable}>Submit form</Submit>`}
      />
      <ComponentDocs
        name="Field"
        description={[
          <span>
            The Field is a consolidated, typed wrapper around native HTML labels
            and inputs which provides a solid, accessible foundation to build
            your forms. Since the vast majority of HTML form inputs are under a
            single tag with a <Code>type</Code> attribute, we go just a step
            farther to bring the <Code>textarea</Code>, <Code>select</Code>{" "}
            under the same pattern. Additionally we have defined two new field
            types: the <Code>checkboxes</Code> and <Code>radiogroup</Code> types
            which are convenient ways to handle a checklist of options, or a set
            of radio options.
          </span>,
          <span>
            <Header level={5} name="DOM Structure" />
            <Paragraph>
              While you shouldn't need to worry to much about the internals of
              the Field component, it can be helpful to know the dom structure
              for the purposes of styling.
            </Paragraph>
            <Paragraph>The output of any non-group Field looks basically like this (visual order is different):</Paragraph>
            <CodeBlock>{`<fieldset>
  <span data-fgb="hint" /> or <span data-fgb="error" /> (if field has validation error)
  <label data-fgb="label" />
  <input data-fgb="input" /> or <textarea data-fgb="input" /> or <select data-fgb="input" />
</fieldset>`}</CodeBlock>
            <Paragraph>In cases where there's a group of inputs:</Paragraph>
            <CodeBlock>{`<fieldset>
  <span data-fgb="hint" /> or <span data-fgb="error" /> (if field has validation error)
  <legend data-fgb="label" />
  <fieldset>
    <label data-fgb="label" />
    <input data-fgb="input" />
  </fieldset>
  {...repeat inner fieldset for every input in the group}
</fieldset>`}</CodeBlock>
          </span>,
        ]}
        props={[
          {
            name: "name",
            type: "string",
            description:
              "The name by which this field's value will be referenced.",
          },
          {
            name: "type",
            type: '"checkbox" | "checkboxes" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "month" | "number" | "numeric" | "password" | "radio" | "radiogroup" | "range" | "search" | "select" | "tel" | "text" | "textarea" | "time" | "url" | "week" | undefined',
            description:
              "The type of field this is. This will determine if the Field is wrapped in a fieldset, or a label, and will govern if an input, a collection of inputs, a textarea, or a select is rendered inside.",
          },
          {
            name: "validateOnChange",
            optional: true,
            type: '"(value: FieldValue) => string"',
            description:
              "Validation function to be run on every field change. It takes the current field value and should return a string error message or an empty string if no error.",
          },
          {
            name: "validateOnBlur",
            optional: true,
            type: '"(value: FieldValue) => string"',
            description: (
              <span>
                Validation function to be run on field blur. If{" "}
                <Code>validateOnChange</Code> is also defined, then this prop is
                ignored. It takes the current field value and should return a
                string error message or an empty string if no error.
              </span>
            ),
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            optional: true,
            description:
              "Optional boolean prop to specify that this field should be disabled and prevent user input or modification.",
          },
          {
            name: "autoFocus",
            type: "boolean | undefined",
            optional: true,
            description:
              "Optional boolean prop to specify that this field should be autofocused on render. Only one field should have this property set to true at a time.",
          },
          {
            name: "required",
            type: "boolean | undefined",
            optional: true,
            description:
              "Optional boolean prop to make field required in order to submit the form.",
          },
          {
            name: "className",
            optional: true,
            type: "string | undefined",
            description: (
              <span>
                An optional prop passed to label element as the{" "}
                <Code>className</Code> prop.
              </span>
            ),
          },
          {
            name: "inputClassName",
            optional: true,
            type: "string | undefined",
            description: (
              <span>
                An optional prop passed to input compontent as the{" "}
                <Code>className</Code> prop.
              </span>
            ),
          },
          {
            name: "hintClassName",
            optional: true,
            type: "string | undefined",
            description: (
              <span>
                An optional prop passed to span wrapping the hint text as the{" "}
                <Code>className</Code> prop.
              </span>
            ),
          },
        ]}
        example={`<Field
  name="topping"
  type="select"
  label="Pick your toppings:"
  options={["Lettuce","Onion","Tomato","Bacon","Pickle"]}
  defaultChecked={["Lettuce", "Tomato"]}
/>`}
      />
      <ComponentDocs
        name="checkbox"
        description={["Single checkbox field."]}
        props={[
          {
            name: "value",
            optional: true,
            description: (
              <span>
                The value to use for this field when parsing a checked state.
                Unchecked checkboxes are parsed as undefined values rather than
                a false value. Default value is <Code>"on"</Code>.
              </span>
            ),
            type: "string",
          },
          {
            name: "defaultChecked",
            optional: true,
            description:
              "Control if this checkbox is checked by default or not.",
            type: "boolean",
          },
        ]}
        example={`<Field
  type="checkbox"
  name="thingy_state"
  label="Turn this thing on"
  value="list"
/>`}
      />
      <ComponentDocs
        name="checkboxes"
        description={[
          "A group of checkboxes rendered inside a labeled Fieldset. Upon submission the single value will be submitted.",
        ]}
        props={[
          {
            name: "options",
            type: "string[] | Option[]",
            description: (
              <span>
                All the options used for the checkbox values and labels. If
                array of strings passed in as options, then each value will be
                used for both the radio value and the label in the UI. Otherwise
                each option should be an object with <Code>label</Code> and{" "}
                <Code>value</Code> key/values.
              </span>
            ),
          },
          {
            name: "defaultChecked",
            optional: true,
            description: "Control which radio is checked by default.",
            type: "string",
          },
        ]}
        example={`<Field
  type="checkboxes"
  name=-"toppings"
  label="Pick your toppings:"
  options={["Lettuce","Onion","Tomato","Bacon","Pickle"]}
  defaultChecked={["Lettuce", "Tomato"]}
/>`}
      />
      <ComponentDocs
        name="color"
        description={[
          <span>
            Input for selecting 6-digit hex color values. Values are submitted
            as a string like <Code>#ff3399</Code>
          </span>,
        ]}
        props={[
          {
            name: "options",
            type: "string[] | Option[]",
            description: (
              <span>
                All the options used for the checkbox values and labels. If
                array of strings passed in as options, then each value will be
                used for both the checkbox value and the label in the UI.
                Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
          {
            name: "defaultValue",
            optional: true,
            description: "The color picked by default.",
            type: "string",
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="color"
  name=-"favorite"
  label="Pick your favorite color:"
  defaultValue="#000000"
/>`}
      />
      <ComponentDocs
        name="date"
        description={[]}
        props={[
          {
            name: "defaultValue",
            optional: true,
            description: (
              <span>
                Default value to use for the field, if any. Value is a string in{" "}
                <Code>YYYY-MM-DD</Code> format.
              </span>
            ),
            type: "string",
          },
          {
            name: "min",
            optional: true,
            description: "Optional minimum valid timestamp.",
            type: "string",
          },
          {
            name: "max",
            optional: true,
            description: "Optional maximum valid timestamp.",
            type: "string",
          },
          {
            name: "step",
            optional: true,
            description: "Optional step between valid values in days.",
            type: "number",
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="date"
  name="reminder_date"
  label="Remind me on"
  min={new Date().toISOString()}
  step={1}
/>`}
      />
      <ComponentDocs
        name="datetime-local"
        description={[]}
        props={[
          {
            name: "defaultValue",
            optional: true,
            description: (
              <span>
                Default value to use for the field, if any. Value is a string in{" "}
                <Code>YYYY-MM-DDThh:mm</Code> format.
              </span>
            ),
            type: "string",
          },
          {
            name: "min",
            optional: true,
            description: "Optional minimum valid timestamp.",
            type: "string",
          },
          {
            name: "max",
            optional: true,
            description: "Optional maximum valid timestamp.",
            type: "string",
          },
          {
            name: "step",
            optional: true,
            description:
              "Optional step between valid values in seconds. So in order to force a time selection that conforms to 15 minute increments you would use 900.",
            type: "number",
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="datetime-local"
  name="reminder_date"
  label="Remind me on"
  min={new Date().toISOString()}
  // hourly increments
  step={3600}
/>`}
      />
      <ComponentDocs
        name="email"
        description={[]}
        props={[
          {
            name: "minLength",
            description:
              "The minimum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "maxLength",
            description:
              "The maximum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "pattern",
            description:
              "Regular expression string which will be used to validate the field value.",
            type: "string",
            optional: true,
          },
          {
            name: "spellcheck",
            description:
              "If this text field should have it's spelling checked by the browser.",
            type: "boolean",
            optional: true,
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="email"
  name="email"
  label="Email address"
/>`}
      />
      <ComponentDocs
        name="file"
        description={[]}
        props={[
          {
            name: "accept",
            optional: true,
            description: "The file types and mime types that are supported.",
            type: "string",
          },
          {
            name: "multiple",
            optional: true,
            description:
              "Set if the user is picking just a single file or can pick multiple.",
            type: "boolean",
          },
        ]}
        example={`<Field
  type="file"
  name="portfolio"
  label="My portfolio"
  accept=".pdf"
/>`}
      />
      <ComponentDocs
        name="hidden"
        description={[]}
        props={[
          {
            name: "defaultValue",
            optional: true,
            description: (
              <span>
                Default value to use for the field, if any. Value is a string in{" "}
                <Code>YYYY-MM-DDThh:mm</Code> format.
              </span>
            ),
            type: "string",
          },
        ]}
        example={`<Field
  type="hidden"
  name="csrf_token"
  label=""
  defaultValue="843h34uifg3u4yf237fgwi4fuyv23df3"
/>`}
      />
      <ComponentDocs
        name="month"
        description={[]}
        props={[
          {
            name: "defaultValue",
            optional: true,
            description: (
              <span>
                Default value to use for the field, if any. Value is a string in{" "}
                <Code>YYYY-MM</Code> format.
              </span>
            ),
            type: "string",
          },
          {
            name: "min",
            optional: true,
            description: "Optional minimum valid timestamp.",
            type: "string",
          },
          {
            name: "max",
            optional: true,
            description: "Optional maximum valid timestamp.",
            type: "string",
          },
          {
            name: "step",
            optional: true,
            description: "Optional step between valid values in months.",
            type: "number",
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="month"
  name="month"
  label="Month of expected death"
  defaultValue="2050-01"
/>`}
      />
      <ComponentDocs
        name="number"
        description={[]}
        props={[
          {
            name: "defaultValue",
            optional: true,
            description: (
              <span>Default value to use for the field, if any.</span>
            ),
            type: "string",
          },
          {
            name: "min",
            optional: true,
            description: "Optional minimum valid number.",
            type: "string",
          },
          {
            name: "max",
            optional: true,
            description: "Optional maximum valid number.",
            type: "string",
          },
          {
            name: "step",
            optional: true,
            description: "Optional step between valid values.",
            type: "number",
          },
          {
            name: "options",
            type: "number[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of numbers passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="number"
  name="tip"
  label="Enter your tip amount:"
  min="0"
  max="100"
  step="0.01"
/>`}
      />
      <ComponentDocs
        name="numeric"
        description={[
          <span>
            The numeric type is useful for when you have numeric data you would
            like users to enter, but it's not incremental data or decimal
            numbers. Data like account numbers or numeric ids. Ultimately this
            field uses a text input, with the inputMode attribute set to numeric
            and a numeric pattern regex applied. See{" "}
            <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#accessibilisty">
              this from MDN
            </MdnLink>{" "}
            on what's going on here.
          </span>,
        ]}
        props={[
          {
            name: "defaultValue",
            optional: true,
            description: (
              <span>Default value to use for the field, if any.</span>
            ),
            type: "number | string",
          },
          {
            name: "pattern",
            description: (
              <span>
                Regular expression string which will be used to validate the
                field value. This will overwrite the default regex of{" "}
                <Code>[0-9]*</Code>.
              </span>
            ),
            type: "string",
            optional: true,
          },
          {
            name: "options",
            type: "number[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of numbers passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="numeric"
  name="account_id"
  label="Please enter your 10 digit account id:"
  pattern="[0-9]{10}"
/>`}
      />
      <ComponentDocs
        name="password"
        description={[]}
        props={[
          {
            name: "minLength",
            description:
              "The minimum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "maxLength",
            description:
              "The maximum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "pattern",
            description:
              "Regular expression string which will be used to validate the field value.",
            type: "string",
            optional: true,
          },
        ]}
        example={`<Field
  type="password"
  name="password"
  label="Password"
  minLength={8}
/>`}
      />
      <ComponentDocs
        name="radio"
        description={[
          "The radio option is for when you wish for the user to make a single selection from some set of options. A single radio alone is not generally used in a standalone fashion, so most cases you'll probably want to reach for the radiogroup.",
        ]}
        props={[
          {
            name: "value",
            description: (
              <span>
                The value to use for this field when parsing a checked state.
                Unchecked radios are parsed as undefined values rather than a
                false value.
              </span>
            ),
            type: "string",
          },
          {
            name: "defaultChecked",
            optional: true,
            description: "Control if this radio is checked by default or not.",
            type: "boolean",
          },
        ]}
        example={`<Field
  type="radio"
  name="payment_method"
  label="Payment method"
  value="cash"
  defaultChecked
/>`}
      />
      <ComponentDocs
        name="radiogroup"
        description={[
          "In almost every case you're going to want to have mutliple radio options to select from rather than a single radio. That's what the radiogroup is for. It's a list of radio inputs inside a labeled fieldset component.",
        ]}
        props={[
          {
            name: "options",
            type: "string[] | Option[]",
            description: (
              <span>
                All the options used for the radio values and labels. If array
                of strings passed in as options, then each value will be used
                for both the radio value and the label in the UI. Otherwise each
                option should be an object with <Code>label</Code> and{" "}
                <Code>value</Code> key/values.
              </span>
            ),
          },
          {
            name: "defaultChecked",
            optional: true,
            description:
              "Control which checkbox options are checked by default.",
            type: "string[]",
          },
        ]}
        example={`<Field
  type="radiogroup"
  name="payment_method"
  label="Payment method"
  options={[
    { value:"cash", label: "Cold hard cash" },
    { value: "credit", label: "Credit Card" },
    { value: "debit", label: "Debit Card" },
  ]}
  defaultChecked={["cash"]}
/>`}
      />
      <ComponentDocs
        name="range"
        description={[]}
        props={[
          {
            name: "min",
            description:
              "Minimum valid number for the range. User will not be able to select a value lower than this.",
            type: "number",
          },
          {
            name: "max",
            description:
              "Maximum valid number for the range. User will not be able to select a value higher than this.",
            type: "number",
          },
          {
            name: "defaultValue",
            optional: true,
            description: (
              <span>Default value to use for the field, if any.</span>
            ),
            type: "number",
          },
          {
            name: "step",
            optional: true,
            description: "Optional step between valid values.",
            type: "number",
          },
          {
            name: "options",
            type: "number[]",
            optional: true,
            description:
              "Set various stop-marks along the range which the value will snap to. Values should be within the min and max values.",
          },
        ]}
        example={`<Field
  type="range"
  name="volume"
  label="Volume level"
  min={0}
  max={100}
  step={1}
  options={[0, 25, 50, 75, 100]}
/>`}
      />
      <ComponentDocs
        name="search"
        description={[]}
        props={[
          {
            name: "minLength",
            description:
              "The minimum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "maxLength",
            description:
              "The maximum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "pattern",
            description:
              "Regular expression string which will be used to validate the field value.",
            type: "string",
            optional: true,
          },
          {
            name: "spellcheck",
            description:
              "If this text field should have it's spelling checked by the browser.",
            type: "boolean",
            optional: true,
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="search"
  name="query"
  label="What are you looking for?"
  minLength={1}
/>`}
      />
      <ComponentDocs
        name="select"
        description={[]}
        props={[
          {
            name: "options",
            description: "What options will be rendered within the select.",
            type: "string[] | Option[]",
          },
          {
            name: "defaultSelected",
            description: "Which if any options should be selected by default.",
            type: "number | string | string[] | number[]",
            optional: true,
          },
          {
            name: "multiple",
            description: "If multiple values can be selected at the same time.",
            type: "boolean",
            optional: true,
          },
        ]}
        example={`<Field
  type="select"
  name="tip"
  label="Tip amount"
  options={[
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
    { value: 25, label: "25%" },
  ]}
  defaultSelected={15}
/>`}
      />
      <ComponentDocs
        name="tel"
        description={[]}
        props={[
          {
            name: "minLength",
            description:
              "The minimum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "maxLength",
            description:
              "The maximum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "pattern",
            description:
              "Regular expression string which will be used to validate the field value.",
            type: "string",
            optional: true,
          },
          {
            name: "spellcheck",
            description:
              "If this text field should have it's spelling checked by the browser.",
            type: "boolean",
            optional: true,
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="tel"
  name="number"
  label="Enter your number to receive text notifications:"
  required
/>`}
      />
      <ComponentDocs
        name="text"
        description={[]}
        props={[
          {
            name: "minLength",
            description:
              "The minimum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "maxLength",
            description:
              "The maximum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "pattern",
            description:
              "Regular expression string which will be used to validate the field value.",
            type: "string",
            optional: true,
          },
          {
            name: "spellcheck",
            description:
              "If this text field should have it's spelling checked by the browser.",
            type: "boolean",
            optional: true,
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="text"
  name="title"
  label="Post title:"
  required
  minLength={3}
  maxLength={2048}
  spellcheck
/>`}
      />
      <ComponentDocs
        name="textarea"
        description={[]}
        props={[
          {
            name: "minRows",
            description:
              "The minimum number of rows tall this textarea should be.",
            type: "number",
            optional: true,
          },
          {
            name: "maxRows",
            description:
              "The maximum number of rows tall this textarea should be before it will begin scrolling internally.",
            type: "number",
            optional: true,
          },
          {
            name: "autosize",
            description:
              "If this textarea should auto-size itself based on the user input.",
            type: "boolean",
            optional: true,
          },
          {
            name: "spellcheck",
            description:
              "If this text field should have it's spelling checked by the browser.",
            type: "boolean",
            optional: true,
          },
        ]}
        example={`<Field
  type="textarea"
  name="body"
  label="Post content:"
  required
  spellcheck
  autosize
  minRows={5}
/>`}
      />
      <ComponentDocs
        name="time"
        description={[]}
        props={[
          {
            name: "defaultValue",
            optional: true,
            description: (
              <span>
                Default value to use for the field, if any. Value is a string in{" "}
                <Code>hh:mm</Code> format.
              </span>
            ),
            type: "string",
          },
          {
            name: "min",
            optional: true,
            description: "Optional minimum valid timestamp.",
            type: "string",
          },
          {
            name: "max",
            optional: true,
            description: "Optional maximum valid timestamp.",
            type: "string",
          },
          {
            name: "step",
            optional: true,
            description:
              "Optional step between valid values in seconds. So in order to force a time selection that conforms to 15 minute increments you would use 900.",
            type: "number",
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="time"
  name="start_time"
  label="Meeting begins at:"
  // bind to 15 minute increments
  step={900}
/>`}
      />
      <ComponentDocs
        name="url"
        description={[]}
        props={[
          {
            name: "minLength",
            description:
              "The minimum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "maxLength",
            description:
              "The maximum number of characters required for a valid value.",
            type: "number",
            optional: true,
          },
          {
            name: "pattern",
            description:
              "Regular expression string which will be used to validate the field value.",
            type: "string",
            optional: true,
          },
          {
            name: "spellcheck",
            description:
              "If this text field should have it's spelling checked by the browser.",
            type: "boolean",
            optional: true,
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="url"
  name="website_link"
  label="Website link"
/>`}
      />
      <ComponentDocs
        name="week"
        description={[]}
        props={[
          {
            name: "defaultValue",
            optional: true,
            description: (
              <span>
                Default value to use for the field, if any. Value is a string in{" "}
                <Code>YYYY-Www</Code> format.
              </span>
            ),
            type: "string",
          },
          {
            name: "min",
            optional: true,
            description: "Optional minimum valid timestamp.",
            type: "string",
          },
          {
            name: "max",
            optional: true,
            description: "Optional maximum valid timestamp.",
            type: "string",
          },
          {
            name: "step",
            optional: true,
            description:
              "Optional step between valid values in weeks. So in order to force a time selection that conforms to 15 minute increments you would use 900.",
            type: "number",
          },
          {
            name: "options",
            type: "string[] | Option[]",
            optional: true,
            description: (
              <span>
                Optional list of options to be presented to the user as a{" "}
                <MdnLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist">
                  datalist
                </MdnLink>{" "}
                of suggestions. If array of strings passed in as options, then
                each value will be used for both the checkbox value and the
                label in the UI. Otherwise each option should be an object with{" "}
                <Code>label</Code> and <Code>value</Code> key/values.
              </span>
            ),
          },
        ]}
        example={`<Field
  type="week"
  name="favorite_week"
  label="Week to receive delivery:"
/>`}
      />

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

      <Header level={4} name="setFormFieldValue" />
      <Paragraph>
        This function is the uncurried version provided by the form validators
        that allows for setting the current value of any named input within a
        given form.
      </Paragraph>
      <Paragraph>
        <b>Signature:</b>{" "}
        <Code>
          {
            "setFormFieldValue(form: HTMLFormElement, name: string, value: FieldValue): void"
          }
        </Code>
      </Paragraph>
      <Paragraph>
        <b>Arguments:</b> An html form element, the name of the field and the
        value to set. Field with name must exist within the form or else an
        error will be thrown.
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
