import { defineConfig } from 'dumi';

const repo = 'rc-admin-components'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  outputPath: 'docs-dist',
  // apiParser: {},
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/index.ts',
  // },
  // 取消打包静态单个组件库和函数工具
  exportStatic: false,
  themeConfig: {
    name: 'react-admin-components',
    // nav: [
    //   { title: '指南', link: '/guide' },
    //   { title: '工具', link: '/utils' },
    //   { title: '组件', link: '/components' },
    // ],
  },
  styles: [
    `
    .dumi-default-header-left {
      width: 220px !important;
    }
    `
  ],
  theme: {
    '@c-primary': '#b62021',
    'primary-color': '#b62021',
  },
  
});
