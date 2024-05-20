---
sidebar_position: 1
---

import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 概述

<Highlight color="#dfd9fe">Zhihui Editor</Highlight> 是一款基于Fabric.js + React 组件构建的Web图形编辑器，**它开发简单、可扩展、易接入，可帮助开发者快速构建简单易用的图形编辑器**。

有许多强大的 JavaScript 框架和工具可以帮助您制作画布编辑器。但几乎所有框架本质上都是些“基础”的操作。以[http://fabricjs.com/](http://fabricjs.com/)为例——它是一个很棒的 2D 画布框架；但是您需要编写 **大量代码** 才能制作完整的图形编辑器应用程序。

Zhihui Editor 是一个简单的工具包，可以解决一组集中的业务问题。它速度很快，我们致力于保持 API 尽可能简洁。因此，您只需将其放在页面上即可获得功能齐全的图形编辑器。

## 快速上手

安装 <Highlight color="#dfd9fe">Zhihui Editor</Highlight> 包：

<Tabs>
  <TabItem value="npm run zhihui-editor" label="npm" default>
    ```js
    npm run zhihui-editor
    ```
  </TabItem>
  <TabItem value="yarn zhihui-editor" label="Yarn">
    ```bash
    yarn zhihui-editor
    ```
  </TabItem>
  <TabItem value="pnpm add zhihui-editor" label="pnpm">
    ```bash
    pnpm add zhihui-editor
    ```
  </TabItem>
</Tabs>

初始化演示应用程序（基于 React 框架）：

```jsx
// css导入
import 'zhihui-editor/lib/zhihui-editor.min.css';

import { WorkspaceWrap, ZhihuiEditorContainer, SidePanelWrap } from 'zhihui-editor';
import { SidePanel } from 'zhihui-editor/lib/side-panel';
import { Toolbar } from 'zhihui-editor/lib/toolbar/toolbar';
import { ZoomButtons } from 'zhihui-editor/lib/toolbar/zoomButtons';
import { Workspace } from 'zhihui-editor/lib/canvas/workspace';

import { createStore } from 'zhihui-editor/lib/model/store';

export const App = () => {
  const store = createStore();

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ZhihuiEditorContainer>
        <SidePanelWrap>
          <SidePanel store={store} />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar store={store} />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </ZhihuiEditorContainer>
    </div>
  );
};
```

## 设计理念

:::info

在我们使用React的时候知道，本质上我们所有的UI都是可以通过数据驱动，只是我们在使用canvas的时候对里面操作的增、删、改、查没有建立起这种数据驱动，那我们完全可以自己建立这种数据驱动的规范，建立一个集中的数据模型（Store）里面的属性映射这canvas画布中的各个元素。通过这种集中的数据管理来操作着我们的画布，更为便捷也更为好管理。

:::

### 状态树(Store)

Store（状态树）是控制画布数据和元素的主要对象。它提供用于添加/更新/删除画布对象、撤消/重做、选择更改、缩放等 API。

```jsx
import { createStore } from 'zhihui-editor/lib/model/store';

const store = createStore();
// 开发模板面板
store.openSidePanel('templates');
```

### 工作画布组件

用于在页面上绘制画布应用程序的 React 组件；具有常见编辑的基本功能：选择、调整大小、实际绘制对象、捕捉等。

```jsx
import { Workspace } from 'zhihui-editor/lib/canvas/workspace';

const App = () => {
  return <Workspace store={store} />;
};
```

### UI组件

用于通用画布编辑器应用程序的 React 组件集。

- 有用于基本对象操作的工具栏组件（例如对齐、删除、复制、更改文字对象或图片对象样式等）。
- 有用于添加新对象或新模板的侧面板组件。
- 有操作缩放的按钮组件。
- 下载组件。
- ...

```jsx
import { ZhihuiEditorContainer, SidePanelWrap, WorkspaceWrap } from 'zhihui-editor';
import { Toolbar } from 'zhihui-editor/lib/toolbar/toolbar';
import { ZoomButtons } from 'zhihui-editor/lib/toolbar/zoom-buttons';
import { SidePanel } from 'zhihui-editor/lib/side-panel';
import { Workspace } from 'zhihui-editor/lib/canvas/workspace';

export const App = () => {
  const store = createStore();

  return (
    <ZhihuiEditorContainer style={{ width: '100vw', height: '100vh' }}>
      <SidePanelWrap>
        <SidePanel store={store} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </ZhihuiEditorContainer>
  );
};
```

### 样式

大部分的 <Highlight color="#dfd9fe">Zhihui Editor</Highlight> UI 都是用[Tailwind CSS](https://tailwindui.com/)框架制作的，如果您正在制作自己的自定义 UI 界面或其他组件，我们建议您还是尽可能使用 Tailwind CSS。但是，您始终可以使用自己的自定义解决方案或其他样式框架。

Zhihui Editor 也使到用了 [HeadlessUI](https://headlessui.com/) 和 [IconPark](https://iconpark.oceanengine.com/home)

### 状态管理

Zhihui Editor 的状态管理核心是使用[mobx](https://mobx.js.org/README.html)库构建的，您可以利用 <code>mobx</code> API 为您自己的应用程序添加一些状态。在React框架中，您将需要用到[mobx-state-tree](https://mobx-state-tree.js.org/intro/welcome)库的 <code>observer()</code> 函数来观察数据的变化是必不可少的。

```jsx
import { observer } from 'mobx-react-lite';

const App = observer(({ store }) => {
  return (
    <div>
      <p>当前页面上所有的元素{store.objects.length}</p>
    </div>
  );
});
```
