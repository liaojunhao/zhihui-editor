"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8586],{3299:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var o=s(4848),l=s(8453),t=s(7288);const r={sidebar_position:5},i="Store",d={id:"store-api/store-overview",title:"Store",description:"Store \u662f\u60a8\u5c06\u8981\u4f7f\u7528\u5230\u7684\u57fa\u672c\u6570\u636e\u6a21\u578b\u5bf9\u8c61\uff0c\u5b83\u6709%90\u7684API\u65b9\u6cd5\u90fd\u6765\u81ea\u4e8e Zhihui Editor",source:"@site/docs/store-api/store-overview.md",sourceDirName:"store-api",slug:"/store-api/store-overview",permalink:"/zhihui-editor/docs/store-api/store-overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Store API",permalink:"/zhihui-editor/docs/category/store-api"},next:{title:"Element",permalink:"/zhihui-editor/docs/store-api/element-overview"}},h={},a=[{value:"\u753b\u5e03",id:"\u753b\u5e03",level:2},{value:"<Highlight>store.clear()</Highlight>",id:"storeclear",level:3},{value:"<Highlight>store.setSize(width, height)</Highlight>",id:"storesetsizewidth-height",level:3},{value:"<Highlight>store.width</Highlight> and <Highlight>store.height\u200b</Highlight>",id:"storewidth-and-storeheight",level:3},{value:"<Highlight>store.scale\u200b</Highlight>",id:"storescale",level:3},{value:"<Highlight>store.setScale(zoom)\u200b</Highlight>",id:"storesetscalezoom",level:3},{value:"UI",id:"ui",level:2},{value:"<Highlight>store.openedSidePanel</Highlight>",id:"storeopenedsidepanel",level:3},{value:"<Highlight>store.openSidePanel(panelName)\u200b</Highlight>",id:"storeopensidepanelpanelname",level:3},{value:"\u5143\u7d20",id:"\u5143\u7d20",level:2},{value:"<Highlight>store.selectedElements</Highlight>",id:"storeselectedelements",level:3},{value:"<Highlight>store.selectElements(element)</Highlight>",id:"storeselectelementselement",level:3},{value:"<Highlight>store.removerElement(element)</Highlight>",id:"storeremoverelementelement",level:3},{value:"<Highlight>store.getElementById(id)</Highlight>",id:"storegetelementbyidid",level:3},{value:"<Highlight>store.groupElements()</Highlight>",id:"storegroupelements",level:3},{value:"<Highlight>store.ungroupElements()</Highlight>",id:"storeungroupelements",level:3},{value:"\u5386\u53f2\u8bb0\u5f55",id:"\u5386\u53f2\u8bb0\u5f55",level:2},{value:"<Highlight>store.canUndo</Highlight>",id:"storecanundo",level:3},{value:"<Highlight>store.canRedo</Highlight>",id:"storecanredo",level:3},{value:"<Highlight>store.history.undo()</Highlight>",id:"storehistoryundo",level:3},{value:"<Highlight>store.history.redo()</Highlight>",id:"storehistoryredo",level:3},{value:"<Highlight>store.history.initialize()\u200b</Highlight>",id:"storehistoryinitialize",level:3},{value:"\u5e8f\u5217\u5316",id:"\u5e8f\u5217\u5316",level:2},{value:"<Highlight>store.toJSON()\u200b</Highlight>",id:"storetojson",level:3},{value:"<Highlight>store.loadJSON(json, keepHistory?)\u200b</Highlight>",id:"storeloadjsonjson-keephistory",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"<Highlight> store.on(&#39;change&#39;, () =&gt; {}) </Highlight>",id:"-storeonchange----",level:3},{value:"\u5bfc\u51fa",id:"\u5bfc\u51fa",level:2},{value:"<Highlight>await store.saveAsImage()\u200b</Highlight>",id:"await-storesaveasimage",level:3},{value:"<Highlight>await store.toDataURL()\u200b\u200b</Highlight>",id:"await-storetodataurl",level:3},{value:"<Highlight>await store.toBlob()\u200b</Highlight>",id:"await-storetoblob",level:3},{value:"\u5b57\u4f53",id:"\u5b57\u4f53",level:2},{value:"<Highlight>store.addFont({ fontFamily, src, img })\u200b</Highlight>",id:"storeaddfont-fontfamily-src-img-",level:3},{value:"<Highlight>store.removeFont(name)\u200b\u200b</Highlight>",id:"storeremovefontname",level:3},{value:"<Highlight>store.loadFont(name)\u200b</Highlight>",id:"storeloadfontname",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"store",children:"Store"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(t.A,{color:"#dfd9fe",children:"Store"})," \u662f\u60a8\u5c06\u8981\u4f7f\u7528\u5230\u7684\u57fa\u672c\u6570\u636e\u6a21\u578b\u5bf9\u8c61\uff0c\u5b83\u6709%90\u7684API\u65b9\u6cd5\u90fd\u6765\u81ea\u4e8e ",(0,o.jsx)(t.A,{color:"#dfd9fe",children:"Zhihui Editor"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { createStore } from 'zhihui-editor/lib/model/store';\n\nconst store = createStore({\n  token: 'YOUR_TOKEN' // \u8054\u7cfb\u6211\u4eec\u667a\u7ed8\u52a9\u624b\u83b7\u53d6\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u753b\u5e03",children:"\u753b\u5e03"}),"\n",(0,o.jsx)(n.h3,{id:"storeclear",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.clear()"})}),"\n",(0,o.jsx)(n.p,{children:"\u6e05\u9664\u753b\u5e03\u4e0a\u6240\u6709\u5143\u7d20\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.clear(); // \u5b83\u5c06\u5220\u9664\u6240\u6709\u6570\u636e\u4f46\u4fdd\u7559\u64a4\u6d88\u5386\u53f2\u8bb0\u5f55\n\n// \u542f\u52a8\u6df1\u5ea6\u6e05\u7406\nstore.clear({ keepHistory: true }); // \u5b83\u5c06\u5220\u9664\u6240\u6709\u6570\u636e\u5e76\u91cd\u7f6e\u64a4\u6d88\u5386\u53f2\u8bb0\u5f55\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storesetsizewidth-height",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.setSize(width, height)"})}),"\n",(0,o.jsx)(n.p,{children:"\u8bbe\u7f6e\u5de5\u4f5c\u533a\u57df\u7684\u5c3a\u5bf8\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.setSize(1000, 500);\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"storewidth-and-storeheight",children:[(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.width"})," and ",(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.height\u200b"})]}),"\n",(0,o.jsx)(n.p,{children:"\u8fd4\u56de\u5de5\u4f5c\u533a\u57df\u7684\u5bbd\u9ad8\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"console.log('\u5bbd\u5ea6\u4e3a', store.width);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storescale",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.scale\u200b"})}),"\n",(0,o.jsx)(n.p,{children:"\u83b7\u53d6\u5f53\u524d\u753b\u5e03\u7684\u7f29\u653e\u503c"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"console.log('zoom is', store.scale);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storesetscalezoom",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.setScale(zoom)\u200b"})}),"\n",(0,o.jsx)(n.p,{children:"\u8bbe\u7f6e\u5f53\u524d\u753b\u5e03\u7684\u7f29\u653e\u503c"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.setScale(3);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ui",children:"UI"}),"\n",(0,o.jsx)(n.h3,{id:"storeopenedsidepanel",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.openedSidePanel"})}),"\n",(0,o.jsx)(n.p,{children:"\u83b7\u53d6\u5f53\u524d\u4fa7\u8fb9\u9762\u677f\u7684\u6fc0\u6d3b\u72b6\u6001"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"\u9ed8\u8ba4\u7684\u4fa7\u8fb9\u9762\u677f\u6709\uff1atemplates\u3001text\u3001materials\u3001background\u3001upload\u3001layers\u3001size\u3001shapes"})}),"\n",(0,o.jsx)(n.h3,{id:"storeopensidepanelpanelname",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.openSidePanel(panelName)\u200b"})}),"\n",(0,o.jsx)(n.p,{children:"\u624b\u52a8\u8bbe\u7f6e\u4fa7\u8fb9\u9762\u677f\u7684\u72b6\u6001"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.openSidePanel('templates');\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5143\u7d20",children:"\u5143\u7d20"}),"\n",(0,o.jsx)(n.h3,{id:"storeselectedelements",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.selectedElements"})}),"\n",(0,o.jsx)(n.p,{children:"\u8fd4\u56de\u753b\u5e03\u4e0a\u9009\u4e2d\u7684\u5143\u7d20\u6570\u7ec4"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const firstSelected = store.selectedElements[0];\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storeselectelementselement",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.selectElements(element)"})}),"\n",(0,o.jsx)(n.p,{children:"\u8bbe\u7f6e\u9009\u62e9\u753b\u5e03\u4e0a\u7684\u5143\u7d20"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.selectElements([element1, element2]);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storeremoverelementelement",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.removerElement(element)"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5220\u9664\u753b\u5e03\u4e2d\u9009\u62e9\u7684\u5143\u7d20\uff0c ",(0,o.jsx)("code",{children:"element"})," \u53ef\u4f20\u53ef\u4e0d\u4f20\uff0c\u9ed8\u8ba4\u4f1a\u83b7\u53d6\u5f53\u524d\u805a\u7126\u7684\u5143\u7d20"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.removerElement(element?);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storegetelementbyidid",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.getElementById(id)"})}),"\n",(0,o.jsx)(n.p,{children:"\u901a\u8fc7\u4f20\u9012\u7684 id \u67e5\u627e\u753b\u5e03\u4e2d\u7684\u5143\u7d20"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const element = store.getElementById('id');\n\nconsole.log(element); // \u666e\u901a\u5bf9\u8c61\uff0c\u4e0d\u5177\u5907fabric\u5143\u7d20\u5b9e\u4f8b\u7684\u65b9\u6cd5\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storegroupelements",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.groupElements()"})}),"\n",(0,o.jsxs)(n.p,{children:["\u7ec4\u5143\u7d20\uff0c\u5b83\u5c06\u521b\u5efa\u4e00\u4e2a ",(0,o.jsx)("code",{children:"type"})," \u7c7b\u578b\u4e3a ",(0,o.jsx)(t.A,{color:"#dfd9fe",children:"group"})," \u7684\u7ec4\u5143\u7d20\uff0c\u4e0d\u9700\u8981\u4f20\u9012\u53c2\u6570\uff0c\u9ed8\u8ba4\u83b7\u53d6\u753b\u5e03\u4e2d\u805a\u7126\u5143\u7d20\u6765\u6253\u7ec4\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.groupElements();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storeungroupelements",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.ungroupElements()"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53d6\u6d88\u5143\u7d20\u7684\u5206\u7ec4\u3002\u5b83\u5c06\u628a\u7ec4\u5185\u7684\u6240\u6709\u5143\u7d20\u79fb\u52a8\u5230\u9875\u9762\u5e76\u5220\u9664\u8be5\u7ec4\uff0c\u4e0d\u9700\u8981\u4f20\u9012\u53c2\u6570\uff0c\u9ed8\u8ba4\u83b7\u53d6\u753b\u5e03\u805a\u7126 ",(0,o.jsx)("code",{children:"type"})," \u7c7b\u578b\u4e3a ",(0,o.jsx)(t.A,{color:"#dfd9fe",children:"group"})," \u7684\u7ec4\u5143\u7d20\u6765\u5206\u7ec4\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.ungroupElements();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5386\u53f2\u8bb0\u5f55",children:"\u5386\u53f2\u8bb0\u5f55"}),"\n",(0,o.jsx)(n.h3,{id:"storecanundo",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.canUndo"})}),"\n",(0,o.jsx)(n.p,{children:"\u67e5\u770b\u662f\u5426\u6709\u64a4\u9500"}),"\n",(0,o.jsx)(n.h3,{id:"storecanredo",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.canRedo"})}),"\n",(0,o.jsx)(n.p,{children:"\u67e5\u770b\u662f\u5426\u6709\u91cd\u505a"}),"\n",(0,o.jsx)(n.h3,{id:"storehistoryundo",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.history.undo()"})}),"\n",(0,o.jsx)(n.p,{children:"\u64a4\u9500\u56de\u4e0a\u4e00\u6b21\u4fee\u6539"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.history.undo();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storehistoryredo",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.history.redo()"})}),"\n",(0,o.jsx)(n.p,{children:"\u91cd\u505a\u66f4\u6539"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// \u53d6\u6d88\u66f4\u6539\nstore.history.undo();\n\n// \u518d\u6b21\u5e94\u7528\u66f4\u6539\nstore.history.redo();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storehistoryinitialize",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.history.initialize()\u200b"})}),"\n",(0,o.jsx)(n.p,{children:"\u6e05\u9664\u5386\u53f2\u8bb0\u5f55"}),"\n",(0,o.jsx)(n.h2,{id:"\u5e8f\u5217\u5316",children:"\u5e8f\u5217\u5316"}),"\n",(0,o.jsx)(n.h3,{id:"storetojson",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.toJSON()\u200b"})}),"\n",(0,o.jsx)(n.p,{children:"\u5c06\u753b\u5e03\u4e2d\u7684\u5143\u7d20\uff0c\u5bfc\u51fa\u4e3a\u5bf9\u8c61\u6570\u7ec4"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const json = store.toJSON();\n\n// \u5b58\u50a8JSON\u5230\u67d0\u5904\nsaveIntoBackend(JSON.stringify(json));\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storeloadjsonjson-keephistory",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.loadJSON(json, keepHistory?)\u200b"})}),"\n",(0,o.jsx)(n.p,{children:"\u5c06\u4f20\u9012\u7684 json \u52a0\u8f7d\u5230\u5b58\u50a8\u4e2d\u3002\u5b83\u5c06\u66f4\u65b0\u6240\u6709\u5c5e\u6027\u3001\u9875\u9762\u548c\u5143\u7d20\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5c06 JSON \u52a0\u8f7d\u5230\u5b58\u50a8\u4e2d\u5c06\u91cd\u7f6e\u64a4\u6d88/\u91cd\u505a\u5386\u53f2\u8bb0\u5f55\uff08\u56e0\u6b64\u7528\u6237\u65e0\u6cd5\u64a4\u6d88\u5b83\uff09\u3002\u5982\u679c\u60a8\u60f3\u4fdd\u7559\u5386\u53f2\u8bb0\u5f55\uff0c\u53ef\u4ee5\u4f7f\u7528 keepHistory \u53c2\u6570\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import { createStore } from 'zhihui-editor/lib/model/store';\nconst store = createStore({\n  token: YOUR_TOKEN // \u8054\u7cfb\u6211\u4eec\u667a\u7ed8\u52a9\u7406\u83b7\u53d6: https://liaojunhao.github.io/zhihui-editor/pricing\n});\n\n// \u5728\u67d0\u4e2a\u65f6\u95f4\u70b9\u4fdd\u5b58\u4e3aJSON\nconst json = store.toJSON();\n\n// \u52a0\u8f7d JSON\n// \u6ce8\u610f json \u662f\u4e2a javascript \u5bf9\u8c61\n// \u5982\u679c\u60a8\u6709\u4e00\u4e2a json \u5b57\u7b26\u4e32\uff0c\u5219\u53ef\u80fd\u9700\u8981\u89e3\u6790\u5b83 - JSON.parse(string);\nstore.loadJSON(json);\n\n// \u6e05\u7a7a\u5386\u53f2\u8bb0\u5f55\u540e\u6765\u52a0\u8f7d JSON\nstore.loadJSON(json, true);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4e8b\u4ef6",children:"\u4e8b\u4ef6"}),"\n",(0,o.jsx)(n.h3,{id:"-storeonchange----",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:" store.on('change', () => {}) "})}),"\n",(0,o.jsxs)(n.p,{children:["\u76d1\u542c store \u4e2d\u7684\u4efb\u4f55\u53d8\u5316\u3002\u8be5\u4e8b\u4ef6\u53ef\u80fd\u4f1a\u5728\u67d0\u4e9b\u64cd\u4f5c\uff08\u4f8b\u5982\u8c03\u6574\u5927\u5c0f\u6216\u62d6\u52a8\uff09\u65f6\u9891\u7e41\u89e6\u53d1\u3002",(0,o.jsx)("code",{children:"store.on()"})," \u5c06\u8fd4\u56de\u53d6\u6d88\u8ba2\u9605\u529f\u80fd\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// \u53d6\u6d88\u76d1\u542c\u529f\u80fd\nconst off = store.on('change', () => {\n  console.log('something changed');\n});\n// \u8be5\u884c\u5c06\u53d6\u6d88\u76d1\u542c\u8be5\u4e8b\u4ef6\noff();\n\n// \u7f16\u5199\u4e00\u4e2a\u8282\u6d41\u51fd\u6570\nlet timeout = null;\nconst requestSave = () => {\n  // \u5982\u679c\u5df2\u8bf7\u6c42\u4fdd\u5b58 - \u5219\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\n  if (timeout) {\n    return;\n  }\n  // \u4fdd\u5b58\u6570\u636e\u5230\u540e\u7aef\n  timeout = setTimeout(() => {\n    // \u91cd\u7f6e\u8d85\u65f6\n    timeout = null;\n    // \u5bfc\u51faJSON\u6570\u636e\n    const json = store.toJSON();\n    // \u62a5\u9519\u6570\u636e\u5230\u540e\u53f0\n    fetch('https://example.com/designs', {\n      method: 'POST',\n      body: JSON.stringify(json)\n    });\n  }, 1000);\n};\n\n// \u8bf7\u6c42\u5bf9\u4efb\u4f55\u66f4\u6539\u8fdb\u884c\u4fdd\u5b58\u64cd\u4f5c\nstore.on('change', () => {\n  requestSave();\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5bfc\u51fa",children:"\u5bfc\u51fa"}),"\n",(0,o.jsx)(n.h3,{id:"await-storesaveasimage",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"await store.saveAsImage()\u200b"})}),"\n",(0,o.jsx)(n.p,{children:"saveAsImage \u5c06\u7ed8\u56fe\u5bfc\u51fa\u4e3a\u56fe\u50cf\u5e76\u5c06\u5176\u4fdd\u5b58\u4e3a\u672c\u5730\u6587\u4ef6\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// \u9ed8\u8ba4\u5bfc\u51fa\nstore.saveAsImage({ format: 'png', quality: 1, multiplier: 1 });\n\n// \u5bfc\u51fa jpg\nstore.saveAsImage({ format: 'jpeg', quality: 1, multiplier: 1 });\n\n// \u4f7f\u5bfc\u51fa\u7684\u56fe\u50cf\u653e\u5927 2 \u500d\nstore.saveAsImage({ format: 'png', quality: 1, multiplier: 2 });\n\n// \u63a7\u5236\u5927\u5c0f\u8ddf\u8d28\u91cf\uff08\u8d28\u91cf\u53ea\u6709jpeg\u683c\u5f0f\u624d\u751f\u6548\uff0cpng\u9ed8\u8ba4\u5df2\u6700\u9ad8\u8d28\u91cf\uff09\nstore.saveAsImage({ format: 'jpeg', quality: 0.5, multiplier: 2 });\n\n// \u81ea\u5b9a\u4e49\u540d\u79f0\nstore.saveAsImage({ fileName: 'zhihui-editor.png', format: 'png', quality: 1, multiplier: 1 });\n"})}),"\n",(0,o.jsx)(n.h3,{id:"await-storetodataurl",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"await store.toDataURL()\u200b\u200b"})}),"\n",(0,o.jsx)(n.p,{children:"\u5c06\u5b58\u50a8\u5bfc\u51fa\u4e3a Base64 URL \u683c\u5f0f\u7684\u56fe\u50cf"}),"\n",(0,o.jsx)(n.h3,{id:"await-storetoblob",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"await store.toBlob()\u200b"})}),"\n",(0,o.jsx)(n.p,{children:"\u5c06\u5b58\u50a8\u5bfc\u51fa\u5230 blob \u5bf9\u8c61\uff0c\u5b83\u53ef\u80fd\u6bd4 toDataURL \u65b9\u6cd5\u6027\u80fd\u66f4\u4f18"}),"\n",(0,o.jsx)(n.h2,{id:"\u5b57\u4f53",children:"\u5b57\u4f53"}),"\n",(0,o.jsx)(n.h3,{id:"storeaddfont-fontfamily-src-img-",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.addFont({ fontFamily, src, img })\u200b"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6dfb\u52a0\u65b0\u81ea\u5b9a\u4e49\u5b57\u4f53\u7684\u529f\u80fd\u3002\u6dfb\u52a0\u7684\u5b57\u4f53\u5c06\u4fdd\u5b58\u5230\u6587\u5b57\u4fa7\u9762\u677f\u4e2d\u3002\u5982\u679c\u60a8\u60f3\u6dfb\u52a0\u5168\u5c40\u53ef\u7528\u7684\u5b57\u4f53\uff0c\u8bf7\u67e5\u770b",(0,o.jsx)(n.a,{href:"/docs/config#3%E5%85%A8%E5%B1%80%E5%AD%97%E4%BD%93",children:"\u5b57\u4f53\u6559\u7a0b"}),"\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.addFont({\n  fontFamily: 'MyCustomFont', // \u5b57\u4f53\u540d\u5b57\n  url: serverUrlOrBase64, // \u5b57\u4f53\u94fe\u63a5\n  img: 'MyCustomFontImg' // \u5b57\u4f53\u9884\u89c8\u56fe\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6216\u8005\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728 store \u4e2d\u6ce8\u518c\u5b57\u4f53\uff0c\u7136\u540e\u624b\u52a8\u5c06\u6240\u9700\u7684 \u5b57\u4f53CSS \u6dfb\u52a0\u5230\u9875\u9762\u4e2d\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.addFont({\n  fontFamily: 'MyCustomFont'\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storeremovefontname",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.removeFont(name)\u200b\u200b"})}),"\n",(0,o.jsx)(n.p,{children:"\u6309\u540d\u79f0\u4ece store \u4e2d\u5220\u9664\u81ea\u5b9a\u4e49\u5b57\u4f53"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"store.removeFont('MyCustomFont');\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storeloadfontname",children:(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.loadFont(name)\u200b"})}),"\n",(0,o.jsxs)(n.p,{children:["\u52a0\u8f7d\u81ea\u5b9a\u4e49\u7684\u8fdc\u7a0b\u5b57\u4f53\uff0c\u4f46\u5982\u679c\u60a8\u60f3\u8981\u5728 UI \u7684\u67d0\u4e2a\u5730\u65b9\u663e\u793a\u5b57\u4f53\u5217\u8868\uff0c\u5b83\u4f1a\u5f88\u6709\u7528\u3002",(0,o.jsx)(t.A,{color:"#dfd9fe",children:"store.loadFont(name)\u200b"})," \u51fd\u6570\u4f1a\u5411\u7f51\u9875\u6dfb\u52a0\u5b57\u4f53\uff0c\u4ee5\u4fbf\u6d4f\u89c8\u5668\u53ef\u4ee5\u5448\u73b0\u6b63\u786e\u7684\u5b57\u4f53\u3002"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u7f51\u9875\u4f7f\u7528\u7684\u5b57\u4f53\u90fd\u662f\u901a\u8fc7 @font-face \u7684CSS @\u89c4\u5219\u6dfb\u52a0\u7684\uff0c\u5b83\u5141\u8bb8\u7f51\u9875\u5f00\u53d1\u8005\u4e3a\u5176\u7f51\u9875\u6307\u5b9a\u5728\u7ebf\u5b57\u4f53\u3002\u901a\u8fc7\u8fd9\u79cd\u4f5c\u8005\u81ea\u5907\u5b57\u4f53\u7684\u65b9\u5f0f\uff0c@font-face \u53ef\u4ee5\u6d88\u9664\u5bf9\u7528\u6237\u7535\u8111\u5b57\u4f53\u7684\u4f9d\u8d56\u3002 @font-face \u4e0d\u4ec5\u53ef\u4ee5\u653e\u5728\u5728 CSS \u7684\u6700\u9876\u5c42\uff0c\u4e5f\u53ef\u4ee5\u653e\u5728 @\u89c4\u5219 \u7684 ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule#conditional_group_rules",children:"\u6761\u4ef6\u89c4\u5219\u7ec4"})," \u4e2d\u3002"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"@font-face {\n  font-family: 'Open Sans';\n  src:\n    url('/fonts/OpenSans-Regular-webfont.woff2') format('woff2'),\n    url('/fonts/OpenSans-Regular-webfont.woff') format('woff');\n}\n"})})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},7288:(e,n,s)=>{s.d(n,{A:()=>l});s(6540);var o=s(4848);function l(e){let{children:n,color:s}=e;return(0,o.jsx)("span",{style:{backgroundColor:s,borderRadius:"6px",color:"rgb(51, 51, 51)",padding:"0.2rem 0.5rem"},children:n})}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var o=s(6540);const l={},t=o.createContext(l);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);