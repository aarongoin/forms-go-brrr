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

// src/components/Checkboxes.tsx
import * as React5 from "react";

// src/components/Fieldset.tsx
import * as React2 from "react";
function Fieldset({
  name,
  label,
  disabled,
  children,
  className,
  hint,
  hintClassName
}) {
  const hintId = `${name}-hint`;
  return /* @__PURE__ */ React2.createElement("fieldset", {
    disabled,
    className: "df-Fieldset".concat(className ? " " : "", className || "")
  }, /* @__PURE__ */ React2.createElement("legend", null, label), children, /* @__PURE__ */ React2.createElement("span", {
    id: hintId,
    className: "df-Fieldset-hint".concat(
      hintClassName ? " " : "",
      hintClassName || ""
    ),
    "aria-live": "polite"
  }, hint));
}

// src/components/Input.tsx
import * as React3 from "react";
function Input(props) {
  return /* @__PURE__ */ React3.createElement("input", __spreadProps(__spreadValues({
    tabindex: 0,
    "aria-describedby": `${props.name}-hint`
  }, props), {
    className: "df-Input".concat(
      props.className ? " " : "",
      props.className || ""
    )
  }));
}

// src/components/Label.tsx
import * as React4 from "react";
function Label({
  label,
  name,
  children,
  hint,
  className,
  textClassName,
  hintClassName
}) {
  const hintId = `${name}-hint`;
  return /* @__PURE__ */ React4.createElement("label", {
    htmlFor: name,
    className: "df-Label".concat(className ? " " : "", className || "")
  }, typeof label === "string" ? /* @__PURE__ */ React4.createElement("span", {
    className: "df-Label-text".concat(
      textClassName ? " " : "",
      textClassName || ""
    )
  }, label) : label, children, /* @__PURE__ */ React4.createElement("span", {
    id: hintId,
    className: "df-Label-hint".concat(
      hintClassName ? " " : "",
      hintClassName || ""
    ),
    "aria-live": "polite"
  }, hint));
}
function InlineLabel({
  label,
  children,
  className
}) {
  return /* @__PURE__ */ React4.createElement("label", {
    className: "df-Label".concat(className ? " " : "", className || "")
  }, children, label);
}

// src/components/Checkboxes.tsx
function Checkboxes(_a) {
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
  return /* @__PURE__ */ React5.createElement(Fieldset, __spreadValues({
    label,
    name
  }, props), options.map((opt) => /* @__PURE__ */ React5.createElement(InlineLabel, {
    label: typeof opt === "string" ? opt : opt.name
  }, /* @__PURE__ */ React5.createElement(Input, {
    key: typeof opt === "string" ? opt : opt.id,
    type: "checkbox",
    name,
    value: typeof opt === "string" ? opt : String(opt.id),
    "data-group": name,
    defaultChecked: defaultChecked ? defaultChecked.some(
      typeof opt === "string" ? (e) => e === opt : (e) => e === opt.id
    ) : false
  }))));
}

// src/components/Field.tsx
import * as React8 from "react";

// src/components/RadioGroup.tsx
import * as React6 from "react";
function RadioGroup(_a) {
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
  return /* @__PURE__ */ React6.createElement(Fieldset, __spreadValues({
    label,
    name
  }, props), options.map((opt) => /* @__PURE__ */ React6.createElement(InlineLabel, {
    label: typeof opt === "string" ? opt : opt.name
  }, /* @__PURE__ */ React6.createElement(Input, {
    key: typeof opt === "string" ? opt : opt.id,
    type: "radio",
    name,
    value: typeof opt === "string" ? opt : String(opt.id),
    "data-group": name,
    defaultChecked: !!defaultChecked && defaultChecked === (typeof opt === "string" ? opt : opt.id)
  }))));
}

// src/components/Select.tsx
import * as React7 from "react";
function Select(_a) {
  var _b = _a, {
    options,
    type,
    defaultSelected,
    name,
    renderOption,
    className,
    optionClassName
  } = _b, props = __objRest(_b, [
    "options",
    "type",
    "defaultSelected",
    "name",
    "renderOption",
    "className",
    "optionClassName"
  ]);
  const finalOptionClassName = "df-Select-option".concat(
    optionClassName ? " " : "",
    optionClassName || ""
  );
  return /* @__PURE__ */ React7.createElement("select", __spreadProps(__spreadValues({
    name,
    tabindex: 0,
    "aria-describedby": `${name}-hint`
  }, props), {
    className: "df-Select".concat(className ? " " : "", className || "")
  }), options.map((opt) => /* @__PURE__ */ React7.createElement("option", {
    key: typeof opt === "string" ? opt : opt.id,
    value: typeof opt === "string" ? opt : opt.id,
    className: finalOptionClassName,
    defaultChecked: !!defaultSelected && (props.multiple && Array.isArray(defaultSelected) ? defaultSelected.some(
      typeof opt === "string" ? (e) => e === opt : (e) => e === opt.id
    ) : defaultSelected === (typeof opt === "string" ? opt : opt.id))
  }, renderOption ? renderOption(opt) : typeof opt === "string" ? opt : opt.name)));
}

// src/components/Textarea.tsx
function Textarea(_a) {
  var _b = _a, {
    type,
    minRows = 3,
    autosize,
    className
  } = _b, props = __objRest(_b, [
    "type",
    "minRows",
    "autosize",
    "className"
  ]);
  return /* @__PURE__ */ React.createElement("textarea", __spreadProps(__spreadValues({}, props), {
    onInput: autosize ? (event) => {
      const el = event.target;
      setTimeout(() => {
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
      }, 0);
    } : void 0,
    className: "df-Textarea".concat(className ? " " : "", className || ""),
    rows: minRows
  }));
}

// src/components/Field.tsx
var inlineFieldTypes = ["radio", "checkbox"];
function Field(props) {
  if (props.type === "checkboxes") {
    return /* @__PURE__ */ React8.createElement(Checkboxes, __spreadValues({}, props));
  }
  if (props.type === "radiogroup") {
    return /* @__PURE__ */ React8.createElement(RadioGroup, __spreadValues({}, props));
  }
  const _a = props, { label, hint, className, inputClassName } = _a, inputProps = __objRest(_a, ["label", "hint", "className", "inputClassName"]);
  const LabelCmp = inlineFieldTypes.includes(props.type) ? InlineLabel : Label;
  return /* @__PURE__ */ React8.createElement(LabelCmp, {
    label,
    name: inputProps.name,
    hint,
    className
  }, props.type === "select" ? /* @__PURE__ */ React8.createElement(Select, __spreadProps(__spreadValues({}, props), {
    className: inputClassName
  })) : props.type === "textarea" ? /* @__PURE__ */ React8.createElement(Textarea, __spreadProps(__spreadValues({}, props), {
    className: inputClassName
  })) : /* @__PURE__ */ React8.createElement(Input, __spreadProps(__spreadValues({}, props), {
    className: inputClassName
  })));
}

// src/components/Form.tsx
import * as React9 from "react";

// src/core/types.ts
function isInputElement(el) {
  return el.tagName === "INPUT";
}
function isSelectElement(el) {
  return el.tagName === "SELECT";
}
function isTextareaElement(el) {
  return el.tagName === "TEXTAREA";
}

// src/core/getFieldValue.ts
function getFieldValue(form, name) {
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
    if (el.type === "checkbox" && el.dataset.group !== el.name)
      return el.checked;
    if (el.type === "radio")
      return el.checked;
    return el.value;
  }
  if (isTextareaElement(el)) {
    return el.value;
  }
  return null;
}

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
          if (input.dataset.group !== input.name)
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

// src/core/setFieldError.ts
function setFieldError(form, name, error) {
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  const el = "length" in elOrEls && elOrEls.length ? elOrEls.item(0) : elOrEls;
  el.setCustomValidity(error);
  const hint = el.closest(`.${name}-hint`);
  if (hint)
    hint.textContent = error;
}

// src/core/setFieldValue.ts
function setFieldValue(form, name, value) {
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
    if (el.type === "checkbox" && el.dataset.group !== el.name) {
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

// src/components/Form.tsx
function Form(_a) {
  var _b = _a, {
    dialog,
    method = "post",
    action,
    submitFormData,
    submitJson,
    onChange,
    onBlur,
    className
  } = _b, props = __objRest(_b, [
    "dialog",
    "method",
    "action",
    "submitFormData",
    "submitJson",
    "onChange",
    "onBlur",
    "className"
  ]);
  if (!submitFormData && !submitJson)
    throw new Error(
      "Must supply a submit method prop of either `submitFormData` or `submitJson`."
    );
  const smartProps = {};
  if (onChange)
    smartProps["onChange"] = (event) => {
      const form = event.target.form;
      const formErrors = onChange(
        (name) => getFieldValue(form, name),
        (name, value) => setFieldValue(form, name, value)
      );
      if (formErrors)
        for (const name of Object.keys(formErrors))
          setFieldError(form, name, formErrors[name]);
    };
  if (onBlur)
    smartProps["onBlur"] = (event) => {
      const form = event.target.form;
      const formErrors = onBlur(
        (name) => getFieldValue(form, name),
        (name, value) => setFieldValue(form, name, value)
      );
      if (formErrors)
        for (const name of Object.keys(formErrors))
          setFieldError(form, name, formErrors[name]);
    };
  return /* @__PURE__ */ React9.createElement("form", __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, props), {
    className: "df-Form".concat(className ? " " : "", className || ""),
    noValidate: typeof window !== "undefined",
    method: dialog ? "dialog" : method,
    action
  }), smartProps), {
    onSubmit: (event) => {
      const form = event.target;
      if (!dialog)
        event.preventDefault();
      if (form.reportValidity()) {
        (submitFormData ? submitFormData(getFormValuesAsFormData(form)) : submitJson(getFormValuesAsJson(form))).then((formErrors) => {
          if (!formErrors)
            return;
          for (const name of Object.keys(formErrors))
            setFieldError(form, name, formErrors[name]);
        });
      }
    }
  }));
}

// src/core/errorMessages.ts
var errorMessages = {
  badinput: "Value is invalid.",
  required: "This field is required.",
  minlength: "Text is too short.",
  maxlength: "Text is too long.",
  pattern: "Value is invalid.",
  min: "Value is too low.",
  max: "Value is high.",
  step: "Value is invalid.",
  email: "Value is invalid.",
  url: "Value is invalid."
};
function setErrorMessages(errs) {
  errorMessages = __spreadValues(__spreadValues({}, errorMessages), errs);
}
function getErrorMessage(input) {
  if (input.validity.badInput)
    return errorMessages.badinput;
  if (input.validity.valueMissing)
    return errorMessages.required;
  if (isSelectElement(input))
    return "";
  if (input.validity.tooShort)
    return errorMessages.minlength;
  if (input.validity.tooLong)
    return errorMessages.maxlength;
  if (isTextareaElement(input))
    return "";
  if (input.validity.patternMismatch)
    return errorMessages.pattern;
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

// src/core/withValidation.tsx
import * as React10 from "react";
function withValidation(onEvent) {
  return (Cmp, validators) => {
    const validatorList = Array.isArray(validators) ? validators : [validators];
    return function Validated(props) {
      return /* @__PURE__ */ React10.createElement(Cmp, __spreadValues(__spreadValues({}, props), {
        [onEvent]: (event) => {
          var _a;
          const input = event.target;
          let error = !input.checkValidity() ? getErrorMessage(input) : "";
          if (!error) {
            const value = getFieldValue(input.form, input.name);
            for (const validator of validatorList) {
              error = validator(value);
              if (error)
                break;
            }
          }
          input.setCustomValidity(error);
          const hint = input.closest(`.${input.name}-hint`);
          if (hint)
            hint.textContent = error;
          return (_a = props[onEvent]) == null ? void 0 : _a.call(props, event);
        }
      }));
    };
  };
}
var withValidationOnChange = withValidation("onChange");
var withValidationOnBlur = withValidation("onBlur");
export {
  Checkboxes,
  Field,
  Fieldset,
  Form,
  InlineLabel,
  Input,
  Label,
  RadioGroup,
  Select,
  Textarea,
  getErrorMessage,
  getFieldValue,
  getFormValuesAsFormData,
  getFormValuesAsJson,
  isInputElement,
  isSelectElement,
  isTextareaElement,
  setErrorMessages,
  setFieldValue,
  withValidation,
  withValidationOnBlur,
  withValidationOnChange
};
