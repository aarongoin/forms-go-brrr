import React from "react";
import {
  CodeBlock,
  Code,
  Column,
  Header,
  Paragraph,
  StickyColumnPair,
} from "../components";

export const gettingStartedLinks = [
  "Getting started",
  ["Install the library", "Pick your styles", "Build a form"],
];

export function GettingStarted({
  className,
}: {
  className?: string | undefined;
}) {
  return (
    <Column className={className}>
      <Header level={2} name="Getting started" />
      <Paragraph>
        Follow these instructions to get forms-go-brrr setup in your project.
      </Paragraph>
      <Header level={3} name="Install the library" />
      <StickyColumnPair
        left={
          <Column>
            <Paragraph>
              Forms-go-brrr is hosted on npm, so you can use npm or any
              npm-compatible package manager to install it.
            </Paragraph>
          </Column>
        }
        right={<CodeBlock>npm install --save forms-go-brrr</CodeBlock>}
      />
      <Header level={3} name="Pick your styles" />
      <Paragraph>
        Forms-go-brrr imparts no styling of its own, so all form and field
        components in the library use the default browser styling. So before you
        dive into serious use within your app you may want to work out your
        field styles.
      </Paragraph>
      <Paragraph>
        If you're just trying to get moving fast, you can view some premade
        styles. If you want to style things custom you have all the same tools
        you'd get from styling in React: the <Code>className</Code> and{" "}
        <Code>style</Code> props, as well as some empty forms-go-brrr class names
        for use in css selectors. You can view the specifics of this in the
        Styling fields documentation.
      </Paragraph>
      <Header level={3} name="Build a form" />
      <Paragraph>
        Forms-go-brrr is a thin wrapper around the native DOM Form and various
        form elements. All form input fields (all types of Inputs, the Select,
        and the Textarea) are available using the singular Field component
        interface which uses the <Code>type</Code> prop to determine the
        resulting element.
      </Paragraph>
    </Column>
  );
}