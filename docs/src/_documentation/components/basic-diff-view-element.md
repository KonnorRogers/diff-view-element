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
      language="javascript"
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
    <basic-diff-view-element>
    </basic-diff-view-element>
    <script type="module">
      ;(async () => {
        const viewer = document.querySelector("basic-diff-view-element")
        const newValue = await (await fetch("https://raw.githubusercontent.com/praneshr/react-diff-viewer/master/examples/src/diff/javascript/new.rjs")).text()
        viewer.newValue = newValue

        const oldValue = await (await fetch("https://raw.githubusercontent.com/praneshr/react-diff-viewer/master/examples/src/diff/javascript/old.rjs")).text()
        viewer.oldValue = oldValue
      })()
    &lt;/script>
  </script>
</light-preview>

