---
sidebar_position: 5
---

import Highlight from '@site/src/components/Highlight';

# 工具API

构建自定义侧面板时，可以自由选择您喜欢的任何 React 组件。您也可以从头开始构建自己的侧面板。

不过，这里有一个常见的用例：在侧面板中显示媒体文件预览网格（模板、图像、资产等）。为此，您可以利用我们内置的 <Highlight color="#dfd9fe">ImagesGrid</Highlight> 组件。

## 如何使用 <Highlight color="#dfd9fe">ImagesGrid</Highlight> 组件

<Highlight color="#dfd9fe">ImagesGrid</Highlight> 是一个 React 组件，它有几个特性：

- 将任意项目的数组显示为图像
- 支持无限滚动 API
- 支持从侧面板拖放到画布中（开发中...）

```jsx
import ImagesGrid from 'zhihui-editor/lib/side-panel/imagesGrid';

<ImagesGrid
  // 传递具有任何图像信息的项目数组
  images={[{ url: 'example.png' }, { url: 'example.png' }]}
  // 从数组的某一项获取图像 URL 的函数
  getPreview={(item) => item.url}
  // 当用户点击图像或将其拖入画布时，将调用此函数
  onSelect={async (image) => {
    // image - 数组中的每一项
    const width = 100;
    const height = 100;

    store.addElement({
      type: 'image',
      src: image.url,
      width,
      height,
      left: 0,
      top: 0
    });
  }}
  // 是否显示末尾段段加载提示？
  isLoading={false}
  // 当用户滚动到列表底部时，将调用加载更多数据
  // 您可以在这里从 API 请求新数据。
  // 如果没有更多数据，则传递 false
  loadMore={() => {}}
  // 可选在每个图像元素的底部显示特殊组件
  getExtra={(image) => <span>Photo by Anton</span>}
  // 控制展示多少列，默认是2
  rowsNumber={2}
  // 可选传递图像的高度大小，默认是 “auto”
  itemHeight={'100px'}
/>;
```

## 如何使用 <Highlight color="#dfd9fe">useSWRInfinite</Highlight> 钩子

在调用 API 来显示侧面板网格内的图像列表的情况下，您可以使用各种 React 工具。这包括在钩子中使用获取方法或利用任何适合该任务的库，比如使用 [swr](https://swr.vercel.app/zh-CN) 库的 <Highlight color="#dfd9fe">useSWRInfinite</Highlight> 函数来处理下拉刷新的逻辑：

示例：

```jsx
// 利用 useSWRInfinite 自定义的 hooks
function useTemplates({ query = '', getSize }) {
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    (index) => commonTemplateList({ page: index, pageSize: pageSize, query }),
    (info) => axios.post(info.url, info.data).then((res) => res)
  );
  const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.items?.length === 0;
  const lastData = data == null ? undefined : data[data.length - 1];
  const isReachingEnd = isEmpty || (lastData && getSize(lastData) === size);

  return {
    data,
    error,
    isLoading: isLoadingMore,
    hasMore: !isReachingEnd,
    isReachingEnd,
    loadMore: () => {
      setSize(size + 1);
    }
  };
}
```

## 如何将元素从侧面板拖放到工作区？​

如果您不想使用 <Highlight color="#dfd9fe">ImagesGrid</Highlight> 组件，则必须处理 DOM 元素的 拖拽 实现。但是 <Highlight color="#dfd9fe">Zhihui Editor</Highlight> 有一些工具可以监听工作区上的 drop 事件。您可以使用这个：

:::info

开发中...

:::
