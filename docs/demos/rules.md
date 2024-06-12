---
sidebar_position: 3
---

import Highlight from '@site/src/components/Highlight';

# 画布标尺

:::info

开发中...

:::

<Highlight color="#dfd9fe">Zhihui Editor</Highlight> 画布编辑器中的标尺功能可确保一致的对齐和精度，从而增强设计凝聚力。通过定义指导方针和约束，它们简化了设计过程，使用户能够有效地创建精美的作品。

## 如何启用标尺功能

要从代码中控制标尺功能，您可以使用 [Store API](/docs/store-api/store-overview)。

```jsx
// 隐藏/显示 标尺功能
store.toggleRulers();

// 检查标尺功能当前是否可见。
console.log(store.rulesVisible);
```
