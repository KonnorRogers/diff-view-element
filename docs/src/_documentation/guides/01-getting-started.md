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
import "diff-view-element"; // Will register `<basic-diff-view-element>` and `<diff-view-element>` for you
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

## A basic example

With the imports in place, you can now use the custom element and get to diffing!

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

## Cherry picking

For the bundle size conscious, or those looking to extend, `diff-view-element` has exports available for element definitions that both do not register, and will auto register.

For more, check out the "Imports" section of [&lt;diff-view-element&gt;](/components/diff-view-element/#imports) and [&lt;basic-diff-view-element&gt;](/components/basic-diff-view-element#imports)
