# forms-go-brrr
[![npm](https://img.shields.io/npm/v/forms-go-brrr)](https://npmjs.com/package/forms-go-brrr)
[![npm](https://img.shields.io/github/size/aarongoin/forms-go-brrr/build/esm/index.bundle.min.js.gz)](https://npm.com/forms-go-brrr)
[![license](https://img.shields.io/github/license/aarongoin/forms-go-brrr)](https://github.com/aarongoin/forms-go-brrr/blob/main/LICENSE)
[![issues](https://img.shields.io/github/issues/aarongoin/forms-go-brrr)](https://github.com/aarongoin/forms-go-brrr/issues)

![Use the DOM. Forms go brrr.](./docs/forms-go-brrr.png)

#

Work in progress lib for managing form state in the DOM. Use at your own risk.

Embrace uncontrolled forms and inputs in React. They're lighting fast, and incredibly robust.

`npm install forms-go-brrr`

---

## Table of Contents

1. [Getting Started](#Getting-Started)
2. [Documentation](#Documentation)
3. [Contributing](#Contributing)
4. [License](#License)

---

## Getting Started

Follow these instructions to get forms-go-brrr setup in your project.

#

### Installing

First you'll need to install forms-go-brrr with npm:

```
npm install forms-go-brrr
```

Or if you prefer yarn:

```
yarn install forms-go-brrr
```

That's it. Nice work! ✋You've successfully installed forms-go-brrr.

#

### Basic Use

```javascript
import { Form, Field } from "forms-go-brr";

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
          if (!value.includes("secret")) return "This is probably not as secret as you think...";
        }}
      />
      <button type="submit">Login</button>
    </Form>
  )
}

```

## Documentation

Documentation and live examples can be found on our github page: ...

#

---

## License

MIT License

Copyright (c) 2022 Aaron Goin, All rights reserved.
