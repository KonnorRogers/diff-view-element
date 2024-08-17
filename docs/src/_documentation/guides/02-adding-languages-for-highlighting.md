---
title: Adding languages for highlighting
permalink: /guides/adding-languages-for-highlighting/
description: Learning how to to extend the highlighter and add languages.
---

## Supported languages

Out of the box `<diff-view-element>` supports the following languages via a PrismJS fork.

- `plaintext` (default)
- `markup` (`mathml`, `svg`, `xml`, `ssml`, `atom`, `rss`)
- `markdown`, `md`
- `html`
- `css`
- `javascript`, `js`, `jsx`
- `typescript`, `ts`, `tsx`

## Adding additional languages

`diffViewElement.highlighter` is a property holds an instance of a fork of [PrismJS](https://prismjs.com/) called [PrismJS ESM](https://github.com/konnorrogers/prism-esm)

The reason a fork is used is because PrismJS expects a singleton. This doesn't work well if you have multiple components on a page and may need different plugins or hooks or other various things per-component. The fork is an attempt to make it ESM compatible and allow multiple instances to exist.

Moving on, to add a language, we can query for our `<diff-view-element>` component, modify the highlighter, and reassign it.

Let's for example create a `<diff-view-element>` component and add the `ruby` loader.

### Example with Ruby code

<light-preview preview-mode="shadow-dom" script-scope="shadow-dom">
  <script type="text/plain" slot="code">
    <diff-view-element
      language="ruby"

      old-value="
        def foo
          puts 'bar'
        end"
      new-value = "
        def bar
          puts 'foo'
        end"
    >
    </diff-view-element>
    <script>
      ;(async () => {
        const RubyLoader = (await import("https://cdn.jsdelivr.net/npm/prism-esm/components/prism-ruby.js")).loader
        const diffViewElement = document.querySelector("diff-view-element")

        // Get the Prism highlighter instance
        const highlighter = diffViewElement.highlighter

        // Add the ruby "grammar"
        RubyLoader(highlighter)

        // Force an update
        diffViewElement.requestUpdate()
      })()
    &lt;/script>
  </script>
</light-preview>

## Caveats

Be aware that only "loaders" added to your PrismJS instance can perform syntax highlighting on code blocks.

For example, the default Prism instance only comes loaded with the following languages / grammars:

- markup
- markup-templating
- css
- css-extras
- javascript
- js-extras
- js-templates
- jsx
- typescript
- tsx

A full list of all possible languages and grammars can be found here:

<https://github.com/KonnorRogers/prism-esm/tree/master/components>

The general syntax is as follows:

```js
// Import the loader
import { loader as RubyLoader } from "https://cdn.jsdelivr.net/npm/prism-esm/components/prism-ruby.js")

// Find the `<diff-view-element>` element
const diffViewElement = document.querySelector("diff-view-element")

// Get the Prism highlighter instance
const highlighter = diffViewElement.highlighter

// Add the ruby "grammar"
RubyLoader(highlighter)

// Force an update
diffViewElement.requestUpdate()
```
