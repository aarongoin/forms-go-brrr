import React from "react";
import {
  Code,
  CodeBlock,
  Column,
  Header,
  Paragraph,
  StickyColumnPair,
} from "../components";

export const basicConceptLinks = [
  "Basic concepts",
  [
    "Native DOM forms",
    "Native DOM validation",
    "Custom field validation",
    "Multi-field validation",
    "Form effects",
    "Submitting form data",
    "Native submit fallback",
    "Error messages",
    "Styling fields"
  ],
];

export function BasicConcepts({
  className,
}: {
  className?: string | undefined;
}) {
  return (
    <Column className={className}>
      <Header level={2} name="Basic concepts" />
      <Header level={3} name="Native DOM forms" />
      <Header level={3} name="Native DOM validation" />
      <Header level={3} name="Custom field validation" />
      <Header level={3} name="Multi-field validation" />
      <Header level={3} name="Form effects" />
      <Header level={3} name="Submitting form data" />
      <Header level={3} name="Native submit fallback" />
      <Header level={3} name="Error messages" />
      <Header level={3} name="Styling fields" />
      <Paragraph>
        We impose no styling of our own, so all form and field components in the
        library use the default browser styling which very likely does not match
        your brand or taste.
      </Paragraph>
      <Paragraph>You can style the form and field components using:</Paragraph>
      <Header level={4} name="Native CSS" />
      <StickyColumnPair
        left={
          <Column>
            <Paragraph>
              Native css styles that target forms-go-brrr elements using their{" "}
              <Code>.fgb-*</Code> class names.
            </Paragraph>
          </Column>
        }
        right={
          <CodeBlock highlight={[0, 4]}>{`.fgb-Label-text, .fgb-Label-hint {
  display: block;
}

.fgb-Input:invalid ~ .fgb-Label-hint {
  color: red;
}`}</CodeBlock>
        }
      />
      <Header level={4} name="CSS classes" />
      <StickyColumnPair
        left={
          <Column>
            <Paragraph>
              All components accept the <Code>className</Code> prop. In cases
              where the component is composed of nested elements, additional
              props are exposed to allow passing classNames down to them.
            </Paragraph>
          </Column>
        }
        right={
          <CodeBlock highlight={[4, 5]}>{`<Field
  type="text"
  label="My field"
  name="my_field"
  className="my-label-style"
  inputClassName="my-label-style"
/>`}</CodeBlock>
        }
      />
      <Header level={4} name="Inline styles" />
      <StickyColumnPair
        left={
          <Column>
            <Paragraph>
              All components accept the <Code>style</Code> prop. In cases where
              the component is composed of nested elements, additional props are
              exposed to allow passing styles down to them.
            </Paragraph>
          </Column>
        }
        right={
          <CodeBlock highlight={[4, 5]}>{`<Field
  type="text"
  label="My field"
  name="my_field"
  style={{ color: "#ff0033" }}
  inputStyle={{ color: "black", padding: "2rem" }}
/>`}</CodeBlock>
        }
      />
    </Column>
  );
}
