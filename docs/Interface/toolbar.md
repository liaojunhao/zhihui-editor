---
sidebar_position: 4
---

import StyledIframe from '@site/src/components/StyledIframe';
import Highlight from '@site/src/components/Highlight';

# Toolbar UI

<Highlight color="#dfd9fe">Toolbar</Highlight> 组件，用于更改画布上的元素，它具有很多对画布操作的功能，比如：排序、对齐、撤消/重做、修改画布背景、添加文字图片元素等。

![示例横幅](./img/toolbar_img.png)

基本的用法：

```js
import { Toolbar } from 'zhihui-editor/lib/toolbar/toolbar';
import { Workspace } from 'zhihui-editor/lib/canvas/workspace';

const App = ({ store }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        margin: 'auto',
        flex: 1,
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <Toolbar store={store} />
      <Workspace store={store} />
    </div>
  );
};
```

此外，<Highlight color="#dfd9fe">Toolbar</Highlight> 组件还具有其他属性，可以隐藏某些元素并覆盖某些属性的输入。

```js
type ToolbarProps = {
  store: StoreType,
  downloadButtonEnabled?: Boolean, // 是否显示下载按钮，默认 false
  // 请参阅下面的示例，了解如何使用它
  components?: any,
};

// 例子
<Toolbar store={store} downloadButtonEnabled={true} />;
```

## 如何覆盖元素类型的默认设置？​

Toolbar 支持通过设置 <Highlight color="#dfd9fe">components</Highlight> 属性来，添加/删除/更改其大部分的UI组件。

在某些应用程序中，您可能想要更改所选元素类型的可用属性。例如，您可能想要为 <Highlight color="#dfd9fe">textbox</Highlight> 元素显示不同的颜色选择器。只需要以对应的格式传递给组件 <Highlight color="#dfd9fe">TypeName</Highlight>，例如 <Highlight color="#dfd9fe">TextFill</Highlight>。您可以使用所有内置元素类型，如<Highlight color="#dfd9fe">textbox</Highlight>、<Highlight color="#dfd9fe">image</Highlight>、<Highlight color="#dfd9fe">Svg</Highlight>等，您还可以为任何元素类型定义自己的新组件，例如<Highlight color="#dfd9fe">ImageAlertButton</Highlight>。

有几个内置组件，但您也可以添加自己的组件。

```jsx
textbox element:
  TextAdd
  TextFontFamily
  TextFontSize
  TextFill
  TextWeight
  TextItalic
  TextUnderline
  TextLinethrough
  TextAlign
  TextSplit
  TextSpacing
  TextPresets
  TextEffect

image element:
  ImageAdd
  ImageFlip
  ImageEffect
  ImageCrop
  ImagePresets
  ImageMask

  // 付费功能（不可替换的）
  ImageRemoveBackground
  ImageComic

svg element:
  SvgColors
  SvgEffect

common:
  History
  Default
  Group
  Position
  Opacity
  Lock
  Duplicate
  Remove

```

```jsx
import Toolbar from 'zhihui-editor/toolbar/toolbar';
import Workspace from 'zhihui-editor/canvas/workspace';
import { observer } from 'mobx-react-lite';

const MyColorPicker = observer(({ store }) => {
  // store - 主要控制 Zhihui Editor 的数据对象
  // elements -  选中的元素数组。与 store.selectedElements 相同
  const elements = store.selectedElements;
  // element - 第一个选中的元素。与 store.selectedElements[0] 相同
  const element = store.selectedElements[0];
  return (
    <div>
      <input
        type="color"
        value={element.fill}
        onChange={(e) => {
          console.log('e.target.value', e.target.value);
          store.setTextFill('rgba', e.target.value);
        }}
      />
    </div>
  );
});

// 作为示例，让我们禁用默认的加图加字的组件
// 您只需要返回组件为null
const Default = () => null;

// 我们也可以发明自己的新组件
const TextAlertButton = observer(({ store }) => {
  return (
    <button
      onClick={() => {
        alert('Hello!');
      }}
    >
      Alert
    </button>
  );
});

// 我们还可以通过历史组件禁用默认的撤消/重做按钮
const History = () => null;

const App = ({ store }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        margin: 'auto',
        flex: 1,
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <Toolbar
        store={store}
        components={{
          TextFill: MyColorPicker,
          Default,
          TextAlertButton,
          History
        }}
      />
      <Workspace store={store} />
    </div>
  );
};
```

## 如何一次覆盖所有默认组件？

按照[自定义元素示例](/docs/)，您可以为任何可用元素创建自己的 React 组件。

请记住将您的组件包装在库 <Highlight color="#dfd9fe">observer</Highlight> 中 <Highlight color="#dfd9fe">mobx-react-lite</Highlight> 以增加组件的数据响应性。

例子：

```jsx
import { unstableRegisterToolbarComponent } from 'zhihui-editor/lib/config';

const TextToolbar = observer(({ store }) => {
  const element = store.selectedElements[0];

  return <div>自定义文字工具</div>;
};

unstableRegisterToolbarComponent('textbox', TextToolbar);
```

## 如何覆盖“下载”按钮

在工具栏的右侧，Zhihui Editor 有“ActionControls”部分。您可以使用 <code>components</code> prop 覆盖此部分。

:::tip

尽可能不使用“ActionControls”部分，<Highlight color="#dfd9fe">Toolbar</Highlight> 组件已经有很多工具了，因此，最好为其提供尽可能多的可用宽度。您可以将“ActionControls”放在应用程序 UI 的其他位置。例如，查看 [Demo](https://static.taishan.qq.com/h5/desgin/index.html)，下载按钮位于应用程序顶部，而不是 <Highlight color="#dfd9fe">Toolbar</Highlight>。

:::

```jsx
import { Toolbar } from 'zhihui-editor/toolbar/toolbar';

const MyToolbar = ({ store }) => {
  return (
    <Toolbar
      store={store}
      components={{
        ActionControls: () => {
          return (
            <div>
              <button>MyCustomSave</button>
            </div>
          );
        }
      }}
    />
  );
};
```

以上所有案例的代码demo：

<StyledIframe src='https://codesandbox.io/embed/sly6rx?view=preview&module=%2Fsrc%2FApp.js&hidenavigation=1' title="Toolbar" height="750"></StyledIframe>
