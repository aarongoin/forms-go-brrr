import React from "react";
import { Submit } from "../../components";
import {
  CodeBlock,
  Code,
  Column,
  Header,
  Paragraph,
  StickyColumnPair,
  DocLink,
  CodeDemo,
} from "../components";
import { DemoForm, DemoField } from "./Demo";

export const exampleLinks = [
  "Examples",
  [
    "Simple login form",
    "All field types",
    "Complex validation",
    "Dynamic fields",
  ],
];

const SimpleLoginForm = React.memo((props) => (
  <DemoForm {...props}>
    <DemoField
      required
      type="email"
      name="email"
      label="Email"
      placeholder="myname@mymail.com"
      validate="onChange"
    />
    <DemoField required type="password" name="password" label="Password" validate="onChange" minLength={8} />
    <Submit>Login</Submit>
  </DemoForm>
));

export function Examples({ className }: { className?: string | undefined }) {
  return (
    <Column space={2} className={className}>
      <Header level={2} name="Examples" />
      <Paragraph>
        Here are some example forms showing off various capabilities and uses of
        the library.
      </Paragraph>

      <Header level={3} name="Simple login form" />
      <StickyColumnPair
        left={
          <Column space={2}>
            <Paragraph>
              Here's how you might use forms-go-brrr to build a simple login
              form.
            </Paragraph>
            <Paragraph>Link to open in code sandbox?</Paragraph>
          </Column>
        }
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
  <button type="submit">Login</button>
</Form>`}
            Form={SimpleLoginForm}
          />
        }
      />

      <Header level={3} name="All field types" />
      <StickyColumnPair
        left={
          <Column space={2}>
            <Paragraph>
              Description of what this example is doing/all about
            </Paragraph>
            <Paragraph>Link to open in code sandbox?</Paragraph>
          </Column>
        }
        right={null}
      />

      <Header level={3} name="Complex validation" />
      <StickyColumnPair
        left={
          <Column space={2}>
            <Paragraph>
              Description of what this example is doing/all about
            </Paragraph>
            <Paragraph>Link to open in code sandbox?</Paragraph>
          </Column>
        }
        right={<CodeBlock>npm install --save forms-go-brrr</CodeBlock>}
      />

      <Header level={3} name="Dynamic fields" />
      <StickyColumnPair
        left={
          <Column space={2}>
            <Paragraph>
              Description of what this example is doing/all about
            </Paragraph>
            <Paragraph>Link to open in code sandbox?</Paragraph>
          </Column>
        }
        right={<CodeBlock>npm install --save forms-go-brrr</CodeBlock>}
      />
    </Column>
  );
}
