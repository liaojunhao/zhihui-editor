// 在你的 MDX 文件中
import React from 'react';

const StyledIframe = ({ src }) => (
  <iframe
    src={src}
    title="my-zhihui-editor"
    style={{
      width: '100%',
      height: '500px',
      border: 'none',
      borderRadius: 12,
      overflow: 'hidden'
      // 其他样式
    }}
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
);

export default StyledIframe;
