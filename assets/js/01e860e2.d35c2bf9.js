"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3854],{8318:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(4848),i=r(8453);const o={sidebar_position:3},s="\u56fe\u50cf\u52a8\u6f2b\u5316",a={id:"server-api/cartoon-image",title:"\u56fe\u50cf\u52a8\u6f2b\u5316",description:"\u56fe\u50cf\u52a8\u6f2b\u5316\u529f\u80fd\u5982\u4f55\u8c03\u7528\uff1f",source:"@site/docs/server-api/cartoon-image.md",sourceDirName:"server-api",slug:"/server-api/cartoon-image",permalink:"/zhihui-editor/docs/server-api/cartoon-image",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u667a\u80fd\u62a0\u56fe",permalink:"/zhihui-editor/docs/server-api/remove-background-api"},next:{title:"PDF\u6e32\u67d3",permalink:"/zhihui-editor/docs/server-api/pdf-render"}},c={},d=[{value:"\u56fe\u50cf\u52a8\u6f2b\u5316\u529f\u80fd\u5982\u4f55\u8c03\u7528\uff1f",id:"\u56fe\u50cf\u52a8\u6f2b\u5316\u529f\u80fd\u5982\u4f55\u8c03\u7528",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u56fe\u50cf\u52a8\u6f2b\u5316",children:"\u56fe\u50cf\u52a8\u6f2b\u5316"}),"\n",(0,t.jsx)(n.h2,{id:"\u56fe\u50cf\u52a8\u6f2b\u5316\u529f\u80fd\u5982\u4f55\u8c03\u7528",children:"\u56fe\u50cf\u52a8\u6f2b\u5316\u529f\u80fd\u5982\u4f55\u8c03\u7528\uff1f"}),"\n",(0,t.jsx)(n.p,{children:"\u8f93\u5165\u4e00\u5f20\u5e26\u4eba\u8138\u4fe1\u606f\u7684\u56fe\u7247\uff0c\u751f\u6210\u4e2a\u6027\u5316\u7684\u4e8c\u6b21\u5143\u52a8\u6f2b\u5f62\u8c61\uff0c\u9002\u7528\u4e8e\u4e2a\u6027\u5934\u50cf\u3001\u8da3\u5473\u8425\u9500\u3001\u76f8\u518c\u5e94\u7528\u7b49\u573a\u666f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const req = await fetch('https://api.zhihui-editor.com/api/cartoon-image', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n    Authorization: `Bearer ${token}`\n  },\n  body: JSON.stringify({ url: 'path-to-image-or-base64-dataurl' })\n});\nif (req.status !== 200) {\n  throw new Error('Error while removing background');\n}\nconst res = await req.json();\n\nreturn res.url;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u539f\u56fe",src:r(5009).A+"",width:"1262",height:"958"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u539f\u56fe",src:r(6605).A+"",width:"1254",height:"958"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},6605:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/new_img-7016a61a99e6eeed02e231e477779727.png"},5009:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/origin_img-b2f6291d49480c0ad7c0f6aacbc710f7.png"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);