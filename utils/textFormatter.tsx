import React from "react";

/**
 * Parses Markdown-like formatting tags in a string and returns React nodes.
 * Supported syntax:
 * - **bold** -> <strong>
 * - __underline__ -> <span className="underline">
 * - *italic* or _italic_ -> <em>
 * - `code` -> <code>
 * - \n -> <br />
 *
 * It supports nesting (e.g., **bold with _italic_**).
 */
export function parseFormatting(text: string, parentKey = "fmt"): React.ReactNode[] {
  if (!text) return [];

  // Match the first occurrence of:
  // 1. **bold** -> (group 2)
  // 2. __underline__ -> (group 3)
  // 3. _italic_ -> (group 4)
  // 4. *italic* -> (group 5)
  // 5. `code` -> (group 6)
  // 6. \n -> newline
  const regex = /(\*\*(.*?)\*\*|__(.*?)__|_(.*?)_|\*(.*?)\*|`(.*?)`|\n)/;
  const match = text.match(regex);

  if (!match || match.index === undefined) {
    return [text];
  }

  const before = text.slice(0, match.index);
  const matchedText = match[0];
  const remaining = text.slice(match.index + matchedText.length);

  let formattedElement: React.ReactNode;
  const key = `${parentKey}-${match.index}`;

  if (matchedText === "\n") {
    formattedElement = <br key={key} />;
  } else if (matchedText.startsWith("**")) {
    const content = match[2];
    formattedElement = (
      <strong key={key} className="font-bold text-slate-900">
        {parseFormatting(content, `${key}-b`)}
      </strong>
    );
  } else if (matchedText.startsWith("__")) {
    const content = match[3];
    formattedElement = (
      <span key={key} className="underline">
        {parseFormatting(content, `${key}-u`)}
      </span>
    );
  } else if (matchedText.startsWith("_")) {
    const content = match[4];
    formattedElement = (
      <em key={key} className="italic">
        {parseFormatting(content, `${key}-i`)}
      </em>
    );
  } else if (matchedText.startsWith("*")) {
    const content = match[5];
    formattedElement = (
      <em key={key} className="italic">
        {parseFormatting(content, `${key}-i`)}
      </em>
    );
  } else if (matchedText.startsWith("`")) {
    const content = match[6];
    formattedElement = (
      <code key={key} className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono text-pink-600">
        {content}
      </code>
    );
  } else {
    formattedElement = matchedText;
  }

  return [
    ...parseFormatting(before, `${parentKey}-l`),
    formattedElement,
    ...parseFormatting(remaining, `${parentKey}-r`)
  ];
}
