---
sidebar_position: 1
---

import Highlight from '@site/src/components/Highlight';

# 导入和导出

<Highlight color="#dfd9fe">Zhihui Editor</Highlight> 提供了一套全面的设计导入和导出工具，可满足从简单的 JSON 文件处理到高质量图像和PDF导出等各种需求。本文档概述了 Zhihui Editor 的各种导入和导出功能，并提供了每种格式的详细说明和用例。

#### 用例

1. **JSON导入和导出**：保存和加载设计状态、共享模板或与其他利用 JSON 的系统集成。
2. **图像导出（PNG、JPEG）**：创建用于数字用途、社交媒体或打印的高质量图像。
3. **PDF导出**：制作高质量的印刷品，特别适用于营销材料、书籍和文档。
4. **PSD/figma等设计文件的导入**：对PSD、figma等设计文件的解析，转换为 Zhihui Editor 的 JSON。

## 导入设计

Zhihui Editor 允许您从 JSON 文件导入设计。此功能非常适合将已保存的设计状态或模板加载到 Zhihui Editor 编辑器中。无论您是恢复以前的项目还是与团队成员共享模板，导入 JSON 文件都可以确保无缝的工作流程。JSON必须遵循 Zhihui Editor 的[存储结构](/docs/store-api/store-overview)。

:::note

由于 Zhihui Editor 底层使用的是 [fabricjs](http://fabricjs.com/) 库，所以存储结构只要符合fabricjs的数据格式，就一样可以支持导入

:::

Zhihui Editor 的免费版不支持导入其他格式，如 PDF、PPT、PSD等。但您可以编写自己的工具将其他格式转换为 Zhihui Editor 的 JSON 来导入。如果您需要我们来支持多格式解析的功能，[订阅](/pricing) 我们的付费版或请 [联系我们](/contact) 进行合作。

## 导出设计

有关每种类型的详细导出选项，请查看 [Store API](/docs/store-api/store-overview)

### JSON 导出

Zhihui Editor 可以将当前设计导出为 JSON 文件。此功能对于保存您的工作、与他人共享模板或与其他系统集成非常有用。JSON 导出可捕获整个设计状态，便于以后重新加载和编辑设计。

```jsx
store.toJSON();
```

### PNG 和 JPEG 导出

Zhihui Editor 支持将设计导出为 PNG 和 JPEG 格式，并可配置质量设置。您可以根据需要直接在浏览器上执行这些导出。无论您是为数字用途、社交媒体还是打印创建高质量图像，Zhihui Editor 都提供调整质量设置的灵活性，以在文件大小和图像质量之间取得平衡。

```jsx
await store.saveAsImage();
await store.toDataURL();
```

### PDF 导出

您可以使用 Zhihui Editor 将设计导出为 PDF 文件。目前，这些 PDF 包含光栅图像 (JPEG)，而不是矢量图形。但是，它们可以以非常高的质量导出，适合打印。客户端和服务器端导出选项均可用，为不同的工作流程提供灵活性。

```jsx
store.saveAsPDF();
```
