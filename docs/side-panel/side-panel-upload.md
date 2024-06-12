---
sidebar_position: 2
---

import Highlight from '@site/src/components/Highlight';

# UploadPanel

:::tip

**重要提示**：默认上传面板具有最基本的设置。它无法在用户会话之间保留已上传的图像，也不会将图像返回到后端。相反，它会将图像作为 base64 字符串直接注入设计中，这可能会影响性能。强烈建议使用您实现自己的上传面板组件。

:::

## 如何实现上传部分？

<Highlight color="#dfd9fe">Upload</Highlight> 组件的工作方式跟 [图像面板](/docs/side-panel/side-panel-images) 非常相似。您只需要在后端实现几个 API 端点即可允许：

1. 正在加载用户图片列表
2. 正在上传新图片
3. 删除图像

下面的示例不使用真实服务器来实现此功能。它只是使用本地存储来存储图像。但你可以将其作为示例使用。
