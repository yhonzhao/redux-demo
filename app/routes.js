import React from 'react';
import {Route} from 'react-router';
import App from './containers/App';
import Authenticated from './authentication/Authenticated';
import Redirect from './containers/Redirect';
import Demo from './containers/demo';


export default (
  <Route>
    <Route component={App}>
      <Route component={Authenticated}>

      </Route>
    </Route>
    <Route component = {Demo} path="/demo"/>
    <Route path="/r" component={Redirect}/>
  </Route>
);
