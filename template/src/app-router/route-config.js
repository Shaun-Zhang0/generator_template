import asyncComponent from '../components/route/async-component';

const routerConfigs = {
  MAIN: {
    path: '/',
    renderComponent: asyncComponent(() => import('../pages/main')), // 异步加载组件
  },
  TEST: {
    path: '/test',
    renderComponent: asyncComponent(() => import('../pages/test')), // 异步加载组件
  },
};
export default routerConfigs;
