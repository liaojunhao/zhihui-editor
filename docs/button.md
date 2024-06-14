---
sidebar_position: 5
---

import Highlight from '@site/src/components/Highlight';

# Zhihui Editor Button

<Highlight color="#dfd9fe">Zhihui Editor Button</Highlight> 是一个专用脚本，可以轻松高效地将 Zhihui Editor 嵌入到任何网站。只需一个简单的按钮，您就可以为您的应用程序提供任何设计定制的新维度。

## 为什么要使用 Zhihui Editor Button？

使用 Zhihui Editor Button 可以显着使您的网站受益，并最终使您的业务受益，有几个关键原因：

- **用户友好型设计**： 在线设计工具（如 Zhihui Editor）通过精确且用户友好的用户界面突破了创造力的界限，即使是非专业用户也能创作出引人注目的设计。通过将 Zhihui Editor Button 整合到您的应用程序中，您可以为用户提供超越传统设计界限所需的工具。
- **无缝集成**： Zhihui Editor Button 可以无缝集成到您的网站，无需大量编码或复杂的功能。
- **节省时间和资源**： 使用 Zhihui Editor Button，用户可以轻松在您的平台内制作设计。这可以减少对外部设计平台或软件的需求，从而节省时间和资源。
- **提高参与度**： 为用户提供创建和自定义设计的能力可以提高平台上的用户参与度。

## 如何集成 Zhihui Editor Button？

1. 将 Zhihui Editor Button 脚本添加到您的网站。

```js
<script src="https://zhihui-editor.com/button.js"></script>
```

2. 在页面的某处创建按钮。

```js
<button id="zhihui-editor-button">Open Editor</button>
```

3. 使用您的 token 密钥初始化 Zhihui Editor Button。

```js
<script>
const button = document.getElementById('zhihui-editor-button');
button.addEventListener('click', () => {
  window.createZhihuiEditor({
    token: 'my-token',
    onPublish: ({ dataURL, json }) => {
      // 对生成的图像进行一些操作
      // 您还可以将 json 保存在某处并在稍后加载
    },
  });
});
</script>
```

## Zhihui Editor Button 选项

Zhihui Editor Button 可以根据您的需要进行定制。

```js
window.createZhihuiEditor({
  key: 'my-token',
  // 选择要展示的侧边面板
  sections: ['templates', 'materials', 'text', 'shapes', 'upload', 'background', 'layers', 'size'],
  defaultSection: 'templates', // 默认展示的侧边面板
  // 画布的初始大小
  width: 500,
  height: 300,
  // 从 json 文件加载模板
  jsonUrl: 'https://static.taishan.qq.com/demo-data/template_demo_5.json',
  // 从 json 对象加载模板
  json: {
    // 模板的 json 对象
  },
  // change default text of the publish button
  publishLabel: 'Save',
  onPublish: ({ dataURL, json }) => {
    document.getElementById('result').src = dataURL;
    console.log('json', json);
  },
  // 编辑器中任何更改执行的回调
  // 可以把返回的json存储到某处，以便稍后恢复，或者可以手动将 JSON 保存到服务器
  onChange: ({ json }) => {
    console.log('json', json);
  },
  // 你可以初始化自己的图片
  // 把他显示在上传侧边面板中
  uploads: [
    {
      url: 'https://example.com/image.jpg',
      preview: 'https://example.com/image.jpg'
    }
  ],

  // 您也可以翻译完整的 UI，向我们索取键列表
  translations: {
    sidePanel: {
      templates: '我的模板'
    }
  }
});
```
