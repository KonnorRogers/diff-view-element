import { LitElement } from "lit";
import { DefineableMixin } from "web-component-define";

/**
 * @customElement
 */
export class BaseElement extends DefineableMixin(LitElement) {
  /**
   * @type {Record<string, typeof BaseElement>}
   */
  static dependencies = {};

  constructor() {
    super();
    Object.entries(
      /** @type {typeof BaseElement} */ (this.constructor).dependencies,
    ).forEach(([name, ctor]) => {
      ctor.define(name);
    });
  }

  /**
   * Gets directionality of the element
   * @returns {"ltr" | "rtl"}
   */
  getTextDirection () {
    return this.matches(":dir(rtl)") ? "rtl" : "ltr"
  }
}
