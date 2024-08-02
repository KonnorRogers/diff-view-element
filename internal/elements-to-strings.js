/**
 * @param {Element[]} elements
 */
export function elementsToString(...elements) {
  const strings = [];

  const scratch = document.createElement("div");

  for (const el of elements) {
    if (el instanceof HTMLTemplateElement) {
      const node = el.content.cloneNode(true);

      scratch.append(node);
      strings.push(scratch.innerHTML);
      scratch.innerHTML = "";
      continue;
    }

    if (el instanceof HTMLScriptElement) {
      strings.push(el.textContent);
      continue;
    }

    // We don't want this for preview, only for <light-editor>
    if (el instanceof HTMLTextAreaElement) {
      strings.push(el.value);
      continue;
    }

    strings.push(el.innerHTML);
  }

  return strings.join("\n");
}
