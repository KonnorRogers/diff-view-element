import type DiffViewElement from "./diff-view-element.js";

declare global {
  interface HTMLElementTagNameMap {
    "diff-view-element": DiffViewElement;
  }
}

export {};
