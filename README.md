# forms-go-brrr
[![license](https://img.shields.io/github/license/aarongoin/forms-go-brrr)](https://github.com/aarongoin/forms-go-brrr/blob/main/LICENSE)
![minified](https://img.shields.io/github/size/aarongoin/forms-go-brrr/build/esm/index.bundle.min.js?label=minified)
![gzipped](https://img.shields.io/github/size/aarongoin/forms-go-brrr/build/esm/index.bundle.min.js.gz?label=gzipped)
[![npm](https://img.shields.io/npm/v/forms-go-brrr)](https://npmjs.com/package/forms-go-brrr)
[![issues](https://img.shields.io/github/issues/aarongoin/forms-go-brrr)](https://github.com/aarongoin/forms-go-brrr/issues)

![Use the DOM. Forms go brrr.](./docs/forms-go-brrr.png)


Work in progress lib for managing form state in the DOM. Use at your own risk.

Embrace uncontrolled forms and inputs in React. It really doesn't get any faster than this.

---

## Table of Contents

1. [Getting Started](#Getting-Started)
2. [Basic Use](#Basic-Use)
3. [Documentation](#Documentation)
4. [Contributing](#Contributing)
5. [License](#License)

---

## Getting Started

Follow these instructions to get forms-go-brrr setup in your project.

### 1. Install the library

```
npm install --save forms-go-brrr
```

### 2. Style your form fields

We impose no styling of our own, so all form and field components in the library use the default browser styling which very likely does not match your brand or taste. 

You can style the form and field components using:

#### A. Native CSS targeting `.fgb-*` class names on all elements
```css

.fgb-Label-text, .fgb-Label-hint {
  display: block;
}

.fgb-Input:invalid ~ .fgb-Label-hint {
  color: red;
}

```

#### B. CSS classes via `className` prop
```javascript
<Field
  ...
  className="my-label-style"
  inputClassName="my-label-style"
/>
```

#### C. Inline styles via `style` prop
```javascript
<Field
  ...
  style={{ color: "#ff0033" }}
  inputStyle={{ color: "black", padding: "2rem" }}
/>
```


### 3. Build your forms

#### Basic Use

```javascript
import { Form, Field } from "forms-go-brrr";

export function MyForm() {
  return (
    <Form
      // You can define method and action to fallback to native DOM forms.
      // The submittal will lack any custom, client-side javascript validation,
      // but native validation will still occur so things degrade gracefully.
      // But if the client is running javascript then any custom logic will be executed.
      method="post"
      action="api/auth/login/"
      submitJson={values => myApi.post("api/auth/login/", JSON.stringify(values))}
    >
      <Field
        type="email"
        required
        minLength={5}
        maxLength={256}
        label="Email address"
        name="email"
        placeholder="foo@bar.com"
      />
      <Field
        type="password"
        required
        minLength={5}
        maxLength={256}
        label="Password"
        name="password"
        validate="onBlur"
        validator={value => {
          if (value.includes("123")) return "This is a terrible password. Pick a better one.";
          if (value.includes("secret")) return "This is probably not as secret as you think...";
        }}
      />
      <button type="submit">Login</button>
    </Form>
  )
}

```

---

## Documentation

Documentation and live examples can be found on our github page: ...

#

---

## License

MIT License

Copyright (c) 2022 Aaron Goin, All rights reserved.
