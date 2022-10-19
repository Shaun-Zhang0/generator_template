import asyncComponent from '../components/route/async-component';

const routerConfigs = {
  MAIN: {
    path: '/12312',
    render: () => asyncComponent(import('../pages/main')),
  },
};
export default routerConfigs;
