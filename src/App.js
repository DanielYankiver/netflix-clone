import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';


export default function App() {
  return (
    <Router>
      <Route path="/browse">
          <Browse />
      </Route>
      <Route path="/signin">
          <SignIn />
      </Route>
      <Route path="/signup">
          <SignUp />
      </Route>
      <Route exact path={ROUTES.HOME} >
        <Home /> 
      </Route>
    </Router>
  );
}
