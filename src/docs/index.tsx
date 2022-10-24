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
import { BasicConcepts, basicConceptLinks } from "./pages/BasicConcepts";

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
          ...basicConceptLinks,
          ...apiLinks
        ]}
      />
      <Column>
        <Header level={1} name="forms-go-brrr" />
        <GettingStarted />
        <BasicConcepts />
        <API />
      </Column>
    </PageWrapper>
  );
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Missing root element!");
render(<ExampleApp />, rootElement);
