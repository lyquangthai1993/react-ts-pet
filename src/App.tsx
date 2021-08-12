import React from 'react';
import {Route, Switch} from "react-router-dom";
import {NotFound, PrivateRoute} from "./components/Common";
import Layout from "./components/Common/Layout";
import LoginPage from "./feature/auth/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path='/login'>
          <LoginPage></LoginPage>
        </Route>

        <PrivateRoute path='/admin'>
          <Layout></Layout>
        </PrivateRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
