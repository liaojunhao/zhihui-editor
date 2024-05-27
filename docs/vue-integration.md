---
sidebar_position: 3
---

import Highlight from '@site/src/components/Highlight';

# 与 Vue 框架集成

:::info

正在开发中...

:::

<Highlight color="#dfd9fe">Zhihui Editor</Highlight> 旨在与 <Highlight color="#dfd9fe">React</Highlight> 框架一起使用。网站上的大多数自定义演示都是针对React代码库制作的。

如果您想进行任何 UI 定制，请查看[非 React 集成](/docs/non-react-integration)指南。

为了更简单的原型集成，请继续阅读...

## 可以<Highlight color="#dfd9fe">Zhihui Editor</Highlight>与<Highlight color="#dfd9fe">Vue.js</Highlight>框架一起使用吗？

如果不需要大量定制，您可以使用 <Highlight color="#dfd9fe">Vue.js</Highlight> 框架制作自己的应用程序并在其中嵌入 <Highlight color="#dfd9fe">Zhihui Editor</Highlight>。然后使用[store API](/docs/store-api/store-overview)与编辑器进行交互。

```js
<template>
  <div>
    <div id="app"></div>
  </div>
</template>

<script>
import { createDemoApp } from "zhihui-editor/zhihuiEditorApp";

export default {
  name: "App",
  mounted() {
    const { store } = createDemoApp({
      container: document.getElementById("app"),
      key: "YOUR_TOKEN", // you can create it here: https://liaojunhao.github.io/zhihui-editor/pricing
    });
  },
};
</script>

<style global>
#app {
  width: 100vw;
  height: 100vh;
}
body {
  padding: 0;
  margin: 0;
}
</style>
```
