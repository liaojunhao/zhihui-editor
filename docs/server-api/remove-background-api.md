---
sidebar_position: 2
---

# 智能抠图

## 智能抠图功能如何调用？

智能抠图对图像内容进行智能分析，支持识别出图像中的商品、人像等不同主体，并对背景信息予以去除，生成透明背景的图片素材，适用于电商海报智能生成、深色模式适配等场景。

```jsx
const req = await fetch('https://api.zhihui-editor.com/api/remove-image-background', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify({ url: 'path-to-image-or-base64-dataurl' })
});
if (req.status !== 200) {
  throw new Error('Error while removing background');
}
const res = await req.json();

return res.url;
```

![原图](./img/origin_img2.png)

![原图](./img/new_img2.png)
