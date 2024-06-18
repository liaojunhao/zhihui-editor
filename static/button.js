function createZhihuiEditor(config) {
  const handlePublish = (event) => {
    if (event.data?.type !== 'publish') {
      return;
    }

    if (event.data?.dataURL && config.onPublish) {
      config.onPublish({ ...event.data });
      destroy();
    }
  };

  window.addEventListener('message', handlePublish, false);

  const handleChange = (event) => {
    if (event.data?.type !== 'change') {
      return;
    }

    if (event.data?.json && config.onChange) {
      config.onChange({ ...event.data });
    }
  };

  window.addEventListener('message', handleChange, false);

  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0px';
  container.style.left = '0px';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.zIndex = '10000';

  document.body.appendChild(container);

  const backdrop = document.createElement('div');
  backdrop.className = 'zhihui-editor-backdrop';
  backdrop.style.position = 'absolute';
  backdrop.style.top = '0px';
  backdrop.style.left = '0px';
  backdrop.style.width = '100%';
  backdrop.style.height = '100%';
  backdrop.style.backgroundColor = 'rgba(0,0,0,0.5)';
  backdrop.style.display = 'block';
  container.appendChild(backdrop);
  backdrop.onclick = () => {
    destroy();
  };

  const destroy = () => {
    window.removeEventListener('message', handlePublish, false);
    window.removeEventListener('message', handleChange, false);
    container.parentElement.removeChild(container);
  };

  const iframe = document.createElement('iframe');
  container.appendChild(iframe);
  iframe.className = 'zhihui-editor-iframe';
  iframe.style.width = 'calc(100vw - 65px)';
  iframe.style.height = `${window.innerHeight - 100}px`;
  iframe.style.minWidth = '400px';
  iframe.style.maxWidth = '100vw';
  iframe.style.position = 'absolute';
  iframe.style.top = '50px';
  iframe.style.left = '50%';
  iframe.style.transform = 'translate(-50%)';
  iframe.style.border = 'none';
  iframe.style.borderRadius = '8px';

  window.addEventListener('resize', () => {
    iframe.style.height = `${window.innerHeight - 100}px`;
  });

  const productionUrl = config.url || 'http://taidc.qq.com';

  let src = `${productionUrl}?TOKEN=${config.token || ''}&width=${config.width}&height=${config.height}`;
  // 用于控制显示那些面板
  if (config.sections) {
    if (config.sections.length === 0) {
      src += '&sections=false';
    } else {
      src += `&sections=${config.sections.join(',')}`;
    }
  }

  // 默认要打开的面板
  if (config.defaultSection) {
    src += `&defaultSection=${config.defaultSection}`;
  }

  if (config.teamId) {
    src += `&teamId=${config.teamId}`;
  }

  if (config.companyId) {
    src += `&companyId=${config.companyId}`;
  }

  // 数据json url：待定
  // if (config.jsonUrl) {
  //   src += `&jsonUrl=${config.jsonUrl}`;
  // }

  // 下载按钮的名字
  if (config.publishLabel) {
    src += `&publishLabel=${config.publishLabel}`;
  }

  /**
   * 初始化 iframe 的数据
   */
  if (config.json) {
    iframe.addEventListener('load', () => {
      iframe.contentWindow.postMessage(
        {
          type: 'jsonLoad',
          json: config.json
        },
        '*'
      );
    });
  } else {
    // 没有json就默认去获取数据
    if (config.templateId) {
      src += `&templateId=${config.templateId}`;
    }

    if (config.from) {
      src += `&from=${config.from}`;
    }
  }

  iframe.src = src;

  // 设置一些图片
  if (config.uploads) {
    iframe.addEventListener('load', () => {
      iframe.contentWindow.postMessage(
        {
          type: 'setUploads',
          uploads: config.uploads
        },
        '*'
      );
    });
  }

  // 设置一些模板
  if (config.templates) {
    iframe.addEventListener('load', () => {
      iframe.contentWindow.postMessage(
        {
          type: 'setTemplates',
          templates: config.templates
        },
        '*'
      );
    });
  }

  // 设置一些翻译
  if (config.translations) {
    iframe.addEventListener('load', () => {
      iframe.contentWindow.postMessage(
        {
          type: 'setTranslations',
          translations: config.translations
        },
        '*'
      );
    });
  }

  return {
    destroy
  };
}

window.createZhihuiEditor = createZhihuiEditor;
