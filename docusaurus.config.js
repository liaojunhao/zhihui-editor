// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  scripts: ['https://static.taishan.qq.com/demo-data/button-v1.js'],
  title: 'Zhihui Editor',
  staticDirectories: ['public', 'static'],
  themes: ['@docusaurus/theme-live-codeblock'],
  tagline: '快速构建图形编辑器',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://liaojunhao.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/zhihui-editor/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'liaojunhao', // Usually your GitHub org/user name.
  projectName: 'zhihui-editor', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false, // 尾部加不加斜杠

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-hans',
    locales: ['zh-hans']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          sidebarCollapsed: false
        },
        blog: {
          showReadingTime: false,
          blogSidebarTitle: '全部',
          blogSidebarCount: 'ALL' // 默认显示多少博客文，默认是5
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '腾讯云智绘',
        logo: {
          alt: '腾讯云智绘',
          src: 'img/logo.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档'
          },
          { to: '/blog', label: 'AI应用', position: 'left' },
          { to: '/pricing', label: '订阅', position: 'left' },
          {
            href: 'https://static.taishan.qq.com/h5/desgin/index.html',
            label: '预览',
            position: 'right'
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '指南',
            items: [
              {
                label: '文档',
                to: '/docs/intro'
              },
              {
                label: '订阅',
                to: '/pricing'
              }
            ]
          },
          {
            title: '关于',
            items: [
              {
                label: '腾讯云智绘',
                href: 'https://cloud.tencent.com/product/taidc'
              },
              {
                label: '智绘官网',
                href: 'https://zhihui.qq.com'
              },
              // {
              //   label: '关于我们',
              //   href: '/introduce'
              // },
              {
                label: '联系我们',
                href: '/contact'
              }
            ]
          },
          {
            title: '更多',
            items: [
              {
                label: 'AI应用',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus'
              }
            ]
          }
        ],
        copyright: `Copyright © 1998 - ${new Date().getFullYear()} 腾讯云智绘. All Rights Reserved. 腾讯云智绘 版权所有`
      },
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula
      }
    })
};

export default config;
