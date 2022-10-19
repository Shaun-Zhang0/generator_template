import React, { PureComponent } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import routerConfigs from './route-config';
import Main from '../pages/main';

export default class AppRouter extends PureComponent {
  render() {
    return (
      <Router>
        <Routes>
          {/*{Object.keys(routerConfigs).map((key) => {*/}
          {/*  return (*/}
          {/*    <Route*/}
          {/*      path={routerConfigs[key].path}*/}
          {/*      component={routerConfigs[key].render()}*/}
          {/*    />*/}
          {/*  );*/}
          {/*})}*/}
          <Route path={routerConfigs.MAIN.path} component={<Main />} />
        </Routes>
      </Router>
    );
  }
}
