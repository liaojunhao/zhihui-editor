---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PDF渲染

:::info

开发中...

:::

将 Zhihui Editor JSON 从 NodeJS 转换为 PDF 文件。

<Tabs>
  <TabItem value="npm run zhihui-editor" label="npm" default>
    ```bash
    npm install zhihui-editor-pdf
    ```
  </TabItem>
  <TabItem value="yarn zhihui-editor" label="yarn">
    ```bash
    yarn add zhihui-editor-pdf
    ```
  </TabItem>
  <TabItem value="pnpm add zhihui-editor" label="pnpm">
    ```bash
    pnpm add zhihui-editor-pdf
    ```
  </TabItem>
</Tabs>

```jsx
import fs from 'fs';
import { jsonToPDF } from 'zhihui-editor-pdf';

async function run() {
  const json = JSON.parse(fs.readFileSync('./zhihui-editor.json'));
  await jsonToPDF(json, './output.pdf');
}

run();
```
