import * as React from "react";
import {
  headerStyle,
  headerLevelStyle,
  paragraphStyle,
  codeBlockStyle,
  columnStyle,
  stickyColumnPairStyle,
  stickyColumnLeftStyle,
  stickyColumnRightStyle,
  codeLineStyle,
  logLineStyle,
  codeNameStyle,
  codeDemoWrapperStyle,
  navStyle,
  topNavHeaderStyle,
  navLinkStyle,
  navLinkListStyle,
  pageWrapperStyle,
  nestedLinkStyle,
  logsWrapperStyle,
  formWrapperStyle,
  columnItemStyle,
  inlineCodeStyle,
  inlineLinkStyle,
  mdnLinkStyle,
} from "./components.css";

export function Header({
  level,
  name,
  className,
  children,
}: React.PropsWithChildren<{
  level: 1 | 2 | 3 | 4 | 5 | 6;
  name: string;
  className?: string | undefined;
}>) {
  const Tag = `h${level}` as keyof typeof headerLevelStyle;

  return (
    <Tag
      className={`${headerStyle} ${headerLevelStyle[Tag]} ${className || ""}`}
      id={encodeURIComponent(name.replaceAll(/\s+/g, "-"))}
    >
      {children || name}
    </Tag>
  );
}

export function MdnLink({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <a href={href} className={mdnLinkStyle} target="_blank">
      {children}
    </a>
  );
}

export function DocLink({ name }: { name: string }) {
  return (
    <a
      href={`#${encodeURIComponent(name.replaceAll(/\s+/g, "-"))}`}
      className={inlineLinkStyle}
    >
      {name}
    </a>
  );
}

function NestedLinks({ links, level }) {
  return (
    <ul className={`${navLinkListStyle} ${nestedLinkStyle[level]}`}>
      {links.map((l, i) =>
        Array.isArray(l) ? (
          <NestedLinks key={String(i)} links={l} level={level + 1} />
        ) : (
          <li key={String(i)}>
            <a
              href={`#${encodeURIComponent(l.replaceAll(/\s+/g, "-"))}`}
              className={navLinkStyle}
            >
              {l}
            </a>
          </li>
        )
      )}
    </ul>
  );
}

export function DocLinks({
  links,
}: {
  links: Array<Array<string[] | string> | string>;
}) {
  return (
    <nav className={navStyle}>
      <span className={topNavHeaderStyle}>
        forms-go-brrr
      </span>
      <NestedLinks links={links} level={0} />
    </nav>
  );
}

export function Paragraph({
  children,
  className,
}: React.PropsWithChildren<{ className?: string | undefined }>) {
  return <p className={`${paragraphStyle} ${className || ""}`}>{children}</p>;
}

const commentRegex = /^\s*(?:\/\/)|(?:\/\*)/;
const whiteSpaceRegex = /^\s*$/;

export function CodeBlock({
  name,
  highlight,
  className,
  children,
}: React.PropsWithChildren<{ name?: string; highlight?: number[] }>) {
  return (
    <pre arial-label={name} className={`${codeBlockStyle} ${className || ""}`}>
      {name ? <code className={codeNameStyle}>{name}</code> : null}
      {children.split("\n").map((v, i) => (
        <code
          key={String(i)}
          className={
            codeLineStyle[
              highlight?.includes(i)
                ? "highlighted"
                : whiteSpaceRegex.test(v)
                ? "whitespace"
                : commentRegex.test(v)
                ? "comment"
                : "code"
            ]
          }
        >
          {v || "  "}
        </code>
      ))}
    </pre>
  );
}

export function Code({ children }: React.PropsWithChildren<{}>) {
  return <code className={inlineCodeStyle}>{children}</code>;
}

export function LogLine({
  time,
  children,
}: React.PropsWithChildren<{ time: string; children: string }>) {
  return (
    <code className={logLineStyle}>
      <div style={{width: "10rem", display: "inline-block", marginRight: "16px"}}>{time}</div>
      <div style={{display: "inline-block"}}>{children}</div>
    </code>
  );
}

export function StickyColumnPair({
  left,
  right,
  className,
}: React.PropsWithChildren<{
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string | undefined;
}>) {
  return (
    <div className={`${stickyColumnPairStyle} ${className || ""}`}>
      <div className={stickyColumnLeftStyle}>{left}</div>
      <div className={stickyColumnRightStyle}>{right}</div>
    </div>
  );
}

export function PageWrapper({ children }: React.PropsWithChildren<{}>) {
  return <div className={pageWrapperStyle}>{children}</div>;
}

export function Column({
  className,
  space,
  children,
}: React.PropsWithChildren<{
  space: keyof typeof columnItemStyle;
  className?: string | undefined;
}>) {
  return (
    <div className={`${columnStyle} ${className || ""}`}>
      {React.Children.map(children, (c) =>
        React.isValidElement(c)
          ? {
              ...c,
              props: {
                ...c.props,
                className: `${columnItemStyle[space]} ${
                  c.props.className || ""
                }`,
              },
            }
          : c
      )}
    </div>
  );
}

type LogT = {
  time: number;
  text: string;
};

export const DemoContext = React.createContext({ log: (text: string) => {} });

export class CodeDemo extends React.Component<
  {
    code: string;
    Form: React.ComponentType<{
      onSubmit: (onSubmit: (values: {}) => unknown) => React.ReactElement;
    }>;
    className?: string | undefined;
  },
  { logs: LogT[] }
> {
  state: { logs: LogT[] };
  log: (text: string) => unknown;
  demoContext: { log: (text: string) => unknown };

  constructor(props) {
    super(props);

    this.state = { logs: [] };

    this.log = (text: string) =>
      this.setState(({ logs }) => {
        logs.unshift({
          time: window.performance.now(),
          text,
        });
        return { logs };
      });

    this.submitJson = (values) =>
      this.log(`Form submit: ${JSON.stringify(values)}`);

    this.demoContext = { log: this.log };
  }

  render() {
    const { code, Form, className } = this.props;
    return (
      <div className={`${codeDemoWrapperStyle} ${className || ""}`}>
        <CodeBlock>{code}</CodeBlock>
        <div className={formWrapperStyle}>
          <DemoContext.Provider value={this.demoContext}>
            <Form submitJson={this.submitJson} />
          </DemoContext.Provider>
        </div>
        <pre className={logsWrapperStyle}>
          {this.state.logs.length ? (
            this.state.logs.map((l, i) => (
              <LogLine key={`${l.time}${i}`} time={l.time}>
                {l.text}
              </LogLine>
            ))
          ) : (
            <LogLine time="">{"  "}</LogLine>
          )}
        </pre>
      </div>
    );
  }
}

/*

Documentation text
Code examples w/ documentation text
Live form examples w/ console output

*/
