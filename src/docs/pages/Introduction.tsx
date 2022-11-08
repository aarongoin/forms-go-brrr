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

export const introductionLinks = ["Introduction"];

export function Introduction({
  className,
}: {
  className?: string | undefined;
}) {
  return (
    <Column space={2} className={className}>
      <Header level={2} name="Introduction" />
      <Paragraph>
        Forms-go-brrr is a React.js library for building performant, accessible,
        and web-friendly forms.
      </Paragraph>
      <Paragraph>
        Form state lives in the DOM, where your users put it! That's right,
        uncontrolled forms! But don't let that scare you. Your form data is
        still ultimately controlled by the Native DOM. React functions only to
        render the initial state and setup validation and change handlers. Form
        use and validation do not require React rerender which means your forms
        will be as fast as possible on every client.
      </Paragraph>
      <Paragraph>
        Forms and validation degrade gracefully for clients that fail to
        download the JavaScript payload or who choose not to run JavaScript in
        their browser.
      </Paragraph>
      <Paragraph>
        It comes out of the box with support for accessible, labeled form fields
        with hints and error text, and unifies the various form elements into a
        single Field interface, built with web best practices, and using native,
        semantic elements.
      </Paragraph>
    </Column>
  );
}
