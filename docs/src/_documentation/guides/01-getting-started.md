---
title: Getting Started
permalink: /guides/getting-started/
---

## NPM Installation

```bash
npm install diff-view-element
```

## NPM Usage

```js
// entrypoint.js
import "diff-view-element"; // Will register `<diff-viewer>` for you
```

## CDN usage

```html
<script type="module">
  import "https://cdn.jsdelivr.net/npm/diff-view-element";

  // Loading a version range. This will load the latest >= 1.0.0 and < 2.0.0 of diff-view-element.
  import "https://cdn.jsdelivr.net/npm/diff-view-element@^1.0.0";

  // Loading a specific version. This will only load v1.0.0
  import "https://cdn.jsdelivr.net/npm/diff-view-element@1.0.0";
</script>
```

```html
<diff-view-element old-value="abcd" new-value="abce"></diff-view-element>
```

<light-preview
  preview-mode="shadow-dom"
  script-scope="shadow-dom"
>
  <script slot="code" type="text/plain">
    <diff-view-element
      old-value="abcd"
      new-value="abce"
    ></diff-view-element>
  </script>
</light-preview>

<!-- <%%= component_list %> -->
