---
sidebar_position: 7
---

import Highlight from '@site/src/components/Highlight';

# Element

<Highlight color="#dfd9fe">Element</Highlight> 表示画布中或组上的图形对象。元素可以具有以下类型之一：

- textbox
- image
- group
- rect
- line
- ellipse
- polygon
- triangle
- circle

:::note

由于我们底层使用的是fabricJS，元素类型跟fabricJS中的类型一一对应。

:::

```js
const element = store.addElement({
  type: 'textbox',
  left: 50,
  top: 50,
  fill: 'black',
  text: 'hello'
});
```

## 基本操作

### 读取属性​

您可以随时访问元素的任何属性。请参阅每种类型元素的文档以查看所有可用属性。

```js
const element = store.selectedElements[0];
// 元素类型
console.log(element.type);
// 元素id
console.log(element.id);
```

### <Highlight color="#dfd9fe">element.set(attrs)​</Highlight>

开发中...

### 自定义属性

开发中...

### <Highlight color="#dfd9fe">store.moveElementsUp(element)​</Highlight>

向上移动元素 z-index

```js
store.moveElementsUp(element);
```

### <Highlight color="#dfd9fe">store.moveElementsDown(element)​</Highlight>

向下移动元素 z-index

```js
store.moveElementsDown(element);
```

### <Highlight color="#dfd9fe">store.moveElementsTop(element)​​</Highlight>

将元素移动到画布图层的顶部。

```js
store.moveElementsTop(element);
```

### <Highlight color="#dfd9fe">store.moveElementsBottom(element)</Highlight>

将元素移动到画布图层的底部。

```js
store.moveElementsBottom(element);
```

## 锁定

### <Highlight color="#dfd9fe">store.toLock()</Highlight>

锁定元素（方法会自动存储一份历史记录）

```js
store.toLock();
```

### <Highlight color="#dfd9fe">store.unLock()</Highlight>

解锁元素（方法会自动存储一份历史记录）

```js
store.unLock();
```

### <Highlight color="#dfd9fe">element.lockMovementX</Highlight>

可以通过元素的 <code>element.lockMovementX</code> 属性来判断元素是否处于锁定状态

```js
const firstSelected = store.selectedElements[0];

const isLocked = firstSelected ? firstSelected?.lockMovementX : false;
```

## 文字元素

文本元素允许您在画布上创建文本

### <Highlight color="#dfd9fe">store.addElement(element)</Highlight>

这是默认属性的示例：

```js
store.addElement({
  type: 'textbox',
  left: 100,
  top: 100,
  width: 200,
  text: 'Hello, Fabric!',
  fontSize: 20,
  fill: 'black',
  fontFamily: 'Arial',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textAlign: 'left',
  lineHeight: 1.2,
  editable: true
});
```

:::tip

画布底层用的是fabricJS，关于元素的更多属性可以查看 [fabricJS](http://fabricjs.com/docs/)

:::

## 图片元素

### <Highlight color="#dfd9fe">await store.addImg(url)</Highlight>

图像元素将在画布上绘制图像。默认情况下，图像将进行缩放到画布适合的大小。

```js
store.addImg(url);
```

## 适量图像

- SVG element
- Line element
- ellipse element
- polygon element
- triangle element
- rect element
- circle element

以上类型都可以通过 <code>store.addElement(element)</code> 方法来添加

以添加rect类型为例：

```js
store.addElement({
  type: 'rect',
  left: 100,
  top: 100,
  width: 60,
  height: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 2
});
```

:::tip

画布底层用的是fabricJS，关于适量图形更多属性可以查看 [fabricJS](http://fabricjs.com/docs/fabric.Rect.html)

:::

## 组元素

添加组元素，可以将多个元素打成一个组添加，一样可以通过 <code>store.addElement(element)</code> 方法来添加

```js
store.addElement({
  type: 'group',
  left: 100,
  top: 100,
  id: 'MyCustomId',
  name: 'MyCustomName',
  objects: [
    {
      type: 'rect',
      left: -50, // 相对于组的位置
      top: -50,
      width: 100,
      height: 100,
      fill: 'red'
    },
    {
      type: 'circle',
      left: 50,
      top: 50,
      radius: 50,
      fill: 'green'
    }
  ]
});
```

:::tip

每次添加元素的JSON数据，最好都添加上自定义的 id 跟 name，这个两属性虽不是fabric的标准，但是会更方便 Zhihui Editor 定位元素。

:::
