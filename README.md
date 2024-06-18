<br>
<p align="center">
<a href="https://liaojunhao.github.io/zhihui-editor" target="_blank">
<img src="https://zhihui.gtimg.com/logo3.png" alt="Slidev" height="250" width="250"/>
</a>

</p>
<h3 align="center">
面向开发者的<b>在线图形编辑器</b> 🧑‍💻👩‍💻👨‍💻
</h3>
<p align="center">基于 fabric.js 和 React 开发的图片编辑器，用于制作您自己的类似画布的设计编辑器的 JS 框架。</p>

<p align="center">
<a href="https://www.npmjs.com/package/zhihui-editor" target="__blank"><img src="https://img.shields.io/npm/v/zhihui-editor?color=3a2be0" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/zhihui-editor" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/zhihui-editor?color=3a2be0&label="></a>
<a href="https://liaojunhao.github.io/zhihui-editor" target="__blank"><img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=3a2be0" alt="Docs & Demos"></a>
<a href="https://github.com/liaojunhao/zhihui-editor?tab=MIT-1-ov-file" target="__blank"><img src="https://img.shields.io/github/license/liaojunhao/zhihui-editor?color=3a2be0" alt="MIT"></a>
<br>
<a href="https://github.com/liaojunhao/zhihui-editor" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/liaojunhao/zhihui-editor?style=social"></a>
</p>

<p align="center">
  <a href="https://static.taishan.qq.com/h5/desgin/index.html">演示示例</a> | <a href="https://liaojunhao.github.io/zhihui-editor">文档</a>
</p>

<div align="center">
<table>
<tbody>
<td align="center">
<img width="2000" height="0" alt="" aria-hiden><br>
<sub> <a href="https://liaojunhao.github.io/zhihui-editor/pricing">订阅我们 💖</a> 是支持我们最大的动力</sub><br>
<img width="2000" height="0" alt="" aria-hiden>
</td>
</tbody>
</table>
</div>

## 特征

- 📝 [**开箱即用**](https://liaojunhao.github.io/zhihui-editor/docs/intro) - 简单的配置即可获得功能齐全的图像编辑器
- 🧑‍💻 [**自定义样式**](https://liaojunhao.github.io/zhihui-editor/docs/theme) - 高度自定义扩展，可个性化为自己喜爱的样式

## 快速开始

### 本地初始化项目

安装 [Node.js >=18](https://nodejs.org/) 并运行以下命令：

```
npm install zhihui-editor
```
初始化演示应用程序（基于 React 框架）：

```js
// css导入
import 'zhihui-editor/lib/zhihui-editor.min.css';

import { WorkspaceWrap, ZhihuiEditorContainer, SidePanelWrap } from 'zhihui-editor';
import { createStore } from 'zhihui-editor/lib/model/store';
import { SidePanel } from 'zhihui-editor/lib/side-panel';
import { Workspace } from 'zhihui-editor/lib/canvas/workspace';
import { Toolbar } from 'zhihui-editor/lib/toolbar/toolbar';
import { ZoomButtons } from 'zhihui-editor/lib/toolbar/zoomButtons';

// 设置语言的方法
import { setTranslations } from 'zhihui-editor/lib/config';

// 默认提供两种语言包
import en_US from 'zhihui-editor/lib/locale/enUS';
import zh_CN from 'zhihui-editor/lib/locale/zhCN';

// 控制工程的辅助工具
import { createProject } from 'zhihui-editor/lib/project';
```

```js
function App() {
  const store = createStore({});
  const project = createProject({ store });

  const init = async () => {
    // 加载字体资源库
    await project.getGlobalFont();
    // 加载模板
    project.firstLoad();
  };

  useEffect(() => {
    init();
  }, []);

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
}
```
## License

1. 您可以免费使用此包用于非商业产品和本地开发过程。
2. 对于商业用途，您必须在这里购买许可证：[zhihui.qq.com](https://zhihui.qq.com/)
3. 请尊重版权。

<br>

