<br>
<p align="center">
<a href="https://liaojunhao.github.io/zhihui-editor" target="_blank">
<img src="https://zhihui.gtimg.com/logo3.png" alt="Slidev" height="200" width="200"/>
</a>
</p>
<br>

<h3 align="center">
面向开发者的<b>在线图形编辑器</b> 🧑‍💻👩‍💻👨‍💻
</h3>
<p align="center">基于 fabric.js 和 React 开发的图形编辑器，用于制作您自己的类似画布设计编辑器的 JS 框架</p>

<p align="center">
<a href="https://www.npmjs.com/package/zhihui-editor" target="__blank"><img src="https://img.shields.io/npm/v/zhihui-editor?color=3a2be0" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/zhihui-editor" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/zhihui-editor?color=3a2be0&label="></a>
<a href="https://liaojunhao.github.io/zhihui-editor" target="__blank"><img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=3a2be0" alt="Docs & Demos"></a>
<a href="https://github.com/liaojunhao/zhihui-editor?tab=MIT-1-ov-file" target="__blank"><img src="https://img.shields.io/github/license/liaojunhao/zhihui-editor?color=3a2be0" alt="MIT"></a>
<br>
<a href="https://github.com/liaojunhao/zhihui-editor" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/liaojunhao/zhihui-editor?style=social"></a>
</p>

<p align="center">
  <a href="https://static.taishan.qq.com/h5/desgin/index.html">示例</a> | <a href="https://liaojunhao.github.io/zhihui-editor">文档</a>
</p>

<div align="center">
<table>
<tbody>
<td align="center">
<img width="2000" height="0" alt="" aria-hiden><br>
<sub> <a href="https://liaojunhao.github.io/zhihui-editor/pricing">订阅我们 </a> 💖是支持我们最大的动力</sub><br>
<img width="2000" height="0" alt="" aria-hiden>
</td>
</tbody>
</table>
</div>

## 特征

- 📝 [**开箱即用**](https://liaojunhao.github.io/zhihui-editor/docs/intro) - 简单的配置即可获得功能齐全的图像编辑器
- 🧑‍💻 [**自定义样式**](https://liaojunhao.github.io/zhihui-editor/docs/theme) - 高度自定义扩展，可个性化为自己喜爱的样式
- 🎨 [**设计资源**](https://liaojunhao.github.io/zhihui-editor) - 10万+优质模板、创意素材随心选
- 📤 [**多种格式导出**](https://liaojunhao.github.io/zhihui-editor/docs/misc/import-and-export) - 导出PDF、PNG、JPG、JSON等多种格式
- 🛠 [**高可扩展**](https://liaojunhao.github.io/zhihui-editor) - 所有对画布的工具组件都可自定义扩展，高度个性化定制，匹配各种场景
- 🤹 [**结合AI**](https://liaojunhao.github.io/zhihui-editor/blog) - 结合各种AI能力，来提效编辑器功能的创新型，提高生产效率

## 快速开始

### 在线尝试 ⚡️

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/vitejs-vite-wuhy4n?file=src%2FApp.jsx)

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

## 核心技术栈

- [React](https://react.dev/) - 用于渲染用户界面 (UI) 的 JavaScript 库
- [Rollup](https://rollupjs.org/) - 用于 JavaScript 的模块打包工具
- [Tailwind CSS](https://tailwindui.com/) - 是一个功能类优先的 CSS 框架，它提供了一套预先定义的类，提供了构建组件的原子类
- [Fabric.js](http://fabricjs.com/) - 是一个强大而简单的Javascript **HTML5画布库**
- [IconPack](https://iconpark.oceanengine.com/) - 图标库
- [Mobx](https://mobx.js.org/) - 状态管理库

## License

Licensed under the MIT License.

<br>
