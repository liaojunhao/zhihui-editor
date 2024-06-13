---
sidebar_position: 1
---

import Highlight from '@site/src/components/Highlight';

# 云渲染

## 什么是云渲染 API？

使用 Zhihui Editor SDK，您可以直接在客户端生成图像。但有时您需要在后端生成图像。例如：您想生成 1,000 张带有不同文本的图像，或者如果您想简单地从客户端卸载渲染工作。

Zhihui Editor Cloud Render API 允许您在云端生成图像，无需任何后端基础设施。您可以使用它即时生成图像或批量生成图像。

## 订阅

Cloud Render API 仅适用于商业计划订阅者。如需更多信息，请查看[定价](/pricing)。如果您有任何疑问，请写[联系我们](/contact)。

## 它是什么样子的？

### 1.创建渲染任务

您可以向云渲染 API 发送 POST 请求来创建渲染任务。

:::tip

**重要提示**：所有生成的图像url，都将有有效期。需要调整可以 [联系我们](/contact)。

:::

```jsx
const req = await fetch('https://api.zhihui-editor.com/api/renders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify({
    // Zhihui Editor json 来自于 store.toJSON() 函数的返回
    design: json,
    // 您可以在这里传递其他渲染选项
    pixelRatio: 1
    // 请参阅下文参数项的完整详细信息
  })
});

const task = await req.json();

console.log(task);
```

它将返回一个 JSON 格式，如下：

```jsx
{
    "id": "{任务id}",
    "status": "rendering", // can be "rendering", "done" or "error"
    "output": null, // 当渲染任务完成后将返回一个有效期7天的url
    "error": "", // error logs
    "created_at": "2024-06-13T01:51:36.913628+00:00",
    "completed_at": null,
    "started_at": null,
    "updated_at": null,
    "logs": ""
}
```

### 2.检查渲染任务状态：

```jsx
// 将 taskId 替换为实际的任务id
const req = await fetch('https://api.zhihui-editor.com/api/renders/taskId');
const task = await req.json();

console.log(task);

if (task.status === 'done') {
  console.log(task.output); // 文件url，仅7天有效期。
}
```

#### 参数

<Highlight color="#dfd9fe">design</Highlight>：json - 必需来自 Zhihui Editor 导出 store.toJSON() 的数据。您可以从后端动态生成此类 JSON（例如，动态替换某些元素上的文本等）。

<Highlight color="#dfd9fe">format</Highlight>：string - 输出图像的格式。可能的值为：<Highlight color="#dfd9fe">png</Highlight>（默认）、<Highlight color="#dfd9fe">jpeg</Highlight> 和 <Highlight color="#dfd9fe">pdf</Highlight>。

<Highlight color="#dfd9fe">multiplier</Highlight>：number - 图像的缩放比例，默认是 1。

<Highlight color="#dfd9fe">quality</Highlight>：number - 质量等级 (0..1)。仅用于 jpeg。

:::note

更多参数设置在开发中...

:::

### 3.查看渲染任务的队列情况

```jsx
const req = await fetch('https://api.zhihui-editor.com/api/renders/list?page=1&per_page=100');
const task = await req.json();

console.log(task.renders);
```
