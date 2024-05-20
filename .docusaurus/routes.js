import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zhihui-editor/blog',
    component: ComponentCreator('/zhihui-editor/blog', 'fc6'),
    exact: true
  },
  {
    path: '/zhihui-editor/blog/archive',
    component: ComponentCreator('/zhihui-editor/blog/archive', '5d9'),
    exact: true
  },
  {
    path: '/zhihui-editor/blog/first-blog-post',
    component: ComponentCreator('/zhihui-editor/blog/first-blog-post', '8fe'),
    exact: true
  },
  {
    path: '/zhihui-editor/blog/long-blog-post',
    component: ComponentCreator('/zhihui-editor/blog/long-blog-post', 'bc5'),
    exact: true
  },
  {
    path: '/zhihui-editor/blog/mdx-blog-post',
    component: ComponentCreator('/zhihui-editor/blog/mdx-blog-post', '50a'),
    exact: true
  },
  {
    path: '/zhihui-editor/blog/tags',
    component: ComponentCreator('/zhihui-editor/blog/tags', 'df8'),
    exact: true
  },
  {
    path: '/zhihui-editor/blog/tags/docusaurus',
    component: ComponentCreator('/zhihui-editor/blog/tags/docusaurus', 'fab'),
    exact: true
  },
  {
    path: '/zhihui-editor/blog/tags/facebook',
    component: ComponentCreator('/zhihui-editor/blog/tags/facebook', '16d'),
    exact: true
  },
  {
    path: '/zhihui-editor/blog/tags/hello',
    component: ComponentCreator('/zhihui-editor/blog/tags/hello', '4d2'),
    exact: true
  },
  {
    path: '/zhihui-editor/blog/tags/hola',
    component: ComponentCreator('/zhihui-editor/blog/tags/hola', '448'),
    exact: true
  },
  {
    path: '/zhihui-editor/blog/welcome',
    component: ComponentCreator('/zhihui-editor/blog/welcome', 'cf4'),
    exact: true
  },
  {
    path: '/zhihui-editor/contact',
    component: ComponentCreator('/zhihui-editor/contact', '18d'),
    exact: true
  },
  {
    path: '/zhihui-editor/demo',
    component: ComponentCreator('/zhihui-editor/demo', '5bf'),
    exact: true
  },
  {
    path: '/zhihui-editor/introduce',
    component: ComponentCreator('/zhihui-editor/introduce', '9e1'),
    exact: true
  },
  {
    path: '/zhihui-editor/pricing',
    component: ComponentCreator('/zhihui-editor/pricing', '04d'),
    exact: true
  },
  {
    path: '/zhihui-editor/docs',
    component: ComponentCreator('/zhihui-editor/docs', '688'),
    routes: [
      {
        path: '/zhihui-editor/docs',
        component: ComponentCreator('/zhihui-editor/docs', 'bfe'),
        routes: [
          {
            path: '/zhihui-editor/docs',
            component: ComponentCreator('/zhihui-editor/docs', '72d'),
            routes: [
              {
                path: '/zhihui-editor/docs/category/侧面板',
                component: ComponentCreator('/zhihui-editor/docs/category/侧面板', '969'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/category/界面',
                component: ComponentCreator('/zhihui-editor/docs/category/界面', 'd0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/category/其他',
                component: ComponentCreator('/zhihui-editor/docs/category/其他', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/category/demos',
                component: ComponentCreator('/zhihui-editor/docs/category/demos', '5d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/category/server-api',
                component: ComponentCreator('/zhihui-editor/docs/category/server-api', 'd4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/category/store-api',
                component: ComponentCreator('/zhihui-editor/docs/category/store-api', '4af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/config',
                component: ComponentCreator('/zhihui-editor/docs/config', '3f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/demos/full-canvas-editor',
                component: ComponentCreator('/zhihui-editor/docs/demos/full-canvas-editor', '59c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/Interface/toolbar',
                component: ComponentCreator('/zhihui-editor/docs/Interface/toolbar', 'faa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/Interface/tooltip',
                component: ComponentCreator('/zhihui-editor/docs/Interface/tooltip', 'b95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/Interface/workspace',
                component: ComponentCreator('/zhihui-editor/docs/Interface/workspace', '342'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/intro',
                component: ComponentCreator('/zhihui-editor/docs/intro', '555'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/misc/cors',
                component: ComponentCreator('/zhihui-editor/docs/misc/cors', '61f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/misc/mobile',
                component: ComponentCreator('/zhihui-editor/docs/misc/mobile', '77a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/non-react-integration',
                component: ComponentCreator('/zhihui-editor/docs/non-react-integration', '516'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/server-api/cartoon-image',
                component: ComponentCreator('/zhihui-editor/docs/server-api/cartoon-image', '6cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/server-api/cloud-render',
                component: ComponentCreator('/zhihui-editor/docs/server-api/cloud-render', 'f83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/server-api/pdf-render',
                component: ComponentCreator('/zhihui-editor/docs/server-api/pdf-render', '234'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/server-api/remove-background-api',
                component: ComponentCreator('/zhihui-editor/docs/server-api/remove-background-api', '17c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/side-panel/side-panel-overview',
                component: ComponentCreator('/zhihui-editor/docs/side-panel/side-panel-overview', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/side-panel/side-panel-upload',
                component: ComponentCreator('/zhihui-editor/docs/side-panel/side-panel-upload', '8c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/store-api/element-overview',
                component: ComponentCreator('/zhihui-editor/docs/store-api/element-overview', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/store-api/page-overview',
                component: ComponentCreator('/zhihui-editor/docs/store-api/page-overview', '4f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/store-api/store-overview',
                component: ComponentCreator('/zhihui-editor/docs/store-api/store-overview', '041'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/theme',
                component: ComponentCreator('/zhihui-editor/docs/theme', 'c6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/zhihui-editor/docs/vue-integration',
                component: ComponentCreator('/zhihui-editor/docs/vue-integration', 'b86'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/zhihui-editor/',
    component: ComponentCreator('/zhihui-editor/', 'e65'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
