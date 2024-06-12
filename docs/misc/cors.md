---
sidebar_position: 3
---

import Highlight from '@site/src/components/Highlight';

# 如何解决CORS问题？

为了将图像加载到画布元素中，Zhihui Editor 默认将 <Highlight color="#dfd9fe">crossOrigin</Highlight> 属性设置为 <Highlight color="#dfd9fe">anonymous</Highlight>。在某些配置中，您可能会看到如下错误：

Access to image at 'http://example.com/image.jpg' from origin 'http://your-domain.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

解决方法如下：

## 确保资源通过 CORS 标头

首先，您需要确保托管图像的服务器允许 CORS 请求。如果您有权访问服务器，则可以将 <Highlight color="#dfd9fe">Access-Control-Allow-Origin: \*</Highlight> 标头添加到响应中。

## 确保所有图片都有属性 <Highlight color="#dfd9fe">crossOrigin</Highlight>

在将图像添加到画布之前，您可能希望在应用程序 UI 的其他位置显示图像，例如侧面板或用户在编辑之前可能看到的任何步骤。确保所有图像的 <Highlight color="#dfd9fe">crossOrigin</Highlight> 属性都设置为 <Highlight color="#dfd9fe">anonymous</Highlight>。例如，如果您使用 <Highlight color="#dfd9fe">img</Highlight> 标签显示图像，您可以执行以下操作：

```jsx
<img src="http://example.com/image.jpg" crossOrigin="anonymous" />
```

解释：如果您在同一浏览会话中加载相同的图像但不使用 crossOrigin 属性，则加载后，浏览器将认为它需要 CORS 协议，因为它最初是通过这种方式加载的。
