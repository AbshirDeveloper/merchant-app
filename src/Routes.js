import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  Iibsi, Xisaabiye, Dayn, Badeeco, Amaano
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/iibsi"
      />
      <RouteWithLayout
        component={Iibsi}
        exact
        layout={MainLayout}
        path="/iibsi"
      />
      <RouteWithLayout
        component={Badeeco}
        exact
        layout={MainLayout}
        path="/badeeco"
      />
      <RouteWithLayout
        component={Xisaabiye}
        exact
        layout={MainLayout}
        path="/xisaabiye"
      />
      <RouteWithLayout
        component={Dayn}
        exact
        layout={MainLayout}
        path="/dayn"
      />
      <RouteWithLayout
        component={Amaano}
        exact
        layout={MainLayout}
        path="/amaano"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
