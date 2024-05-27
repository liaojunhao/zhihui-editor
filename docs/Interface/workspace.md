---
sidebar_position: 2
---

import Highlight from '@site/src/components/Highlight';

# Workspace UI

<Highlight color="#dfd9fe">Workspace</Highlight> 组件是 <Highlight color="#dfd9fe">Zhihui Editor</Highlight> 框架的重要组成部分。它是用来展示绘制在画布中的元素并且与它们交互的主要 React 组件，您可以使用 [Store API](/docs/store-api/store-overview) 以编程方式更改画布及其内容。

```js
import { Workspace } from 'zhihui-editor/lib/canvas/workspace';
import { createStore } from 'zhihui-editor/lib/model/store';

const store = createStore({
  token: YOUR_TOKEN
});

const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Workspace store={store} />
    </div>
  );
};
```

<Highlight color="#dfd9fe">Workspace</Highlight> 将自动采用其父级的完整宽度和高度，因此您无需手动调整其大小。您可以使用 CSS 设置父级 <code>div</code> 的大小来确定画布的大小。

## Workspace 的样式

您可以选择更改工作区的某些样式

```js
<Workspace store={store} backgroundColor="grey" />
```

## 覆盖键盘处理程序

如果您不喜欢默认的键盘快捷键，可以用自己的键盘快捷键覆盖它们。

```js
import { handleHotkey } from 'zhihui-editor/lib/workplace/hotkeys';

<Workspace
  store={store}
  onKeyDown={(e, store) => {
    if (e.key === 'Escape') {
      store.selectElements([]);
      return;
    }
    // optionally you can call default handler
    handleHotkey(e, store);
  }}
/>;
```
