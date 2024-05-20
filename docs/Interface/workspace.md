---
sidebar_position: 2
---

# Workspace UI

Workspace is essential part of zhihui-editor framework. It is the main React component that you are going to use to display the drawings and interact with them. You can change canvas and its content programmatically using Store API.

```jsx
import { Workspace } from 'zhihui-editor/canvas/workspace';
import { createStore } from 'zhihui-editor/model/store';

const store = createStore({
  key: YOUR_API_KEY // you can create it here:
});

const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Workspace store={store} />
    </div>
  );
};
```
