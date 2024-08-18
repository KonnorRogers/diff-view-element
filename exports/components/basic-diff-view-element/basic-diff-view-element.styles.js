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

  code {
    display: block;
    white-space: inherit;
    overflow-wrap: inherit;
    word-break: inherit;
    white-space: inherit;
  }

  [part~="pre"] {
    max-width: 100%;
    min-width: 100%;
    overflow: auto;

    /** Always soft wrap with diffs. Overflows get weird. */
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: pre-wrap;
  }

  [part~="gutter-cell"] {
    -webkit-user-select: none;
    user-select: none;
    font-variant-numeric: tabular-nums;
    color: rgba(0, 0, 0, 0.35);
    background-color: var(--syntax-bg);
    vertical-align: top;
    border-inline-end: 1px solid gray;
    word-break: normal;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-inline-end: 8px;
    padding-inline-start: 20px;
    /** This innocuous "width: 1ch;" is what saves the gutter from taking up too much space. */
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
    /** min-width: 100%; is needed for Safari to calculate correctly. */
    min-width: 100%;
    width: max-content;
    text-align: end;
    user-select: none;
    -webkit-user-select: none;
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
    -webkit-user-select: none;
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

  [part~="character-diff"][part~="character-diff--deleted"] {
    background: hsla(353, 95%, 46%, 0.15);
  }

  [part~="character-diff"][part~="character-diff--inserted"] {
    background: hsla(137, 100%, 75%);
  }

  table tr td:nth-child(3),
  table tr td:nth-child(6) {
    -webkit-user-select: auto;
    user-select: auto;
  }

  /**
    This fancy shenanigans is what allows users to only select 1 side of a diff.
    Inspired by this hack: https://stackoverflow.com/posts/73517303/revisions
  */
  table[active-side="right"] tr td:nth-child(3),
  table[active-side="left"] tr td:nth-child(6) {
    -webkit-user-select: none;
    user-select: none;
  }

  /** I'm not quite sure why its "n+4" instead of "n+3", when <td> 1-3 is the left, and <td> 4-6 is the right */

  /** Left half */
  table:not([active-side="right"]):has(tr td:nth-child(-n + 4):hover) tr td:nth-child(3) {
    -webkit-user-select: auto;
    user-select: auto;
  }

  /** Right half */
  table:not([active-side="left"]):has(tr td:nth-child(n + 3):hover) tr td:nth-child(6) {
    -webkit-user-select: auto;
    user-select: auto;
  }
`


