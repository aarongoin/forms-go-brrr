import { styleVariants, style } from "@vanilla-extract/css";

const fontFamily =
  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

export const headerStyle = style({
  fontFamily,
  fontWeight: 700,
  color: "#ce0745",
  margin: "0 0 0 16px",
  paddingTop: "8px",
  borderTop: "solid 1px #999",
});

export const headerLevelStyle = styleVariants({
  h1: { fontSize: "56px" },
  h2: { fontSize: "36px" },
  h3: { fontSize: "24px" },
  h4: { fontSize: "20px" },
  h5: { fontSize: "18px" },
  h6: { fontSize: "16px" },
});

export const paragraphStyle = style({
  fontFamily,
  padding: "0 16px 0 16px",
  margin: 0,
  fontSize: "16px",
  lineHeight: "26px",
  boxSizing: "border-box",
  "@media": {
    "(prefers-color-scheme: dark)": { color: "#ffedd3" },
    "(prefers-color-scheme: light)": { color: "#2d1902" },
    "screen and (max-width: 1849px)": { maxWidth: "50rem" },
    "screen and (min-width: 1850px)": { width: "50rem" },
  },
});

export const logLineStyle = style({
  display: "block",
  lineHeight: "24px",
  color: "#eee",
});

export const logsWrapperStyle = style({
  padding: 16,
  paddingTop: 24,
  borderRadius: 8,
  margin: 0,
  fontSize: "14px",
  boxSizing: "border-box",
  border: "solid 1px #ffffff33",
  overflowX: "scroll",
  maxWidth: "calc(min(100vw, 50rem) - 32px)",
});

export const formWrapperStyle = style({
  borderRadius: 8,
  margin: "-12px 0 -12px 0",
  backgroundColor: "white",
  color: "black",
  padding: 16,
});

export const columnStyle = style({
  display: "flex",
  flexDirection: "column",
});

export const columnItemStyle = styleVariants({
  0: {},
  1: {
    selectors: {
      [`${columnStyle} > &:not(:first-child)`]: {
        marginTop: 8,
      },
    },
  },
  2: {
    selectors: {
      [`${columnStyle} > &:not(:first-child)`]: {
        marginTop: 16,
      },
    },
  },
  3: {
    selectors: {
      [`${columnStyle} > &:not(:first-child)`]: {
        marginTop: 24,
      },
    },
  },
  4: {
    selectors: {
      [`${columnStyle} > &:not(:first-child)`]: {
        marginTop: 32,
      },
    },
  },
});

export const stickyColumnPairStyle = style({
  display: "flex",
  "@media": {
    "screen and (max-width: 1849px)": { flexDirection: "column" },
    "screen and (min-width: 1850px)": { flexDirection: "row" },
    "(prefers-color-scheme: dark)": { backgroundColor: "#222" },
    "(prefers-color-scheme: light)": { backgroundColor: "#ddd" },
  },
});

export const stickyColumnLeftStyle = style({
  "@media": {
    "screen and (max-width: 1849px)": { marginBottom: 16 },
    "screen and (min-width: 1850px)": { marginRight: 16 },
  },
});
export const stickyColumnRightStyle = style({
  "@media": {
    "screen and (min-width: 1850px)": {},
  },
});

export const codeLineStyle = styleVariants({
  whitespace: { display: "block" },
  highlighted: {
    display: "block",
    color: "#ff9b6b",
    backgroundColor: "#942447",
    padding: "4px 8px",
  },
  comment: { display: "block", color: "#ffedd3", padding: "4px 8px" },
  code: { display: "block", color: "#ff9b6b", padding: "4px 8px" },
});

export const codeNameStyle = style({
  display: "block",
  color: "#ffedd3",
  fontSize: "16px",
  lineHeight: "24px",
  // textDecoration: "underline",
  padding: "8px 8px 16px 8px",
  borderBottom: "solid 1px #ffedd3",
  marginBottom: "8px",
});

export const codeDemoWrapperStyle = style({
  borderRadius: 8,
  "@media": {
    "(prefers-color-scheme: dark)": { backgroundColor: "#111" },
    "(prefers-color-scheme: light)": { backgroundColor: "#333" },
  },
});

export const codeBlockStyle = style({
  padding: 8,
  margin: "0 0 16px 0",
  borderRadius: 8,
  fontSize: "14px",
  lineHeight: "16px",
  overflowX: "scroll",
  boxSizing: "border-box",
  border: "solid 1px #ffffff33",
  maxWidth: "calc(min(100vw, 50rem) - 32px)",
  "@media": {
    "(prefers-color-scheme: dark)": { backgroundColor: "#111" },
    "(prefers-color-scheme: light)": { backgroundColor: "#333" },
  },
  selectors: {
    [`${codeDemoWrapperStyle} > &`]: {
      paddingBottom: 16,
    },
  },
});

export const inlineCodeStyle = style({
  margin: "0 0 16px 0",
  borderRadius: 6,
  fontSize: "14px",
  overflowX: "scroll",
  border: "solid 1px #ffffff33",
  color: "#ff9b6b",
  padding: "4px 8px",
  "@media": {
    "(prefers-color-scheme: dark)": { backgroundColor: "#111" },
    "(prefers-color-scheme: light)": { backgroundColor: "#333" },
  },
});

export const navLinkStyle = style({
  fontFamily,
  color: "#ddd",
  textDecoration: "none",
  outline: "none",
  ":hover": { textDecoration: "underline", color: "#fff" },
  ":focus": { textDecoration: "underline", color: "#fff" },
  ":active": { textDecoration: "underline", color: "#fff" },
});

export const nestedLinkStyle = styleVariants({
  0: { margin: 0, fontSize: "18px", lineHeight: "32px" },
  1: { margin: "0 0 0 24px", fontSize: "16px", lineHeight: "26px" },
  2: { margin: "0 0 0 24px", fontSize: "14px", lineHeight: "26px" },
});

export const navLinkListStyle = style({
  padding: 0,
  listStyleType: "none",
});

export const topNavLinkStyle = style({
  fontFamily,
  color: "#eee",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "36px",
  paddingBottom: "16px",
  textDecoration: "none",
  outline: "none",
  ":hover": { textDecoration: "underline", color: "#fff" },
  ":focus": { textDecoration: "underline", color: "#fff" },
  ":active": { textDecoration: "underline", color: "#fff" },
});

export const inlineLinkStyle = style({
  fontFamily,
  textDecoration: "none",
  outline: "none",
  ":hover": { textDecoration: "underline" },
  ":focus": { textDecoration: "underline" },
  ":active": { textDecoration: "underline" },
  "@media": {
    "(prefers-color-scheme: dark)": { color: "#ec4545" },
    "(prefers-color-scheme: light)": { color: "#d13838" },
  },
});

export const mdnLinkStyle = style({
  fontFamily,
  textDecoration: "none",
  outline: "none",
  ":hover": { textDecoration: "underline" },
  ":focus": { textDecoration: "underline" },
  ":active": { textDecoration: "underline" },
  "@media": {
    "(prefers-color-scheme: dark)": { color: "#8cb4ff" },
    "(prefers-color-scheme: light)": { color: "#0069c2" },
  },
});

export const navStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  padding: 16,
  overflowY: "auto",
  width: 275,
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  transition: "transform 250ms ease-in-out",
  "@media": {
    "screen and (max-width: 1049px)": {
      transform: "translateX(calc(-100% + 16px))",
      ":focus-within": {
        transform: "translateX(0)",
      },
      ":hover": {
        transform: "translateX(0)",
      },
    },
    "screen and (min-width: 1050px)": {
      transform: "translateX(0)",
    },
    "(prefers-color-scheme: dark)": {
      backgroundColor: "#ce0745",
    },
    "(prefers-color-scheme: light)": {
      backgroundColor: "#942447",
    },
  },
});

export const pageWrapperStyle = style({
  "@media": {
    "screen and (max-width: 1049px)": {
      paddingLeft: 16,
    },
    "screen and (min-width: 1050px)": {
      paddingLeft: 275,
    },
  },
});
