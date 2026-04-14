# `<pr-icon>`

This web component is built using modern web standards and follows best practices inspired by projects like [open-wc](https://github.com/open-wc/open-wc).. Internally, it uses **Material Web Components** for rendering icons and styles.

## Installation

```bash
npm install @praval/prvl-icon-component
```
## Usage
```html
<script type="module">
  import '@praval/prvl-icon-component/pr-icon.js';
</script>

<pr-icon></pr-icon>
```

### In React
```html

<script type="module">
  import { PrIcon } from '@praval/prvl-icon-component/PrIcon';
</script>
```
### Material Symbols Stylesheet

To ensure the icons render correctly, include the following line in your `index.html` (or equivalent HTML entry point) inside the `<head>` section in any frontend framework:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```