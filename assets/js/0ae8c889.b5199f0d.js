"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4933],{2485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(4848),o=t(8453);const i={sidebar_position:3},r="\u9690\u85cf\u9762\u677f",a={id:"side-panel/side-panel-hidden",title:"\u9690\u85cf\u9762\u677f",description:"\u5982\u4f55\u5b9e\u73b0\u201c\u9690\u85cf\u201d\u4fa7\u9762\u677f\uff1f",source:"@site/docs/side-panel/side-panel-hidden.md",sourceDirName:"side-panel",slug:"/side-panel/side-panel-hidden",permalink:"/zhihui-editor/docs/side-panel/side-panel-hidden",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"UploadPanel",permalink:"/zhihui-editor/docs/side-panel/side-panel-upload"},next:{title:"\u81ea\u5b9a\u4e49\u56fe\u50cf\u9762\u677f",permalink:"/zhihui-editor/docs/side-panel/side-panel-images"}},d={},c=[{value:"\u5982\u4f55\u5b9e\u73b0\u201c\u9690\u85cf\u201d\u4fa7\u9762\u677f\uff1f",id:"\u5982\u4f55\u5b9e\u73b0\u9690\u85cf\u4fa7\u9762\u677f",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u9690\u85cf\u9762\u677f",children:"\u9690\u85cf\u9762\u677f"}),"\n",(0,s.jsx)(n.h2,{id:"\u5982\u4f55\u5b9e\u73b0\u9690\u85cf\u4fa7\u9762\u677f",children:"\u5982\u4f55\u5b9e\u73b0\u201c\u9690\u85cf\u201d\u4fa7\u9762\u677f\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u4fa7\u9762\u677f\uff0c\u8be5\u4fa7\u9762\u677f\u4ec5\u5728\u60a8\u5b9a\u4e49\u7684\u89e6\u53d1\u65f6\u624d\u53ef\u89c1\uff08\u4f8b\u5982\uff0c\u7531\u5143\u7d20\u9009\u62e9\u89e6\u53d1\uff09\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// \u5b9a\u4e49\u65b0\u7684\u81ea\u5b9a\u4e49\u9762\u677f\nconst CustomSection = {\n  name: 'custom-text',\n  // \u6211\u4eec\u4e0d\u9700\u8981\u201cTab\u201d\u5c5e\u6027\uff0c\u56e0\u4e3a\u5b83\u5c06\u4ece\u5217\u8868\u4e2d\u9690\u85cf\n  visibleInList: false,\n  // \u6211\u4eec\u9700\u8981\u89c2\u5bdf\u8005\u5728\u5546\u5e97\u53d1\u751f\u4efb\u4f55\u53d8\u5316\u65f6\u81ea\u52a8\u66f4\u65b0\u7ec4\u4ef6\n  Panel: observer(({ store }) => {\n    const text = store.selectedElements[0]?.text;\n    return (\n      <div>\n        <InputGroup\n          value={text}\n          onChange={() => {\n            store.set({ text: e.target.value });\n          }}\n        />\n      </div>\n    );\n  })\n};\n\n// \u5c06\u65b0\u90e8\u5206\u6dfb\u52a0\u5230\u4fa7\u8fb9\u680f\nconst sections = [...DEFAULT_SECTIONS, CustomSection];\n\n// \u4f7f\u7528 mobx API \u5bf9\u9009\u62e9\u53d8\u5316\u505a\u51fa\u53cd\u5e94\nautorun(() => {\n  const textSelected = store.selectedElements[0]?.type === 'text';\n  if (textSelected) {\n    store.openSidePanel('custom-text');\n  }\n});\n\nexport const App = () => {\n  return (\n    <ZhihuiEditorContainer>\n      <SidePanelWrap>\n        <SidePanel store={store} sections={sections} />\n      </SidePanelWrap>\n      <WorkspaceWrap>\n        <Toolbar store={store} downloadButtonEnabled />\n        <Workspace store={store} />\n        <ZoomButtons store={store} />\n      </WorkspaceWrap>\n    </ZhihuiEditorContainer>\n  );\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);