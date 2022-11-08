import React from "react";
import { Submit } from "../../components";
import {
  CodeBlock,
  Column,
  Header,
  Paragraph,
  StickyColumnPair,
  CodeDemo,
} from "../components";
import { VEDemoForm, VEDemoField, VEDemoButton } from "./VinallaExtractDemo";
import { CssDemoForm, CssDemoField, CssDemoButton, cssStyles } from "./CssDemo";

export const exampleLinks = [
  "Examples",
  [
    "Custom field styles",
    ["Vanilla-extract", "Native CSS" /*, "Material-UI"*/],
    // "Complex validation",
    // "Dynamic fields",
  ],
];

const VESimpleLoginForm = React.memo((props) => (
  <VEDemoForm {...props}>
    <VEDemoField
      required
      type="email"
      name="email"
      label="Email"
      placeholder="myname@mymail.com"
      validateOnChange
    />
    <VEDemoField
      required
      type="password"
      name="password"
      label="Password"
      validateOnChange
      minLength={8}
    />
    <VEDemoButton>Login</VEDemoButton>
  </VEDemoForm>
));

const CssSimpleLoginForm = React.memo((props) => (
  <CssDemoForm {...props}>
    <CssDemoField
      required
      type="email"
      name="email"
      label="Email"
      placeholder="myname@mymail.com"
      validateOnChange
    />
    <CssDemoField
      required
      type="password"
      name="password"
      label="Password"
      validateOnChange
      minLength={8}
    />
    <CssDemoButton>Login</CssDemoButton>
  </CssDemoForm>
));

export function Examples({ className }: { className?: string | undefined }) {
  return (
    <Column space={2} className={className}>
      <Header level={2} name="Examples" />
      <Paragraph>
        Here are some example forms showing off various capabilities and uses of
        the library.
      </Paragraph>
      <Header level={3} name="Custom field styles" />
      <Paragraph>
      Here are some examples of how you might style a simple form-go-brrr form
      using various styling solutions. Feel free to copy this code!
      </Paragraph>
      <Header level={4} name="Vanilla-extract" />
      <StickyColumnPair
        left={
          <CodeBlock>{`import { styleVariants, style } from "@vanilla-extract/css";

export const codeDemoWrapperStyle = style({
  borderRadius: 8,
  "@media": {
    "(prefers-color-scheme: dark)": { backgroundColor: "#111" },
    "(prefers-color-scheme: light)": { backgroundColor: "#333" },
  },
});

export const logsWrapperStyle = style({
  padding: 16,
  paddingTop: 24,
  borderRadius: 8,
  margin: 0,
  fontSize: "14px",
  boxSizing: "border-box",
  border: "solid 1px #ffffff33",
  overflowX: "scroll",
  maxWidth: "calc(min(100vw, 50rem) - 32px)",
  maxHeight: "240px",
  overflowY: "scroll",
});

export const formWrapperStyle = style({
  borderRadius: 8,
  margin: "-12px 0 -12px 0",
  backgroundColor: "white",
  color: "black",
  padding: 16,
});

export const logLineStyle = style({
  display: "block",
  lineHeight: "24px",
  color: "#eee",
});`}</CodeBlock>
        }
        right={
          <CodeDemo
            code={`import {
  formStyle,
  fieldStyle,
  inputStyle,
  submitButtonStyle,
} from "./ExampleStyles.css;

<Form submitJson={onSubmit} className={formStyle}>
  <Field
    required
    type="email"
    name="email"
    label="Email"
    placeholder="myname@mymail.com"
    validate="onBlur"
    className={fieldStyle}
    inputClassName={inputStyle}
  />
  <Field
    required
    type="password"
    name="password"
    label="Password"
    validate="onBlur"
    className={fieldStyle}
    inputClassName={inputStyle}
  />
  <Submit className={submitButtonStyle}>Login</Submit>
</Form>`}
            Form={VESimpleLoginForm}
          />
        }
      />

      <Header level={4} name="Native CSS" />
      <StickyColumnPair
        left={<CodeBlock>{cssStyles}</CodeBlock>}
        right={
          <CodeDemo
            code={`<Form submitJson={onSubmit}>
  <Field
    required
    type="email"
    name="email"
    label="Email"
    placeholder="myname@mymail.com"
    validate="onBlur"
  />
  <Field
    required
    type="password"
    name="password"
    label="Password"
    validate="onBlur"
  />
  <Submit>Login</Submit>
</Form>`}
            Form={CssSimpleLoginForm}
          />
        }
      />
    </Column>
  );
}
