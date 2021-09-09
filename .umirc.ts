import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  antd: {},
  dva: { immer: true, hmr: false },
  proxy: {
    '/api': {
      target: 'https://a.b.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
