---
title: Getting Started
permalink: /guides/getting-started/
---

## Installation

```bash
npm install diff-view-kit
```

## NPM Usage

```js
// entrypoint.js
import "diff-view-kit"; // Will register `<diff-viewer>` for you
```

## CDN usage

```html
<script type="module">
  import "https://esm.run/diff-view-kit";

  // Loading a version range. This will load the latest >= 1.0.0 and < 2.0.0 of diff-view-kit.
  import "https://esm.run/diff-view-kit@^1.0.0";

  // Loading a specific version. This will only load v1.0.0
  import "https://esm.run/diff-view-kit@1.0.0";
</script>
```

```html
<diff-view-element
  oldValue="abcd"
  newValue="abce"
></diff-view-element>
```

<!-- <%%= component_list %> -->
