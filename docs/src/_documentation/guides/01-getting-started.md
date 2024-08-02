---
title: Getting Started
permalink: /guides/getting-started/
---

## Installation

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
  import "https://esm.run/diff-view-element";

  // Loading a version range. This will load the latest >= 1.0.0 and < 2.0.0 of diff-view-element.
  import "https://esm.run/diff-view-element@^1.0.0";

  // Loading a specific version. This will only load v1.0.0
  import "https://esm.run/diff-view-element@1.0.0";
</script>
```

```html
<diff-view-element
  oldValue="abcd"
  newValue="abce"
></diff-view-element>
```

<!-- <%%= component_list %> -->
