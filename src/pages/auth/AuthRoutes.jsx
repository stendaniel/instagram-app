

import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Auth } from '../../services/path';
import { AuthPages } from '../Lazy';

export default function AuthRoutes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path={Auth.register} element={<AuthPages.Register />}/>
        <Route path={Auth.login} element={<AuthPages.Login />}/>
      </Switch>
    </React.Fragment>
  )
};
