/**
 * @typedef {object} WrapEnv
 * @property {string} type
 * @property {string} content
 * @property {Array<string>} classes
 * @property {Record<string, string>} attributes
 * @property {string} language
 */

/**
 * @example
 *   prism.hooks.add("wrap", LineHighlightWrapPlugin)
 */
export function LineHighlightWrapPlugin() {
  const partTypes = ["inserted", "line-highlight", "deleted"];

  /**
   * @param {{ type: string, attributes: Record<string, string> }} token
   * @param {string} tokenName - Name of token to find
   * @param {string} partName - Name of part to add
   */
  function addParts(token, tokenName, partName) {
    if (token.type.includes(tokenName)) {
      token.attributes["part"] = partName;

      partTypes.forEach((type) => {
        if (!token.type.includes(type)) return;

        token.attributes["part"] += ` ${partName}--${type}`;
      });
    }
  }
  /**
   * @param {WrapEnv} env
   */
  return function (env) {
    addParts(env, "diff-line", "line");
    addParts(env, "line-number", "line-number");
    addParts(env, "gutter-cell", "gutter-cell");
    addParts(env, "diff-marker", "diff-marker");
  };
}
