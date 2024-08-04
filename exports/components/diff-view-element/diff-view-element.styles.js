import { css } from "lit";

export const componentStyles = css`
  :host {
    display: block;
  }

  [part~="base"] {
    max-height: 100%;
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  td {
    vertical-align: top;
  }

  [part~="gutter-cell"] {
    user-select: none;
    font-variant-numeric: tabular-nums;
    color: rgba(0, 0, 0, 0.35);
    background-color: var(--syntax-bg);
    vertical-align: top;
    border-inline-end: 1px solid gray;
    word-break: normal;
    padding: 2px 0px;
    padding-inline-end: 8px;
    padding-inline-start: 20px;
    width: 1ch;
  }

  [part~="line"] {
    text-align: start;
  }

  :host([disable-line-numbers]) [part~="gutter-cell"] {
    display: none;
  }

  [part~="line-number"] {
    display: block;
    min-width: max-content;
    text-align: end;
  }

  table {
    border: 1px solid gray;
    width: 100%;
  }

  [part~="line"] {
    border-inline-end: 1px solid gray;
    padding-inline-start: 4px;
  }

  [part~="diff-marker"],
  [part~="gutter-cell"],
  [part~="line"] {
    min-height: 1lh;
    white-space: inherit;
    word-break: inherit;
  }

  [part~="diff-marker"] {
    padding-inline-start: 4px;
    text-align: center;
    user-select: none;
    font-variant-numeric: tabular-nums;
  }

  [part~="diff-marker"]::after {
    content: " ";
  }

  [part~="diff-marker"][part~="diff-marker-deleted"]::after {
    content: "-";
  }

  [part~="diff-marker"][part~="diff-marker-inserted"]::after {
    content: "+";
  }

  [part~="character-diff"][part~="character-diff--removed"] {
    padding: 0.2em 0;
    background: hsla(353, 95%, 46%, 0.15);
  }

  [part~="character-diff"][part~="character-diff--added"] {
    padding: 0.2em 0;
    background: hsla(137, 100%, 75%);
  }
`;
