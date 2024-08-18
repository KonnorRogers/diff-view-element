import { html, fixture, assert } from "@open-wc/testing";
import { readFile } from "@web/test-runner-commands";
import "diff-view-element";

suite("<diff-view-element>", () => {
  test("Should render a component", async () => {
    const el = await fixture(html` <diff-view-element></diff-view-element> `);

    assert(
      el.matches(":defined"),
      `"${el.tagName.toLowerCase()}" element should be ":defined"`,
    );
  });
  test("Should correctly identify diffs for a simple comparison", async () => {
    const el = await fixture(
      html` <diff-view-element
        language="javascript"
        old-value="const x = 'Hello World'"
        new-value="const y = 'Hello Moto'
console.log(y)"
      ></diff-view-element>`,
    );
    const addedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line--inserted']");
    assert.equal(addedLines.length, 2);
    const removedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line--deleted']");
    assert.equal(removedLines.length, 1);

    const diffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff']");
    const addedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--inserted']");
    const removedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--deleted']");

    assert.equal(diffs.length, 6);
    assert.equal(addedDiffs.length, 3);
    assert.equal(removedDiffs.length, 3);

    assert.equal(removedDiffs[0].textContent, "x");
    assert.equal(removedDiffs[1].textContent, "W");
    assert.equal(removedDiffs[2].textContent, "rld");

    assert.equal(addedDiffs[0].textContent, "y");
    assert.equal(addedDiffs[1].textContent, "M");
    assert.equal(addedDiffs[2].textContent, "to");
  });

  test("Should correctly identify diffs for an advanced comparison", async () => {
    const el = await fixture(html` <diff-view-element></diff-view-element> `);

    const oldValue = await readFile({
      path: "fixtures/webpack-diff-old.js",
    }).catch((e) => console.error(e));
    const newValue = await readFile({
      path: "fixtures/webpack-diff-new.js",
    }).catch((e) => console.error(e));

    el.oldValue = oldValue;
    el.newValue = newValue;

    await el.updateComplete;

    const addedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line--inserted']");
    assert.equal(addedLines.length, 9);
    const removedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line--deleted']");
    assert.equal(removedLines.length, 23);

    const diffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff']");
    const addedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--inserted']");
    const removedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--deleted']");

    assert.equal(diffs.length, 4);
    assert.equal(addedDiffs.length, 1);
    assert.equal(removedDiffs.length, 3);

    assert.equal(addedDiffs[0].textContent, "'/'");

    assert.equal(removedDiffs[0].textContent, "devServer.publicPath");
    assert.equal(removedDiffs[1].textContent, "name]---[local]---[");
    assert.equal(
      removedDiffs[2].textContent,
      "&localIdentName=[name]--[local]",
    );
  });

  test("Should correctly identify diffs with a line number offset", async () => {
    const el = await fixture(
      html` <diff-view-element
        language="javascript"
        line-number-start="35"
        old-value="const x = 'Hello World'"
        new-value="const y = 'Hello Moto'
console.log(y)"
      ></diff-view-element>`,
    );
    const addedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line--inserted']");
    assert.equal(addedLines.length, 2);
    const removedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line--deleted']");
    assert.equal(removedLines.length, 1);

    const diffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff']");
    const addedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--inserted']");
    const removedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--deleted']");

    assert.equal(diffs.length, 6);
    assert.equal(addedDiffs.length, 3);
    assert.equal(removedDiffs.length, 3);

    assert.equal(removedDiffs[0].textContent, "x");
    assert.equal(removedDiffs[1].textContent, "W");
    assert.equal(removedDiffs[2].textContent, "rld");

    assert.equal(addedDiffs[0].textContent, "y");
    assert.equal(addedDiffs[1].textContent, "M");
    assert.equal(addedDiffs[2].textContent, "to");
  });

  test("Should correctly identify diffs for an advanced comparison", async () => {
    const el = await fixture(html` <diff-view-element></diff-view-element> `);

    const oldValue = await readFile({
      path: "fixtures/webpack-diff-old.js",
    }).catch((e) => console.error(e));
    const newValue = await readFile({
      path: "fixtures/webpack-diff-new.js",
    }).catch((e) => console.error(e));

    el.oldValue = oldValue;
    el.newValue = newValue;

    await el.updateComplete;

    const addedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line--inserted']");
    assert.equal(addedLines.length, 9);
    const removedLines = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='line--deleted']");
    assert.equal(removedLines.length, 23);

    const diffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff']");
    const addedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--inserted']");
    const removedDiffs = el.shadowRoot
      .querySelector("table")
      .querySelectorAll("[part~='character-diff--deleted']");

    assert.equal(diffs.length, 4);
    assert.equal(addedDiffs.length, 1);
    assert.equal(removedDiffs.length, 3);

    assert.equal(addedDiffs[0].textContent, "'/'");

    assert.equal(removedDiffs[0].textContent, "devServer.publicPath");
    assert.equal(removedDiffs[1].textContent, "name]---[local]---[");
    assert.equal(
      removedDiffs[2].textContent,
      "&localIdentName=[name]--[local]",
    );
  });
});
