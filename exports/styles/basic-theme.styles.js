import { css } from "lit";

export const basicTheme = css`
  :host {
    --syntax-fg: hsl(230, 8%, 24%);
    --syntax-bg: hsl(230, 1%, 98%);
    --syntax-gutter: hsl(230, 1%, 62%);
    --syntax-guide: hsla(230, 8%, 24%, 0.2);
    --syntax-accent: hsl(230, 100%, 66%);
    /** From syntax-variables.less */
    --syntax-selection-color: hsl(230, 1%, 90%);
    --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
    --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);

    /* --- additional tokens --> */
    --syntax-gutter-border: 1px solid darkgray;

    --syntax-highlight-bg: hsl(210, 9%, 95%);
    --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

    --syntax-deleted-bg: hsla(353, 95%, 92%, 0.5);
    --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);

    --syntax-inserted-bg: hsla(137, 100%, 95%, 0.5);
    --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25);

    /** Added only for basic-diff-view-element */
    --syntax-inserted-text-color: hsl(119, 34%, 37%);
    --syntax-deleted-text-color: hsl(5, 79%, 42%);
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: var(--syntax-bg);
    color: var(--syntax-fg);
    direction: inherit;
    text-align: start;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Selection */
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] *::-moz-selection,
  pre[class*="language-"] *::-moz-selection {
    background: var(--syntax-selection-color);
    color: inherit;
  }

  code[class*="language-"]::selection,
  code[class*="language-"] *::selection,
  pre[class*="language-"] *::selection {
    background: var(--syntax-selection-color);
    color: inherit;
  }

  /* Diff stuff */
  [part~="deleted"] {
    background-color: var(--syntax-deleted-bg);
  }

  [part~="deleted"]::selection,
  [part~="deleted"] *::selection {
    background-color: var(--syntax-deleted-selected-bg);
  }

  [part~="inserted"]::selection,
  [part~="inserted"] *::selection {
    background-color: var(--syntax-inserted-selected-bg);
  }

  [part~="inserted"],
  [part~="inserted"] {
    background-color: var(--syntax-inserted-bg);
  }

  [part~="diff-marker"][part~="diff-marker-inserted"],
  [part~="gutter-cell"][part~="gutter-cell-inserted"] {
    color: var(--syntax-inserted-text-color);
  }

  [part~="diff-marker"][part~="diff-marker-deleted"],
  [part~="gutter-cell"][part~="gutter-cell-deleted"] {
    color: var(--syntax-deleted-text-color);
  }
`;
