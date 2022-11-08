import React from "react";
import { render } from "react-dom";
import {
  Column,
  DocLinks,
  Header,
  PageWrapper,
} from "./components";
import { API, apiLinks } from "./pages/API";
import { Concepts, conceptsLinks } from "./pages/Concepts";
import { Examples, exampleLinks } from "./pages/Examples";
import { GettingStarted, gettingStartedLinks } from "./pages/GettingStarted";
import { Introduction, introductionLinks } from "./pages/Introduction";

function ExampleApp() {
  return (
    <PageWrapper>
      <DocLinks
        links={[
          ...introductionLinks,
          ...gettingStartedLinks,
          ...conceptsLinks,
          ...apiLinks,
          ...exampleLinks
        ]}
      />
      <Column space={4}>
        <Header level={1} name="forms-go-brrr" />
        <Introduction />
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
