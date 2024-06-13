---
sidebar_position: 3
---

# 图像动漫化

## 图像动漫化功能如何调用？

输入一张带人脸信息的图片，生成个性化的二次元动漫形象，适用于个性头像、趣味营销、相册应用等场景。

```jsx
const req = await fetch('https://api.zhihui-editor.com/api/cartoon-image', {
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

![原图](./img/origin_img.png)

![原图](./img/new_img.png)
