import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';
import CollectionPage from '../collection-page/Collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/WithSpinner.component';

const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const Shop = ({ match, updateCollections }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const collectionRef = firestore.collection('collections');
		
		collectionRef.get().then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			console.log(collectionsMap);	
			updateCollections(collectionsMap);
			setLoading(false);
		});
	});

	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
			<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
})



export default connect(null, mapDispatchToProps)(Shop);