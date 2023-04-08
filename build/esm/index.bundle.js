var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/Field.tsx
import * as React6 from "react";

// src/components/Input.tsx
import * as React from "react";
function Input(_a) {
  var _b = _a, {
    type,
    options
  } = _b, props = __objRest(_b, [
    "type",
    "options"
  ]);
  const input = /* @__PURE__ */ React.createElement("input", __spreadProps(__spreadValues(__spreadValues({
    tabIndex: 0
  }, type === "numeric" ? {
    type: "text",
    inputMode: "numeric",
    pattern: "[0-9]*"
  } : { type }), props), {
    "aria-describedby": `${props.name}-hint`,
    "data-fgb": "input",
    list: Array.isArray(options) && options.length ? `${props.name}-options` : void 0
  }));
  return Array.isArray(options) && options.length ? /* @__PURE__ */ React.createElement(React.Fragment, null, input, /* @__PURE__ */ React.createElement("datalist", {
    id: `${props.name}-options`
  }, options.map(
    (o) => typeof o === "object" ? /* @__PURE__ */ React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label) : /* @__PURE__ */ React.createElement("option", {
      key: o,
      value: o
    }, o)
  ))) : input;
}

// src/components/Group.tsx
import * as React3 from "react";

// src/components/Fieldset.tsx
import * as React2 from "react";
function Fieldset(_a) {
  var _b = _a, {
    name,
    label,
    children,
    hint,
    hintClassName,
    labelClassName,
    group,
    labelStyle,
    hintStyle
  } = _b, props = __objRest(_b, [
    "name",
    "label",
    "children",
    "hint",
    "hintClassName",
    "labelClassName",
    "group",
    "labelStyle",
    "hintStyle"
  ]);
  const hintId = `${name}-hint`;
  return /* @__PURE__ */ React2.createElement("fieldset", __spreadValues({
    "data-fgb": "fieldset"
  }, props), /* @__PURE__ */ React2.createElement("span", {
    id: hintId,
    "data-fgb": "hint",
    className: hintClassName,
    "aria-live": "polite",
    "data-fgb-hint": hint,
    style: __spreadValues({ order: 2 }, hintStyle)
  }, hint), group ? /* @__PURE__ */ React2.createElement("legend", {
    "data-fgb": "label",
    className: labelClassName,
    style: labelStyle
  }, label) : /* @__PURE__ */ React2.createElement("label", {
    htmlFor: name,
    "data-fgb": "label",
    className: labelClassName,
    style: labelStyle
  }, label), children);
}

// src/components/Group.tsx
function Group(_a) {
  var _b = _a, {
    type,
    name,
    options,
    label,
    defaultChecked
  } = _b, props = __objRest(_b, [
    "type",
    "name",
    "options",
    "label",
    "defaultChecked"
  ]);
  return options.map((opt) => {
    const { value, label: label2 } = typeof opt === "object" ? opt : { label: opt, value: opt };
    const id = `${name}-${value}`;
    return /* @__PURE__ */ React3.createElement(Fieldset, {
      name: id,
      label: label2,
      key: value
    }, /* @__PURE__ */ React3.createElement(Input, __spreadProps(__spreadValues({}, props), {
      type: type.startsWith("c") ? "checkbox" : "radio",
      name,
      id,
      value: String(value),
      "data-fgb-group": name,
      defaultChecked: Array.isArray(defaultChecked) ? defaultChecked.some((e) => e === value) : defaultChecked === value
    })));
  });
}

// src/components/Select.tsx
import * as React4 from "react";
function Select(_a) {
  var _b = _a, {
    options,
    type,
    defaultSelected,
    name
  } = _b, props = __objRest(_b, [
    "options",
    "type",
    "defaultSelected",
    "name"
  ]);
  return /* @__PURE__ */ React4.createElement("select", __spreadProps(__spreadValues({
    name,
    tabIndex: 0,
    "aria-describedby": `${name}-hint`
  }, props), {
    "data-fgb": "input"
  }), options.map((opt) => {
    const { value, label } = typeof opt === "object" ? opt : { label: opt, value: opt };
    return /* @__PURE__ */ React4.createElement("option", {
      key: value,
      value,
      defaultChecked: !!defaultSelected && (props.multiple && Array.isArray(defaultSelected) ? defaultSelected.some((e) => e == value) : defaultSelected == value)
    }, label);
  }));
}

// src/components/Textarea.tsx
import * as React5 from "react";
function Textarea(_a) {
  var _b = _a, {
    type,
    minRows = 3,
    autosize
  } = _b, props = __objRest(_b, [
    "type",
    "minRows",
    "autosize"
  ]);
  return /* @__PURE__ */ React5.createElement("textarea", __spreadProps(__spreadValues({}, props), {
    onInput: autosize ? (event) => {
      const el = event.target;
      setTimeout(() => {
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
      }, 0);
    } : void 0,
    "data-fgb": "input",
    rows: minRows
  }));
}

// src/core/types.ts
function isFormElement(el) {
  return el.tagName === "FORM";
}
function isInputElement(el) {
  return el.tagName === "INPUT";
}
function isSelectElement(el) {
  return el.tagName === "SELECT";
}
function isTextareaElement(el) {
  return el.tagName === "TEXTAREA";
}

// src/core/errorMessages.ts
var errorMessages = {
  badInput: "Malformed input.",
  required: "Required.",
  minLength: "Too short.",
  maxLength: "Too long.",
  pattern: "Invalid value.",
  min: "Too low.",
  max: "Too high.",
  step: "Off-step.",
  email: "Invalid email address.",
  url: "Invalid url."
};
function setDefaultErrorMessages(errs) {
  errorMessages = __spreadValues(__spreadValues({}, errorMessages), errs);
}
function getErrorMessage(input) {
  if (input.validity.badInput)
    return errorMessages.badInput;
  if (input.validity.valueMissing)
    return errorMessages.required;
  if (isSelectElement(input))
    return "";
  if (input.validity.tooShort)
    return errorMessages.minLength;
  if (input.validity.tooLong)
    return errorMessages.maxLength;
  if (isTextareaElement(input))
    return "";
  if (input.validity.patternMismatch)
    return input.title || errorMessages.pattern;
  if (input.validity.rangeUnderflow)
    return errorMessages.min;
  if (input.validity.rangeOverflow)
    return errorMessages.max;
  if (input.validity.stepMismatch)
    return errorMessages.step;
  if (input.validity.typeMismatch) {
    if (input.type === "email")
      return errorMessages.email;
    if (input.type === "url")
      return errorMessages.url;
  }
  return "";
}

// src/core/getFormFieldValue.ts
function getFormFieldValue(form, name) {
  var _a;
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  if ("length" in elOrEls && elOrEls.length) {
    const els = Array.from(elOrEls);
    if (els[0].type === "radio")
      return (_a = Array.from(els).find((e) => e.checked)) == null ? void 0 : _a.value;
    if (els[0].type === "checkbox")
      return Array.from(els).map((e) => e.checked ? e.value : null).filter(Boolean);
    throw new Error(
      `Unexpected collection found in field name ${name}. Found type of ${els[0].type}`
    );
  }
  const el = elOrEls;
  if (isSelectElement(el)) {
    if (el.multiple)
      return Array.from(el.selectedOptions).map((opt) => opt.value);
    return el.value;
  }
  if (isInputElement(el)) {
    if (el.type === "file")
      return el.files;
    if (el.type === "email" && el.multiple)
      return el.value.split(/\s*,\s*/);
    if (el.type === "checkbox" && el.dataset.fgbGroup !== el.name)
      return el.checked;
    if (el.type === "radio")
      return el.checked;
    return el.value;
  }
  if (isTextareaElement(el)) {
    return el.value;
  }
  throw new Error(
    `Unexpected element found in field name ${name}. Found ${el.tagName}`
  );
}

// src/core/getFieldHintElement.ts
function getFieldHintElement(el, errorOnly = true) {
  var _a;
  const hint = (_a = el.closest("[data-fgb='fieldset']")) == null ? void 0 : _a.querySelector(
    `#${el.name}-hint${errorOnly ? "[data-fgb='error']" : ""}`
  );
  return hint || null;
}

// src/core/setFormFieldError.ts
function setFormFieldError(form, name, error) {
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  const el = "length" in elOrEls && elOrEls.length ? elOrEls.item(0) : elOrEls;
  el.setCustomValidity(error);
  const hint = getFieldHintElement(el, false);
  if (hint) {
    hint.dataset.fgb = error ? "error" : "hint";
    hint.textContent = error || hint.dataset.fgbHint || "";
  }
}

// src/core/wrapWithFieldValidation.ts
function wrapWithFieldValidation(onEvent, validator, outerHandler) {
  const validateInput = (input) => {
    let error = !input.validity.valid ? getErrorMessage(input) : "";
    const value = getFormFieldValue(input.form, input.name);
    error = (validator == null ? void 0 : validator(value)) || error;
    setFormFieldError(input.form, input.name, error);
    return !!error;
  };
  return {
    [onEvent]: (event) => {
      setTimeout(validateInput, onEvent === "onChange" ? 0 : 120, event.target);
      return outerHandler == null ? void 0 : outerHandler(event);
    },
    onInvalid: (event) => {
      if (validateInput(event.target))
        event.preventDefault();
    }
  };
}

// src/components/Field.tsx
function Field(props) {
  const validationProps = wrapWithFieldValidation(
    props.validateOnChange ? "onChange" : "onBlur",
    typeof props.validateOnChange === "function" ? props.validateOnChange : typeof props.validateOnBlur === "function" ? props.validateOnBlur : void 0,
    props[props.validateOnChange ? "onChange" : "onBlur"]
  );
  const _a = props, {
    label,
    hint,
    className,
    style,
    hintClassName,
    hintStyle,
    labelClassName,
    labelStyle,
    inputClassName,
    inputStyle,
    inputLabelClassName,
    inputLabelStyle,
    name,
    type = "text"
  } = _a, inputProps = __objRest(_a, [
    "label",
    "hint",
    "className",
    "style",
    "hintClassName",
    "hintStyle",
    "labelClassName",
    "labelStyle",
    "inputClassName",
    "inputStyle",
    "inputLabelClassName",
    "inputLabelStyle",
    "name",
    "type"
  ]);
  return /* @__PURE__ */ React6.createElement(Fieldset, {
    label,
    name,
    hint,
    className,
    style,
    hintStyle,
    hintClassName,
    labelStyle,
    labelClassName,
    "data-fgb-type": type,
    group: type === "radios" || type === "checkboxes"
  }, type === "select" ? /* @__PURE__ */ React6.createElement(Select, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    name,
    className: inputClassName,
    style: inputStyle
  })) : type === "textarea" ? /* @__PURE__ */ React6.createElement(Textarea, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    name,
    className: inputClassName,
    style: inputStyle
  })) : type === "checkboxes" || type === "radios" ? /* @__PURE__ */ React6.createElement(Group, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    type,
    name,
    className: inputLabelClassName,
    style: inputLabelStyle,
    inputClassName,
    inputStyle
  })) : /* @__PURE__ */ React6.createElement(Input, __spreadProps(__spreadValues(__spreadValues({}, inputProps), validationProps), {
    name,
    type,
    className: inputClassName,
    style: inputStyle
  })));
}

// src/components/Form.tsx
import * as React7 from "react";

// src/core/getFormValues.ts
var getFormValuesAsFormData = (form) => new FormData(form);
function setKV(res, k, v) {
  if (!res[k]) {
    res[k] = v;
  } else {
    if (!Array.isArray(res[k]))
      res[k] = [res[k]];
    res[k].push(v);
  }
}
var getFormValuesAsJson = (form) => {
  const result = {};
  for (const input of Array.from(form.elements)) {
    if (isInputElement(input)) {
      switch (input.type) {
        case "number":
        case "range":
          setKV(result, input.name, +input.value);
          continue;
        case "radio":
          if (!input.checked && !result[input.name])
            setKV(result, input.name, null);
          if (input.checked)
            setKV(result, input.name, input.value);
          continue;
        case "checkbox":
          if (input.dataset.fgbGroup !== input.name)
            setKV(result, input.name, !!input.checked);
          else if (!input.checked && !result[input.name])
            setKV(result, input.name, []);
          else if (input.checked)
            setKV(result, input.name, input.value);
          continue;
        case "email":
          if (input.multiple)
            setKV(result, input.name, input.value.split(/\s*,\s*/));
          else
            setKV(result, input.name, input.value);
          continue;
        case "file":
          setKV(result, input.name, input.files);
        default:
          setKV(result, input.name, input.value);
          continue;
      }
    }
    if (isSelectElement(input)) {
      if (input.multiple)
        setKV(
          result,
          input.name,
          Array.from(input.selectedOptions).map((opt) => opt.value)
        );
      else
        setKV(result, input.name, input.value);
    }
    if (isTextareaElement(input))
      setKV(result, input.name, input.value);
  }
  return result;
};

// src/core/setFormFieldValue.ts
function setFormFieldValue(form, name, value) {
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  if ("length" in elOrEls && elOrEls.length) {
    const els = Array.from(elOrEls);
    if (els[0].type === "radio") {
      els.forEach((el2) => {
        el2.checked = el2.value === value;
      });
      return;
    }
    if (els[0].type === "checkbox") {
      els.forEach(
        Array.isArray(value) ? (el2) => {
          el2.checked = value.includes(el2.value);
        } : (el2) => {
          el2.checked = el2.value === value;
        }
      );
      return;
    }
    throw new Error(
      `Unexpected collection found in field name ${name}. Found type of ${els[0].type}`
    );
  }
  const el = elOrEls;
  if (isSelectElement(el)) {
    if (el.multiple) {
      Array.from(el.selectedOptions).forEach(
        Array.isArray(value) ? (el2) => {
          el2.selected = value.includes(el2.value);
        } : (el2) => {
          el2.selected = el2.value === value;
        }
      );
      return;
    }
    el.value = `${value}`;
    return;
  }
  if (isInputElement(el)) {
    if (el.type === "email" && el.multiple && Array.isArray(value)) {
      el.value = value.join(",");
      return;
    }
    if (el.type === "checkbox" && el.dataset.fgbGroup !== el.name) {
      el.checked = !!value;
      return;
    }
    if (el.type === "radio") {
      el.checked = !!value;
      return;
    }
    el.value = `${value}`;
    return;
  }
  if (isTextareaElement(el)) {
    el.value = `${value}`;
    return;
  }
  throw new Error(
    `Unexpected element found in field name ${name}. Found type of ${el.type}`
  );
}

// src/core/validateForm.ts
function validateForm(form, validator) {
  let form_valid = true;
  const formErrors = validator == null ? void 0 : validator(
    (name) => getFormFieldValue(form, name),
    (name, value) => setFormFieldValue(form, name, value)
  );
  for (const el of Array.from(form.elements)) {
    if (!("name" in el) || !el.name)
      continue;
    const err = (formErrors == null ? void 0 : formErrors[el.name]) || "";
    let is_valid = el.dispatchEvent(new Event("invalid", { cancelable: true })) && !err;
    if (is_valid || err)
      setFormFieldError(form, el.name, err);
    if (!is_valid)
      form_valid = false;
  }
  return form_valid;
}

// src/core/validationEffectHandler.ts
function validationEffectHandler(validator, onEvent) {
  return (event) => {
    const form = isFormElement(event.target) ? event.target : "form" in event.target ? event.target.form : null;
    if (!form)
      throw new Error(
        "Expected to find a form element attached to wrapped event target."
      );
    const formErrors = validator(
      (name) => getFormFieldValue(form, name),
      (name, value) => setFormFieldValue(form, name, value)
    );
    if (formErrors)
      for (const name of Object.keys(formErrors))
        setFormFieldError(
          form,
          name,
          formErrors[name]
        );
    return onEvent == null ? void 0 : onEvent(event);
  };
}

// src/components/Form.tsx
function Form(_a) {
  var _b = _a, {
    dialog,
    method = "post",
    action,
    submitFormData,
    submitJson,
    validateOnBlur,
    validateOnChange,
    autoComplete = false
  } = _b, props = __objRest(_b, [
    "dialog",
    "method",
    "action",
    "submitFormData",
    "submitJson",
    "validateOnBlur",
    "validateOnChange",
    "autoComplete"
  ]);
  if (!submitFormData && !submitJson)
    throw new Error(
      "Must supply a submit method prop of either `submitFormData` or `submitJson`."
    );
  return /* @__PURE__ */ React7.createElement("form", __spreadProps(__spreadValues({}, props), {
    "data-fgb": "form",
    noValidate: typeof window !== void 0,
    autoComplete: autoComplete ? "on" : "off",
    method: dialog ? "dialog" : method,
    action,
    onChange: validateOnChange ? validationEffectHandler(
      validateOnChange,
      props.onChange
    ) : void 0,
    onBlur: validateOnBlur ? validationEffectHandler(
      validateOnBlur,
      props.onBlur
    ) : void 0,
    onSubmit: (event) => {
      const form = event.target;
      event.preventDefault();
      if (validateForm(form, validateOnChange || validateOnBlur || void 0)) {
        const submit = submitFormData ? submitFormData(getFormValuesAsFormData(form)) : submitJson(getFormValuesAsJson(form));
        (submit && submit instanceof Promise ? submit : Promise.resolve(submit)).then((formErrors) => {
          if (!formErrors)
            return;
          for (const name of Object.keys(formErrors))
            setFormFieldError(
              form,
              name,
              formErrors[name]
            );
        });
      }
    }
  }));
}

// src/components/Submit.tsx
import * as React8 from "react";

// src/core/getFormIsValid.ts
function getFormIsValid(form) {
  var _a;
  for (const el of Array.from(form.elements)) {
    if (!("name" in el) || !el.name)
      continue;
    if (!el.validity.valid || ((_a = getFieldHintElement(el)) == null ? void 0 : _a.textContent))
      return false;
  }
  return true;
}

// src/components/Submit.tsx
function Submit(_a) {
  var _b = _a, {
    validate
  } = _b, props = __objRest(_b, [
    "validate"
  ]);
  return /* @__PURE__ */ React8.createElement("button", __spreadProps(__spreadValues({}, props), {
    type: "submit",
    ref: (el) => {
      if (el && el.form) {
        el.disabled = !getFormIsValid(el.form);
        el.form.addEventListener(
          validate === "onChange" ? "input" : "change",
          (event) => {
            setTimeout(() => {
              el.disabled = !getFormIsValid(el.form);
            }, validate === "onChange" ? 1 : 121);
          }
        );
      }
    }
  }));
}
export {
  Field,
  Fieldset,
  Form,
  Submit,
  getErrorMessage,
  getFormFieldValue,
  getFormValuesAsFormData,
  getFormValuesAsJson,
  isFormElement,
  isInputElement,
  isSelectElement,
  isTextareaElement,
  setDefaultErrorMessages,
  setFormFieldValue
};
