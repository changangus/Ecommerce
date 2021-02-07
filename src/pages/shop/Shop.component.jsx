import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';
import CollectionPage from '../collection-page/Collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

const Shop = ({ match, updateCollections }) => {

	useEffect(() => {
		const collectionRef = firestore.collection('collections');
		
		  collectionRef.onSnapshot(async (snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			console.log(collectionsMap);	
			await updateCollections(collectionsMap);
		});
	});

	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
})



export default connect(null, mapDispatchToProps)(Shop);