import React from 'react';
// dev dependent components
import { Route, Switch } from 'react-router-dom';
// page components
import Homepage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/Shop.component';


function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => <Homepage />} />
      <Route exact path='/shop' render={() => <Shop /> } />
    </Switch>
  );
}

export default App;
