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
// Redux
import { connect } from 'react-redux';
// Selectors
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
// Actions
import { checkUserSession } from './redux/user/user.actions';

function App({ checkUserSession, currentUser}) {
	useEffect(() => {
		checkUserSession()
	}, [checkUserSession]);

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