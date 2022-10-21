import React, { PureComponent, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import routerConfigs from './route-config';

export default class AppRouter extends PureComponent {
  render() {
    return (
      <Suspense fallback={null}>
        <Router>
          <Routes>
            {Object.keys(routerConfigs).map((key) => {
              const RouteElement = routerConfigs[key].renderComponent;
              return (
                <Route
                  key={key}
                  path={routerConfigs[key].path}
                  element={<RouteElement />}
                />
              );
            })}
          </Routes>
        </Router>
      </Suspense>
    );
  }
}
