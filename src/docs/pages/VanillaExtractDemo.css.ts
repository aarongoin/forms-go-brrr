import {style} from "@vanilla-extract/css";

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
});

export const fieldStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  border: 0,
  selectors: {
    [`${formStyle} > &:not(:first-child)`]: {
      marginTop: "16px"
    },
      [`&:focus-within`]: {
        color: "#00a9d8",
        transition: "color 150ms ease-in",
      },
      [`&:invalid:not(:focus-within):has(span[data-fgb=error]:not(:empty))`]: {
        color: "red",
        transition: "color 150ms ease-in",
      }
  }
});

export const inputStyle = style({
  border: 0,
  borderRadius: "2px",
  outline: `solid 1px #77cce6`,
  ":focus-within": {
    outline: `solid 2px #00a9d8`,
    transition: "all 150ms ease-in",
  },
  selectors: {
    "&:hover:not(:focus-within)": {
      outline: `solid 1px #00a9d8`,
      transition: "all 150ms ease-in",
    },
    [`${fieldStyle}:invalid:not(:focus-within):has([data-fgb=error]:not(:empty)) &`]: {
      outline: `solid 2px red`,
      transition: "all 150ms",
    },
  },
})

export const submitButtonStyle = style({
  selectors: {
    [`${formStyle} > &:not(:first-child)`]: {
      marginTop: "16px"
    }
  }
});