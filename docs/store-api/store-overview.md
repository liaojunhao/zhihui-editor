---
sidebar_position: 5
---

import Highlight from '@site/src/components/Highlight';

# Store

<Highlight color="#dfd9fe">Store</Highlight> 是您将要使用到的基本数据模型对象，它有%90的API方法都来自于<Highlight color="#dfd9fe">Zhihui Editor</Highlight>

```jsx
import { createStore } from 'zhihui-editor/lib/model/store';

const store = createStore({
  token: 'YOUR_TOKEN' // 联系我们智绘助手获取
});
```

## 画布

### <Highlight color="#dfd9fe">store.clear()</Highlight>

清除画布上所有元素。

```js
store.clear(); // 它将删除所有数据但保留撤消历史记录

// 启动深度清理
store.clear({ keepHistory: true }); // 它将删除所有数据并重置撤消历史记录
```

### <Highlight color="#dfd9fe">store.setSize(width, height)</Highlight>

设置工作区域的尺寸。

```js
store.setSize(1000, 500);
```

### <Highlight color="#dfd9fe">store.width</Highlight> and <Highlight color="#dfd9fe">store.height​</Highlight>

返回工作区域的宽高。

```js
console.log('宽度为', store.width);
```

### <Highlight color="#dfd9fe">store.scale​</Highlight>

获取当前画布的缩放值

```js
console.log('zoom is', store.scale);
```

### <Highlight color="#dfd9fe">store.setScale(zoom)​</Highlight>

设置当前画布的缩放值

```js
store.setScale(3);
```

## UI

### <Highlight color="#dfd9fe">store.openedSidePanel</Highlight>

获取当前侧边面板的激活状态
:::note

默认的侧边面板有：templates、text、materials、background、upload、layers、size、shapes

:::

### <Highlight color="#dfd9fe">store.openSidePanel(panelName)​</Highlight>

手动设置侧边面板的状态

```js
store.openSidePanel('templates');
```

## 元素

### <Highlight color="#dfd9fe">store.selectedElements</Highlight>

返回画布上选中的元素数组

```js
const firstSelected = store.selectedElements[0];
```

### <Highlight color="#dfd9fe">store.selectElements(element)</Highlight>

设置选择画布上的元素

```js
store.selectElements([element1, element2]);
```

### <Highlight color="#dfd9fe">store.removerElement(element)</Highlight>

删除画布中选择的元素， <code>element</code> 可传可不传，默认会获取当前聚焦的元素

```js
store.removerElement(element?);
```

### <Highlight color="#dfd9fe">store.getElementById(id)</Highlight>

通过传递的 id 查找画布中的元素

```js
const element = store.getElementById('id');

console.log(element); // 普通对象，不具备fabric元素实例的方法
```

### <Highlight color="#dfd9fe">store.groupElements()</Highlight>

组元素，它将创建一个 <code>type</code> 类型为 <Highlight color="#dfd9fe">group</Highlight> 的组元素，不需要传递参数，默认获取画布中聚焦元素来打组。

```js
store.groupElements();
```

### <Highlight color="#dfd9fe">store.ungroupElements()</Highlight>

取消元素的分组。它将把组内的所有元素移动到页面并删除该组，不需要传递参数，默认获取画布聚焦 <code>type</code> 类型为 <Highlight color="#dfd9fe">group</Highlight> 的组元素来分组。

```js
store.ungroupElements();
```

## 历史记录

### <Highlight color="#dfd9fe">store.canUndo</Highlight>

查看是否有撤销

### <Highlight color="#dfd9fe">store.canRedo</Highlight>

查看是否有重做

### <Highlight color="#dfd9fe">store.history.undo()</Highlight>

撤销回上一次修改

```js
store.history.undo();
```

### <Highlight color="#dfd9fe">store.history.redo()</Highlight>

重做更改

```js
// 取消更改
store.history.undo();

// 再次应用更改
store.history.redo();
```

### <Highlight color="#dfd9fe">store.history.initialize()​</Highlight>

清除历史记录

## 序列化

### <Highlight color="#dfd9fe">store.toJSON()​</Highlight>

将画布中的元素，导出为对象数组

```js
const json = store.toJSON();

// 存储JSON到某处
saveIntoBackend(JSON.stringify(json));
```

### <Highlight color="#dfd9fe">store.loadJSON(json, keepHistory?)​</Highlight>

将传递的 json 加载到存储中。它将更新所有属性、页面和元素。默认情况下，将 JSON 加载到存储中将重置撤消/重做历史记录（因此用户无法撤消它）。如果您想保留历史记录，可以使用 keepHistory 参数。

```js
import { createStore } from 'zhihui-editor/lib/model/store';
const store = createStore({
  token: YOUR_TOKEN // 联系我们智绘助理获取: https://liaojunhao.github.io/zhihui-editor/pricing
});

// 在某个时间点保存为JSON
const json = store.toJSON();

// 加载 JSON
// 注意 json 是个 javascript 对象
// 如果您有一个 json 字符串，则可能需要解析它 - JSON.parse(string);
store.loadJSON(json);

// 清空历史记录后来加载 JSON
store.loadJSON(json, true);
```

## 事件

### <Highlight color='#dfd9fe'> store.on('change', () => \{\}) </Highlight>

监听 store 中的任何变化。该事件可能会在某些操作（例如调整大小或拖动）时频繁触发。<code>store.on()</code> 将返回取消订阅功能。

```js
// 取消监听功能
const off = store.on('change', () => {
  console.log('something changed');
});
// 该行将取消监听该事件
off();

// 编写一个节流函数
let timeout = null;
const requestSave = () => {
  // 如果已请求保存 - 则不执行任何操作
  if (timeout) {
    return;
  }
  // 保存数据到后端
  timeout = setTimeout(() => {
    // 重置超时
    timeout = null;
    // 导出JSON数据
    const json = store.toJSON();
    // 报错数据到后台
    fetch('https://example.com/designs', {
      method: 'POST',
      body: JSON.stringify(json)
    });
  }, 1000);
};

// 请求对任何更改进行保存操作
store.on('change', () => {
  requestSave();
});
```

## 导出

### <Highlight color='#dfd9fe'>await store.saveAsImage()​</Highlight>

saveAsImage 将绘图导出为图像并将其保存为本地文件。

```js
// 默认导出
store.saveAsImage({ format: 'png', quality: 1, multiplier: 1 });

// 导出 jpg
store.saveAsImage({ format: 'jpeg', quality: 1, multiplier: 1 });

// 使导出的图像放大 2 倍
store.saveAsImage({ format: 'png', quality: 1, multiplier: 2 });

// 控制大小跟质量（质量只有jpeg格式才生效，png默认已最高质量）
store.saveAsImage({ format: 'jpeg', quality: 0.5, multiplier: 2 });

// 自定义名称
store.saveAsImage({ fileName: 'zhihui-editor.png', format: 'png', quality: 1, multiplier: 1 });
```

### <Highlight color='#dfd9fe'>await store.toDataURL()​​</Highlight>

将存储导出为 Base64 URL 格式的图像

### <Highlight color='#dfd9fe'>await store.toBlob()​</Highlight>

将存储导出到 blob 对象，它可能比 toDataURL 方法性能更优

## 字体

### <Highlight color='#dfd9fe'>store.addFont(\{ fontFamily, src, img \})​</Highlight>

添加新自定义字体的功能。添加的字体将保存到文字侧面板中。如果您想添加全局可用的字体，请查看[字体教程](/docs/config#3全局字体)。

```js
store.addFont({
  fontFamily: 'MyCustomFont', // 字体名字
  url: serverUrlOrBase64, // 字体链接
  img: 'MyCustomFontImg' // 字体预览图
});
```

或者您可以直接在 store 中注册字体，然后手动将所需的 字体CSS 添加到页面中：

```js
store.addFont({
  fontFamily: 'MyCustomFont'
});
```

### <Highlight color='#dfd9fe'>store.removeFont(name)​​</Highlight>

按名称从 store 中删除自定义字体

```js
store.removeFont('MyCustomFont');
```

### <Highlight color='#dfd9fe'>store.loadFont(name)​</Highlight>

加载自定义的远程字体，但如果您想要在 UI 的某个地方显示字体列表，它会很有用。<Highlight color='#dfd9fe'>store.loadFont(name)​</Highlight>函数会向网页添加字体，以便浏览器可以呈现正确的字体。

:::note

我们网页使用的字体都是通过 @font-face 的CSS @规则添加的，它允许网页开发者为其网页指定在线字体。通过这种作者自备字体的方式，@font-face 可以消除对用户电脑字体的依赖。 @font-face 不仅可以放在在 CSS 的最顶层，也可以放在 @规则 的 [条件规则组](https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule#conditional_group_rules) 中。

:::

```css
@font-face {
  font-family: 'Open Sans';
  src:
    url('/fonts/OpenSans-Regular-webfont.woff2') format('woff2'),
    url('/fonts/OpenSans-Regular-webfont.woff') format('woff');
}
```
