---
title: <basic-diff-view-element>
---

<basic-diff-view-element hidden></basic-diff-view-element>

## Examples

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
>

  <script slot="code" type="text/plain">
    <basic-diff-view-element
      old-value="const x = 'Hello World'"
      new-value="
        const y = 'Hello Moto'
        console.log(y)
      "
    >

    </basic-diff-view-element>
  </script>
</light-preview>

### A large example

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
>
  <script slot="code" type="text/plain">
    <basic-diff-view-element
    >
    </basic-diff-view-element>
    <script type="module">
      ;(async () => {
        const viewer = document.querySelector("basic-diff-view-element")
        const newValue = await (await fetch("https://raw.githubusercontent.com/praneshr/react-diff-viewer/master/examples/src/diff/javascript/new.rjs")).text()

        const oldValue = await (await fetch("https://raw.githubusercontent.com/praneshr/react-diff-viewer/master/examples/src/diff/javascript/old.rjs")).text()

        /** Do these at the same time to prevent flashing. */
        viewer.newValue = newValue
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
    <basic-diff-view-element
      disable-line-numbers=""
      old-value="const x = 'Hello World'"
      new-value="
        const y = 'Hello Moto'
        console.log(y)
      "
    ></basic-diff-view-element>
  </script>
</light-preview>

### Changing the starting line number

The starting line number can be changed by using the `line-number-start` attribute.

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
>

  <script slot="code" type="text/plain">
    <basic-diff-view-element
      line-number-start="35"
      old-value="const x = 'Hello World'"
      new-value="
        const y = 'Hello Moto'
        console.log(y)
      "
    ></basic-diff-view-element>
  </script>
</light-preview>

### Slotting in content

Content can be slotted in using `<script type="text/plain">` tags. Do note, it will only escape `&lt;/script>` and turn it in to `</script>`. It will not escape any HTML for you.

As for why a `<script type="text/plain">` is preferred, check out the docs on ["Why Script Tags"](/references/why-script-tags/)

Slotted content will have extra leading / trailing whitespace stripped, will be "dedented" for you.

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
  unescape-behavior="all"
>
  <script slot="code" type="text/plain">
    <basic-diff-view-element
    >
      <script slot="old-value" type="text/plain">
        <div>Hello World</div>
      &lt;/script>
      <script slot="new-value" type="text/plain">
        <span>Hello World</span>
      &lt;/script>
    </basic-diff-view-element>
  </script>
</light-preview>

### Preserving whitespace

Whitespace can be preserved by using `preserve-whitespace` which will also preserve leading / trailing new lines as well as disable "dedenting" of the strings.

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
  unescape-behavior="all"
>
  <script slot="code" type="text/plain">
    <basic-diff-view-element
      preserve-whitespace
    >
      <script slot="old-value" type="text/plain">

        <div>Hello World</div>

      &lt;/script>
      <script slot="new-value" type="text/plain">

        <span>Hello World</span>

      &lt;/script>
    </basic-diff-view-element>
  </script>
</light-preview>

## Future ideas

- [ ] - "Unified view" where diffs are rendered inline instead of 2 different views
- [ ] - Render functions for additional things like buttons
- [ ] - Code folding
- [ ] - File names
- [ ] - Displaying number of diffs in a file
- [ ] - Expose more types of diffs (words / sentences / json / css, etc)

Got an idea? I'd love to hear it!

<https://github.com/KonnorRogers/diff-view-element/issues>

