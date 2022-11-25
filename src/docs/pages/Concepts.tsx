import React from "react";
import {
  Code,
  CodeBlock,
  Column,
  DocLink,
  Header,
  MdnLink,
  Paragraph,
  StickyColumnPair,
} from "../components";

export const conceptsLinks = [
  "Concepts",
  [
    "Form Basics",
    "Data Submission",
    ["Submitting form data", "Native submit fallback"],
    "Validation",
    [
      "Native DOM validation",
      "Custom field validation",
      "Multi-field validation",
      "Form effects",
      "Error messages",
    ],
    "Styling fields",
  ],
];

export function Concepts({ className }: { className?: string | undefined }) {
  return (
    <Column space={2} className={className}>
      <Header level={2} name="Concepts" />

      <Header level={3} name="Form Basics" />
      <Paragraph>
        The backbone of every web application is the form. You want to accept
        normalized inputs from your users, and submit these values painless to
        your server, or manipulate easily in JavaScript. Forms-go-brrr does its
        best to follow native HTML form conventions so that you can build forms
        with progressive enhancement in mind.
      </Paragraph>
      <Paragraph>
        The form is really a composition of several components: the Form, the
        Field(s), and the Submit button. The Form component generally wraps all
        the fields within the form, and which governs how the data will be
        submitted. Inside your Form, you'll have one or more normalized or
        freeform Field components for your user to enter data, and upon which
        you can have more specific validation rules to help your users fill
        things out correctly. Finally you'll typically have a Submit button in
        your form which will trigger a final validation, and if all is valid:
        submit the values just as you've specified.
      </Paragraph>
      <Header level={3} name="Data Submission" />
      <Paragraph>
        HTML forms submit data all at once when the form fields are valid, and
        the user triggers the submit event--usually clicking a submit button.
        Depending on some of the attributes set on the form element the form
        values will be submitted via HTTP to an url specified with the form
        values submitted as FormData or query parameters in the request url. You
        can read more about this from these MDN docs about{" "}
        <MdnLink href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data">
          sending and retreiving form data
        </MdnLink>
        .
      </Paragraph>
      <Header level={4} name="Submitting form data" />
      <Paragraph>
        Forms-go-brrr provides two submit methods for you to use based on your
        preference for how you wish to consume and work with the form values.
        Whichever you decide to use, upon submission of valid form values, the
        values will be parsed from the form state and submitted to your submit
        method to do with as you see fit.
      </Paragraph>
      <Header level={4} name="Native submit fallback" />
      <Paragraph>
        If your forms are operating in environments without Javacript you can
        still leverage all the native form attributes to govern how the form
        values should be submitted to your server. Submissions that happen this
        way will necessarily lack any higher validation beyond what the browser
        client provides, and will typically include a full navigation event with
        page refresh.
      </Paragraph>

      <Header level={3} name="Validation" />
      <Paragraph>
        Validating form inputs is a vital part of forms, and part of what gives
        software such tremendous power over paper forms. Validation can be run
        at the field level, on change, on blur, and can be run at the form level
        to reference multiple values for more complex validation. Validation
        will never prevent the user from entering a value, but it will always
        block the user from submitting a form with any invalid values.
      </Paragraph>
      <Header level={4} name="Native DOM validation" />
      <Paragraph>
        Validation is built right on top of the native{" "}
        <MdnLink href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation">
          form validation
        </MdnLink>
        . If you're rendering to a static, potentially JavaScript-less context
        then this is the only validation available which isn't perfect, but is
        better than nothing.
      </Paragraph>
      <Header level={4} name="Custom field validation" />
      <Paragraph>
        Every field accepts a validation function which you can use to
        accomplish your specific validation above what the native form provides.
        The validation function is passed the current field value at time of
        exectution and can return an error string to display.
      </Paragraph>
      <Paragraph>
        Field level can be run on field change (which for text fields means
        every key stroke), or on blur. Additionally, field-level validation is
        run every time a form submission is attempted.
      </Paragraph>
      <Header level={4} name="Multi-field validation" />
      <Paragraph>
        Sometimes our forms are more complicated, and single field validation
        alone is not enough to validate a whole form. Sometimes we need to look
        at multiple field values in order to validate any one of them.
        Additionally we might want to be smart, perform calculations, to set or
        wipe out one fields value when others change.
      </Paragraph>
      <Paragraph>
        Forms-go-brrr was built with such use cases in mind, and supports this
        higher-level validation via validation set on the Form component.
        Sometimes it can be convenient to access the previous values of a form,
        usually to assess exactly what changed and be smart based on that, but
        forms-go-brrr does not provide this for you. Effects in forms-go-brrr
        should be written more declaratively, such that computed values are
        deterministically calculated via the form state. If you need the
        previous state in order to accomplish your desired effect, you'll need
        to manage this state yourself.
      </Paragraph>
      <Header level={4} name="Error messages" />
      <Paragraph>
        Forms-go-brrr has baked in support for displaying a hint or error
        message for every field. Your custom validators can set the error
        string, otherwise for native form validation forms-go-brrr has a set of{" "}
        <DocLink name="Default error messages" /> corresponding to the failing
        validation attribute. These messages can be customized however you like.
      </Paragraph>
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
          <Column space={2}>
            <Paragraph>
              Native css styles that target forms-go-brrr elements using their{" "}
              <Code>[data-fgb=*]</Code> attributes.
            </Paragraph>
          </Column>
        }
        right={
          <CodeBlock highlight={[0, 4]}>{`[data-fgb=label], [data-fgb=hint] {
  display: block;
}

[data-fgb=input]:invalid ~ [data-fgb=hint] {
  color: red;
}`}</CodeBlock>
        }
      />
      <Header level={4} name="CSS classes" />
      <StickyColumnPair
        left={
          <Column space={2}>
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
          <Column space={2}>
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
      <Header level={4} name="Styling limitations" />
      <Paragraph>
        While there's no styles declared in the library, there is an implicit
        style, and an explicit heirarchy of elements. As you use and style
        forms-go-brrr you might find there's certain kinds of styling that's
        made more difficult by the imposed structure of elements in the Field
        component.
      </Paragraph>
      <Paragraph>
        If you find the imposed structure of the elements impedes your work you
        can leverage all the individual components, such as the Input, Label,
        etc. and compose them yourself.
      </Paragraph>
    </Column>
  );
}
