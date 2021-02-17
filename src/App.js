import React, { useEffect } from 'react';
import './App.css';
// dev dependent components
import { Route, Switch, Redirect } from 'react-router-dom';
// page components
import Homepage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import RegisterAndSignInPage from './pages/register-page/register';
import CheckoutPage from './pages/checkout-page/Checkout.component';
// Auth
import { auth, createUserProfileDocument, /*addCollectionAndDocuments*/} from './firebase/firebase.utils';
// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
// Selectors
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
// Actions
import { checkUserSession } from './redux/user/user.actions';
/* 
**Used to add firebase collection:**
import { selectCollectionsForPreview } from './redux/shop/shop.selector'; 
*/


function App({ checkUserSession, currentUser, /*collectionsArray */}) {
	useEffect(() => {
		checkUserSession()
	}, []);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" render={() => <Homepage />} />
				<Route path="/shop" render={(routeProps) => <Shop {...routeProps} />} />
				<Route
					exact
					path="/signin"
					render={() => (currentUser ? <Redirect to="/" /> : <RegisterAndSignInPage />)}
				/>
				<Route exact path="/checkout" render={() => <CheckoutPage />} />
			</Switch>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	// collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () =>  dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);