import React, { useEffect } from 'react';
import './App.css';
// dev dependent components
import { Route, Switch } from 'react-router-dom';
// page components
import Homepage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import RegisterAndSignInPage from './pages/register-page/register';
// Auth
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
function App({ setCurrentUser }) {
  
  useEffect(() => {
      const unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
      return unSubscribeFromAuth;
      } 
    )
  }); 

  

  return (
    <div>
      <Header/> 
      <Switch>
        <Route exact path='/' render={() => <Homepage />} />
        <Route exact path='/shop' render={() => <Shop /> } />
        <Route exact path='/signin' render={() => <RegisterAndSignInPage />} />
      </Switch>
    </div>

  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App);
