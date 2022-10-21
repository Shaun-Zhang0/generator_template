import asyncComponent from '../components/route/async-component';

const routerConfigs = {
  MAIN: {
    path: '/',
    renderComponent: asyncComponent(() => import('../pages/main')),
  },
  TEST: {
    path: '/test',
    renderComponent: asyncComponent(() => import('../pages/test')),
  },
};
export default routerConfigs;
