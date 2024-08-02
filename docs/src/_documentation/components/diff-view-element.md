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

### First Example

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

### Diffing between 2 elements

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
>
  <script slot="code" type="text/plain">
    <div id="element-1">Element 1</div>
    <div id="element-2">Element 2</div>
    <br>
    <diff-view-element
      language="javascript"
    >
    </diff-view-element>
  </script>
</light-preview>


## Future enhancements

- [ ] - "Unified view"
- [ ] - Render functions for additional things like buttons
- [ ] - Render diff between 2 elements

Got an idea? I'd love to hear it.
