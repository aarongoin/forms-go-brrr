import React from "react";
import { render } from "react-dom";
import { Form, Field } from "../index";
import {
  CodeBlock,
  Column,
  DocLinks,
  Header,
  Paragraph,
  StickyColumnPair,
  PageWrapper,
  CodeDemo,
} from "./components";
import { API, apiLinks } from "./pages/API";
import { Concepts, conceptsLinks } from "./pages/Concepts";
import { Examples, exampleLinks } from "./pages/Examples";
import { GettingStarted, gettingStartedLinks } from "./pages/GettingStarted";

type ExampleFormValues = {
  text_field: string;
  text_area: string;
};

function ExampleApp() {
  return (
    <PageWrapper>
      <DocLinks
        links={[
          ...gettingStartedLinks,
          ...conceptsLinks,
          ...apiLinks,
          ...exampleLinks
        ]}
      />
      <Column space={4}>
        <Header level={1} name="forms-go-brrr" />
        <GettingStarted />
        <Concepts />
        <API />
        <Examples />
      </Column>
    </PageWrapper>
  );
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Missing root element!");
render(<ExampleApp />, rootElement);
