import React from "react";
import { render } from "react-dom";
import { Form, Field } from "../index";

function ExampleApp() {
  return (
    <Form
      submitJson={(v) => console.log(v)}
      validate="onChangeOrSubmit"
      validator={(getValue, setValue) => {
        const a = getValue("text_field");
        const b = getValue("text_area");
        return {
          text_area: a.length > b.length ? "Too short!" : "",
        };
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Field
          label="Text field"
          name="text_field"
          type="text"
          defaultValue="Text field"
          required
          minLength={5}
          maxLength={10}
          validate="onChange"
        />
        <Field
          label="Textarea field"
          name="text_area"
          type="textarea"
          autosize
          required
          validate="onChange"
        />
        <Field
          label="Custom field"
          name="custom"
          type="text"
          validate="onChange"
          validators={[(v) => (v !== "foo" ? "This field is in error!" : "")]}
        />
        <button type="submit">Submit test form</button>
      </div>
    </Form>
  );
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Missing root element!");
render(<ExampleApp />, rootElement);
