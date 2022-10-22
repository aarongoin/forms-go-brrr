"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Checkboxes: () => Checkboxes,
  Field: () => Field,
  Fieldset: () => Fieldset,
  Form: () => Form,
  InlineLabel: () => InlineLabel,
  Input: () => Input,
  Label: () => Label,
  RadioGroup: () => RadioGroup,
  Select: () => Select,
  Textarea: () => Textarea,
  getErrorMessage: () => getErrorMessage,
  getFieldValue: () => getFieldValue,
  getFormValuesAsFormData: () => getFormValuesAsFormData,
  getFormValuesAsJson: () => getFormValuesAsJson,
  isInputElement: () => isInputElement,
  isSelectElement: () => isSelectElement,
  isTextareaElement: () => isTextareaElement,
  setErrorMessages: () => setErrorMessages,
  setFieldValue: () => setFieldValue,
  withValidation: () => withValidation,
  withValidationOnBlur: () => withValidationOnBlur,
  withValidationOnChange: () => withValidationOnChange,
  wrapWithValiation: () => wrapWithValiation
});
module.exports = __toCommonJS(src_exports);

// src/components/Checkboxes.tsx
var React4 = __toESM(require("react"));

// src/components/Fieldset.tsx
var React = __toESM(require("react"));
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
  return /* @__PURE__ */ React.createElement("fieldset", {
    disabled,
    className: "df-Fieldset".concat(className ? " " : "", className || "")
  }, /* @__PURE__ */ React.createElement("legend", null, label), children, /* @__PURE__ */ React.createElement("span", {
    id: hintId,
    className: "df-Fieldset-hint".concat(
      hintClassName ? " " : "",
      hintClassName || ""
    ),
    "aria-live": "polite"
  }, hint));
}

// src/components/Input.tsx
var React2 = __toESM(require("react"));
function Input(props) {
  return /* @__PURE__ */ React2.createElement("input", __spreadProps(__spreadValues({
    tabIndex: 0,
    "aria-describedby": `${props.name}-hint`
  }, props), {
    className: "df-Input".concat(
      props.className ? " " : "",
      props.className || ""
    )
  }));
}

// src/components/Label.tsx
var React3 = __toESM(require("react"));
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
  return /* @__PURE__ */ React3.createElement("label", {
    htmlFor: name,
    className: "df-Label".concat(className ? " " : "", className || "")
  }, typeof label === "string" ? /* @__PURE__ */ React3.createElement("span", {
    className: "df-Label-text".concat(
      textClassName ? " " : "",
      textClassName || ""
    )
  }, label) : label, children, /* @__PURE__ */ React3.createElement("span", {
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
  return /* @__PURE__ */ React3.createElement("label", {
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
  return /* @__PURE__ */ React4.createElement(Fieldset, __spreadValues({
    label,
    name
  }, props), options.map((opt) => /* @__PURE__ */ React4.createElement(InlineLabel, {
    label: typeof opt === "string" ? opt : opt.name
  }, /* @__PURE__ */ React4.createElement(Input, {
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
var React9 = __toESM(require("react"));

// src/components/RadioGroup.tsx
var React5 = __toESM(require("react"));
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
  return /* @__PURE__ */ React5.createElement(Fieldset, __spreadValues({
    label,
    name
  }, props), options.map((opt) => /* @__PURE__ */ React5.createElement(InlineLabel, {
    label: typeof opt === "string" ? opt : opt.name
  }, /* @__PURE__ */ React5.createElement(Input, {
    key: typeof opt === "string" ? opt : opt.id,
    type: "radio",
    name,
    value: typeof opt === "string" ? opt : String(opt.id),
    "data-group": name,
    defaultChecked: !!defaultChecked && defaultChecked === (typeof opt === "string" ? opt : opt.id)
  }))));
}

// src/components/Select.tsx
var React6 = __toESM(require("react"));
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
  return /* @__PURE__ */ React6.createElement("select", __spreadProps(__spreadValues({
    name,
    tabIndex: 0,
    "aria-describedby": `${name}-hint`
  }, props), {
    className: "df-Select".concat(className ? " " : "", className || "")
  }), options.map((opt) => /* @__PURE__ */ React6.createElement("option", {
    key: typeof opt === "string" ? opt : opt.id,
    value: typeof opt === "string" ? opt : opt.id,
    className: finalOptionClassName,
    defaultChecked: !!defaultSelected && (props.multiple && Array.isArray(defaultSelected) ? defaultSelected.some(
      typeof opt === "string" ? (e) => e === opt : (e) => e === opt.id
    ) : defaultSelected === (typeof opt === "string" ? opt : opt.id))
  }, renderOption ? renderOption(opt) : typeof opt === "string" ? opt : opt.name)));
}

// src/components/Textarea.tsx
var React7 = __toESM(require("react"));
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
  return /* @__PURE__ */ React7.createElement("textarea", __spreadProps(__spreadValues({}, props), {
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

// src/core/errorMessages.ts
var errorMessages = {
  badInput: "Value is invalid.",
  required: "This field is required.",
  minLength: "Text is too short.",
  maxLength: "Text is too long.",
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
  throw new Error(
    `Unexpected element found in field name ${name}. Found ${el.tagName}`
  );
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

// src/core/withValidation.tsx
var React8 = __toESM(require("react"));
function withValidation(onEvent) {
  return (Cmp, validators) => {
    const validatorList = Array.isArray(validators) ? validators : [validators];
    return function Validated(_a) {
      var _b = _a, {
        validators: _validators
      } = _b, props = __objRest(_b, [
        "validators"
      ]);
      return /* @__PURE__ */ React8.createElement(Cmp, __spreadValues(__spreadValues({}, props), wrapWithValiation(
        onEvent,
        _validators ? validatorList.concat(_validators) : validatorList,
        props[onEvent]
      )));
    };
  };
}
function wrapWithValiation(onEvent, validators, outerHandler) {
  const validateInput = (input) => {
    var _a;
    let error = !input.validity.valid ? getErrorMessage(input) : "";
    if (!error) {
      const value = getFieldValue(input.form, input.name);
      for (const validator of validators) {
        error = validator(value);
        if (error)
          break;
      }
    }
    input.setCustomValidity(error);
    const hint = (_a = input.closest(".df-Label, .df-Fieldset")) == null ? void 0 : _a.querySelector(`#${input.name}-hint`);
    if (hint)
      hint.textContent = error;
    return !!error;
  };
  return {
    [onEvent]: (event) => {
      validateInput(event.target);
      return outerHandler == null ? void 0 : outerHandler(event);
    },
    onInvalid: (event) => {
      if (validateInput(event.target))
        event.preventDefault();
    }
  };
}
var withValidationOnChange = withValidation("onChange");
var withValidationOnBlur = withValidation("onBlur");

// src/components/Field.tsx
var inlineFieldTypes = ["radio", "checkbox"];
function Field(props) {
  const validationProps = props.validate ? wrapWithValiation(props.validate, props.validators || [], props[props.validate]) : null;
  if (props.type === "checkboxes") {
    return /* @__PURE__ */ React9.createElement(Checkboxes, __spreadValues(__spreadValues({}, props), validationProps));
  }
  if (props.type === "radiogroup") {
    return /* @__PURE__ */ React9.createElement(RadioGroup, __spreadValues(__spreadValues({}, props), validationProps));
  }
  const _a = props, { label, hint, className, inputClassName } = _a, inputProps = __objRest(_a, ["label", "hint", "className", "inputClassName"]);
  const LabelCmp = inlineFieldTypes.includes(props.type) ? InlineLabel : Label;
  return /* @__PURE__ */ React9.createElement(LabelCmp, {
    label,
    name: inputProps.name,
    hint,
    className
  }, props.type === "select" ? /* @__PURE__ */ React9.createElement(Select, __spreadValues(__spreadProps(__spreadValues({}, props), {
    className: inputClassName
  }), validationProps)) : props.type === "textarea" ? /* @__PURE__ */ React9.createElement(Textarea, __spreadValues(__spreadProps(__spreadValues({}, props), {
    className: inputClassName
  }), validationProps)) : /* @__PURE__ */ React9.createElement(Input, __spreadValues(__spreadProps(__spreadValues({}, props), {
    className: inputClassName
  }), validationProps)));
}

// src/components/Form.tsx
var React10 = __toESM(require("react"));

// src/core/setFieldError.ts
function setFieldError(form, name, error) {
  var _a;
  const elOrEls = form.elements.namedItem(name);
  if (!elOrEls)
    throw new Error(`Cannot find field with name ${name}`);
  const el = "length" in elOrEls && elOrEls.length ? elOrEls.item(0) : elOrEls;
  el.setCustomValidity(error);
  const hint = (_a = el.closest(".df-Label, .df-Fieldset")) == null ? void 0 : _a.querySelector(`#${el.name}-hint`);
  if (hint)
    hint.textContent = error;
}

// src/core/validateForm.ts
function validateForm(form, validator) {
  let is_valid = true;
  for (const input of Array.from(form.elements))
    if (!input.dispatchEvent(new Event("invalid", { cancelable: true })))
      is_valid = false;
  if (!validator)
    return is_valid;
  const formErrors = validator(
    (name) => getFieldValue(form, name),
    (name, value) => setFieldValue(form, name, value)
  );
  if (formErrors) {
    is_valid = false;
    for (const name of Object.keys(formErrors))
      setFieldError(form, name, formErrors[name]);
  }
  return is_valid;
}

// src/components/Form.tsx
function Form(_a) {
  var _b = _a, {
    dialog,
    method = "post",
    action,
    submitFormData,
    submitJson,
    validate,
    validator,
    className
  } = _b, props = __objRest(_b, [
    "dialog",
    "method",
    "action",
    "submitFormData",
    "submitJson",
    "validate",
    "validator",
    "className"
  ]);
  if (!submitFormData && !submitJson)
    throw new Error(
      "Must supply a submit method prop of either `submitFormData` or `submitJson`."
    );
  const smartProps = {};
  if (validate == null ? void 0 : validate.startsWith("onChange"))
    smartProps["onChange"] = (event) => {
      const form = event.target.form;
      const formErrors = validator(
        (name) => getFieldValue(form, name),
        (name, value) => setFieldValue(form, name, value)
      );
      console.log("Form onchange!", { formErrors });
      if (formErrors)
        for (const name of Object.keys(formErrors))
          setFieldError(form, name, formErrors[name]);
    };
  if (validate == null ? void 0 : validate.startsWith("onBlur"))
    smartProps["onBlur"] = (event) => {
      const form = event.target.form;
      const formErrors = validator(
        (name) => getFieldValue(form, name),
        (name, value) => setFieldValue(form, name, value)
      );
      if (formErrors)
        for (const name of Object.keys(formErrors))
          setFieldError(form, name, formErrors[name]);
    };
  return /* @__PURE__ */ React10.createElement("form", __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, props), {
    className: "df-Form".concat(className ? " " : "", className || ""),
    noValidate: typeof window !== void 0,
    method: dialog ? "dialog" : method,
    action
  }), smartProps), {
    onSubmit: (event) => {
      const form = event.target;
      event.preventDefault();
      if (validateForm(
        form,
        (validate == null ? void 0 : validate.endsWith("Submit")) && validator || void 0
      )) {
        const submit = submitFormData ? submitFormData(getFormValuesAsFormData(form)) : submitJson(getFormValuesAsJson(form));
        (submit && submit instanceof Promise ? submit : Promise.resolve(submit)).then((formErrors) => {
          if (!formErrors)
            return;
          for (const name of Object.keys(formErrors))
            setFieldError(form, name, formErrors[name]);
        });
      }
    }
  }));
}
