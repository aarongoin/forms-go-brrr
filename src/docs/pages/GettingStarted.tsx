import React from "react";
import {
  CodeBlock,
  Code,
  Column,
  Header,
  Paragraph,
  StickyColumnPair,
  DocLink,
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
    <Column space={2} className={className}>
      <Header level={2} name="Getting started" />
      <Paragraph>
        Follow these instructions to get forms-go-brrr setup in your project.
      </Paragraph>
      <Header level={3} name="Install the library" />
      <StickyColumnPair
        left={
          <Column space={2}>
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
        components in the library use the default browser styling. If you're
        just trying to get moving fast, you can view some premade styles.
      </Paragraph>
      <Paragraph>
        If you want to style things custom you have all the same tools you'd get
        from styling in React: the <Code>className</Code> and <Code>style</Code>{" "}
        props, as well as some empty forms-go-brrr class names for use in css
        selectors. You can view the specifics of this in the{" "}
        <DocLink name="Styling fields" /> documentation.
      </Paragraph>
      <Header level={3} name="Build a form" />
      <Paragraph>
        Forms-go-brrr is a thin wrapper around the native DOM Form and various
        form elements. All form input fields (all types of Inputs, the Select,
        and the Textarea) are available using the singular Field component
        interface which uses the <Code>type</Code> prop to determine the
        resulting element.
      </Paragraph>
      <Paragraph>
        You'll primarily want to reach for the <Code>{"<Form />"}</Code> and{" "}
        <Code>{"<Field />"}</Code> components or your custom wrappers around
        these two components. These two components are considered as the core
        interface by which this library is used. A great deal of the interal
        components and utils have been written to be consumed in the library's
        public api, but these are not intended as the primary avenues of use.
      </Paragraph>
    </Column>
  );
}
