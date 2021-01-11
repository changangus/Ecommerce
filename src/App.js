import React from 'react';
import './App.css';
// dev dependent components
import { Route, Switch } from 'react-router-dom';
// page components
import Homepage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';


function App() {
  return (
    <div>
      <Header /> 
      <Switch>
        <Route exact path='/' render={() => <Homepage />} />
        <Route exact path='/shop' render={() => <Shop /> } />
      </Switch>
    </div>

  );
}

export default App;
