---
sidebar_position: 2.5
---

import Highlight from '@site/src/components/Highlight';

# 没有使用JS框架

<Highlight color="#dfd9fe">Zhihui Editor</Highlight> 针对与 React 框架的集成进行了优化。

然而，对于不需要定制的场景，可以使用 Zhihui Editor 的“无框架”版本。该版本可以通过简单的脚本标签轻松包含在页面中。

```html
<!-- add styles -->
<link href="https://unpkg.com/zhihui-editor/lib/zhihui-editor.min.css" rel="stylesheet" />
<!-- add zhihui-editor bundle -->
<!-- (!) important: make sure it is added into body of document (not <head>) -->
<script src="https://unpkg.com/zhihui-editor/zhihui-editor.bundle.js"></script>

<!-- set styles for the editor -->
<style>
  body {
    padding: 0;
    margin: 0;
  }
  #container {
    width: 100vw;
    height: 100vh;
  }
</style>

<!-- create container for editor -->
<div id="container"></div>
<!-- init the editor -->
<script>
  const { store } = createZhihuiEditorApp({
    // to create your own API key please go here: /pricing
    token: '',
    container: document.getElementById('container')
    // also optionally you can specify which side panels you want to show
    // by default all panels are shown
    // sections: ['templates', 'text', 'elements', 'upload', 'background', 'layers']
  });
  // you can use full store API available here: /docs/store-api/store-overview
</script>
```
