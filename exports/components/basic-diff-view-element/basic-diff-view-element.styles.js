import { css } from "lit"

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

  [part~="pre"] {
    overflow: auto;
    max-width: 100%;
    min-width: 100%;

    /** Always soft wrap with diffs. Overflows get weird. */
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: pre-wrap;
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
    text-align: center;
    user-select: none;
    font-variant-numeric: tabular-nums;
    width: calc(1ch + 8px);
    padding-inline-start: 8px;
  }

  [part~="diff-marker"]::after {
    content: " ";
    width: max-content;
    max-width: max-content;
    min-width: max-content;
  }

  [part~="diff-marker"][part~="diff-marker-deleted"]::after {
    content: "-";
  }

  [part~="diff-marker"][part~="diff-marker-inserted"]::after {
    content: "+";
  }

  [part~="character-diff"][part~="character-diff--removed"] {
    background: hsla(353, 95%, 46%, 0.15);
  }

  [part~="character-diff"][part~="character-diff--added"] {
    background: hsla(137, 100%, 75%);
  }
`
