import React, { PureComponent, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import routerConfigs from './route-config';

export default class AppRouter extends PureComponent {
  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <Router>
          <Routes>
            {Object.keys(routerConfigs).map((key) => {
              return (
                <Route
                  key={key}
                  path={routerConfigs[key].path}
                  element={routerConfigs[key].renderComponent()}
                />
              );
            })}
            {/*<Route path={routerConfigs.MAIN.path} element={<Main />} />*/}
            {/*<Route path={routerConfigs.TEST.path} element={<Test />} />*/}
          </Routes>
        </Router>
      </Suspense>
    );
  }
}
