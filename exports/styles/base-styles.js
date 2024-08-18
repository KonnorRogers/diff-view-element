import { css } from "lit";

export const baseStyles = css`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  :host(:dir(rtl)) *,
  :host(:dir(rtl)) *:after,
  :host(:dir(rtl)) *:before {
    direction: rtl;
  }

  :host(:dir(ltr)) *,
  :host(:dir(ltr)) *:after,
  :host(:dir(ltr)) *:before {
    direction: ltr;
  }

  .visually-hidden:not(:focus-within) {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    white-space: nowrap;
  }

  [hidden] {
    display: none !important;
  }

  :host {
    display: block;
  }
`;

/**
 * @param {string[]} selectors
 */
export const buttonStyles = css`
  button {
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid gray;
    background-color: inherit;
    padding: 0.4em 0.6em;
    color: inherit;
    border-radius: 4px;
  }

  button:focus-visible {
    outline: 2px solid hsl(203, 77%, 43%);
  }

  @supports not selector(:focus-visible) {
    button:focus-within {
      outline: 2px solid hsl(203, 77%, 43%);
    }
  }

  button:is(:active, :hover, .is-active) {
    cursor: pointer;
    color: hsla(203, 77%, 43%);
    background-color: hsla(203, 77%, 93%);
  }
`;
