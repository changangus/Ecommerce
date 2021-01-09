import React from 'react';
// dev dependent components
import { Route, Switch } from 'react-router-dom';
// page components
import Homepage from './pages/homepage/Homepage.component';


function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => <Homepage />} />
    </Switch>
  );
}

export default App;
