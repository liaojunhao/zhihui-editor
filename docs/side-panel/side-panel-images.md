---
sidebar_position: 4
---

# 自定义图像面板

## 如何在侧面板加载自定义照片？

使用自定义 API，您可以轻松地向侧面板添加新的部分以显示来自任何远程 API 或您自己的后端的一组图像。

您可以编写另一个自定义面板，以从任何 API 加载图像：

```jsx
import { observer } from 'mobx-react-lite';
export const PhotosPanel = observer(({ store }) => {
  const [images, setImages] = React.useState([]);

  async function loadImages() {
    // 在这里应该实现你自己的 API 请求
    setImages([]);

    // 模拟等待网络请求
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // 演示图像是硬编码的
    // 在实际应用中，这里将类似于 JSON 结构
    setImages([{ url: './example.jpg' }, { url: './example.jpg' }]);
  }

  React.useEffect(() => {
    loadImages();
  }, []);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <InputGroup
        leftIcon="search"
        placeholder="Search..."
        onChange={(e) => {
          loadImages();
        }}
        style={{
          marginBottom: '20px'
        }}
      />
      <p>Demo images: </p>
      {/* 您可以在此处创建自己的自定义组件 */}
      {/* 但我们将使用内置网格组件 */}
      <ImagesGrid
        images={images}
        getPreview={(image) => image.url}
        onSelect={async (image) => {
          // image - 数组中的每一项
          // getImageSize 加载图片的函数
          const { width, height } = await getImageSize(image.url);
          store.addElement({
            type: 'image',
            src: image.url,
            width,
            height,
            left: 0,
            top: 0
          });
        }}
        rowsNumber={2}
        isLoading={!images.length}
        loadMore={false}
      />
    </div>
  );
});
// 定义新的自定义面板
const СustomPhotos = {
  name: 'photos',
  Tab: (props) => (
    <SectionTab name="Photos" {...props}>
      <span>MyIcon</span>
    </SectionTab>
  ),
  Panel: PhotosPanel
};
```
