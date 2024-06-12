---
sidebar_position: 3
---

# 隐藏面板

## 如何实现“隐藏”侧面板？

您可以实现一个侧面板，该侧面板仅在您定义的触发时才可见（例如，由元素选择触发）。

```jsx
// 定义新的自定义面板
const CustomSection = {
  name: 'custom-text',
  // 我们不需要“Tab”属性，因为它将从列表中隐藏
  visibleInList: false,
  // 我们需要观察者在商店发生任何变化时自动更新组件
  Panel: observer(({ store }) => {
    const text = store.selectedElements[0]?.text;
    return (
      <div>
        <InputGroup
          value={text}
          onChange={() => {
            store.set({ text: e.target.value });
          }}
        />
      </div>
    );
  })
};

// 将新部分添加到侧边栏
const sections = [...DEFAULT_SECTIONS, CustomSection];

// 使用 mobx API 对选择变化做出反应
autorun(() => {
  const textSelected = store.selectedElements[0]?.type === 'text';
  if (textSelected) {
    store.openSidePanel('custom-text');
  }
});

export const App = () => {
  return (
    <ZhihuiEditorContainer>
      <SidePanelWrap>
        <SidePanel store={store} sections={sections} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </ZhihuiEditorContainer>
  );
};
```
