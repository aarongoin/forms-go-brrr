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
  topNavLinkStyle,
  navLinkStyle,
  navLinkListStyle,
  pageWrapperStyle,
  nestedLinkStyle,
  logsWrapperStyle,
  formWrapperStyle,
  columnItemStyle,
  inlineCodeStyle,
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
      <a href="/" className={topNavLinkStyle}>
        forms-go-brrr
      </a>
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

export function Code({children}: React.PropsWithChildren<{}>) {
  return (
    <code className={inlineCodeStyle}>{children}</code>
  )
}

export function LogLine({
  time,
  children,
}: React.PropsWithChildren<{ time: string; children: string }>) {
  return (
    <code className={logLineStyle}>
      {time}
      {"   "}
      {children}
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
  let leftHeight = 0;
  let rightHeight = 0;
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
  children,
}: React.PropsWithChildren<{
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
                className: `${columnItemStyle} ${c.props.className}`,
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

export class CodeDemo extends React.Component<
  {
    code: string;
    renderForm: (onSubmit: (values: {}) => unknown) => React.ReactElement;
    className?: string | undefined;
  },
  { logs: LogT[] }
> {
  state = { logs: [] };

  render() {
    const { code, renderForm, className } = this.props;
    return (
      <div className={`${codeDemoWrapperStyle} ${className || ""}`}>
        <CodeBlock>{code}</CodeBlock>
        <div className={formWrapperStyle}>
          {renderForm((values) =>
            this.setState(({ logs }) => {
              logs.push({
                time: Date.now(),
                text: `Form submit w/ values: ${JSON.stringify(values)}`,
              });
              return { logs };
            })
          )}
        </div>
        <pre className={logsWrapperStyle}>
          {this.state.logs.length ? (
            this.state.logs.map((l) => (
              <LogLine key={l.time} time={l.time}>
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
