---
title: <diff-view-element>
---

<diff-view-element hidden></diff-view-element>

## Examples

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
>

  <script slot="code" type="text/plain">
    <diff-view-element
      language="javascript"
      oldValue="const x = 'Hello World'"
      newValue="const y = 'Hello Moto'
console.log(y)"
    >
    </diff-view-element>
  </script>
</light-preview>

### A large example

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
>
  <script slot="code" type="text/plain">
    <diff-view-element
      language="javascript"
    >
    </diff-view-element>
    <script type="module">
      ;(async () => {
        const viewer = document.querySelector("diff-view-element")
        const newValue = await (await fetch("https://raw.githubusercontent.com/praneshr/react-diff-viewer/master/examples/src/diff/javascript/new.rjs")).text()
        viewer.newValue = newValue

        const oldValue = await (await fetch("https://raw.githubusercontent.com/praneshr/react-diff-viewer/master/examples/src/diff/javascript/old.rjs")).text()
        viewer.oldValue = oldValue
      })()
    &lt;/script>
  </script>
</light-preview>

### Disabling line numbers

Line numbers can be disabled by adding the `disable-line-numbers` attribute.

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
>

  <script slot="code" type="text/plain">
    <diff-view-element
      language="javascript"
      disable-line-numbers=""
      oldValue="const x = 'Hello World'"
      newValue="const y = 'Hello Moto'
console.log(y)"
    ></diff-view-element>
  </script>
</light-preview>

### Changing the starting line number

The starting line number can be changed by using the `line-number-start` attribute.

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
>

  <script slot="code" type="text/plain">
    <diff-view-element
      language="javascript"
      line-number-start="35"
      oldValue="const x = 'Hello World'"
      newValue="const y = 'Hello Moto'
console.log(y)"
    ></diff-view-element>
  </script>
</light-preview>

### Slotting in content

Content can be slotted in using `<script type="text/plain">` tags. Do note, it will only escape `&lt;/script>` and turn it in to `</script>`. It will not escape any HTML for you.

As for why a `<script type="text/plain">` is preferred, check out the docs on ["Why Script Tags"](/references/why-script-tags/)

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
  unescape-behavior="all"
>
  <script slot="code" type="text/plain">
    <diff-view-element
      language="html"
    >
      <script slot="old-value" type="text/plain">
        <div>Hello World</div>
      &lt;/script>
      <script slot="new-value" type="text/plain">
        <span>Hello World</span>
      &lt;/script>
    </diff-view-element>
  </script>
</light-preview>

### Preserving whitespace

Whitespace can be preserved by using `preserve-whitespace` which will also preserve leading / trailing new lines.

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
  unescape-behavior="all"
>
  <script slot="code" type="text/plain">
    <diff-view-element
      language="html"
      preserve-whitespace
    >
      <script slot="old-value" type="text/plain">

        <div>Hello World</div>

      &lt;/script>
      <script slot="new-value" type="text/plain">

        <span>Hello World</span>

      &lt;/script>
    </diff-view-element>
  </script>
</light-preview>

## Future ideas

- [ ] - "Unified view"
- [ ] - Render functions for additional things like buttons
- [ ] - Render diff between 2 elements
- [ ] - Code folding

Got an idea? I'd love to hear it.
