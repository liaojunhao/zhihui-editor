---
sidebar_position: 1
---

import Highlight from '@site/src/components/Highlight';

# SidePanel

<Highlight color="#dfd9fe">SidePanel</Highlight> 提供默认的组件集，用于将新元素、新模板添加到画布中、更改页面大小等。

```jsx
import { SidePanel } from 'zhihui-editor/lib/side-panel';

const MyPanel = () => {
  return (
    <div>
      <SidePanel store={store} />
    </div>
  );
};
```

SidePanel 将自动使用其父级的完整宽度和高度；您不必手动调整其大小。您可以使用 CSS 设置父级 <code>div</code> 的大小。

## 如何自定义侧面板选项卡？

您可以将 <Highlight color="#dfd9fe">sections</Highlight> 属性传递给 SidePanel 组件来手动指定所有可用的选项卡。这是默认的用户界面：

```jsx
import { SidePanel, DEFAULT_SECTIONS } from 'zhihui-editor/lib/side-panel';

// DEFAULT_SECTIONS 默认的侧面板列表

const MyPanel = () => {
  return (
    <div>
      <SidePanel store={store} sections={DEFAULT_SECTIONS} />
    </div>
  );
};
```

您可以通过以下方式手动定义它：

```jsx
import { observer } from 'mobx-react-lite';
import { SidePanel } from 'zhihui-editor/lib/side-panel';

// 导入现有的文字面板
import { TextSection } from 'zhihui-editor/lib/side-panel';

// 导入默认的 tab 组件
import { SectionTab } from 'zhihui-editor/lib/side-panel';

// 定义新的自定义面板
const CustomSection = {
  name: 'custom',
  Tab: (props) => (
    <SectionTab name="Custom" {...props}>
      <span>MyIcon</span>
    </SectionTab>
  ),
  // 我们需要使用 observer 函数监听 store 发生的任何变化来触发组件的更新
  Panel: observer(({ store }: { store: any }) => {
    return (
      <div>
        <p>Here we will define our own custom tab.</p>
        <p>Elements on the current page: {store.objects.length}</p>
      </div>
    );
  })
};

// 添加这两个面板
const sections = [CustomSection, TextSection];

const CustomSidePanel = () => {
  return (
    <SidePanel store={store} sections={sections} defaultSection="custom" />
  );
};
```
