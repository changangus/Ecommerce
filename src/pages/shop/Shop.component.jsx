import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';
import { createStructuredSelector } from 'reselect';

const Shop = ({ collections }) => {

	return (
		<div className="shop-page">
			{collections.map(({ id, ...props }) => <CollectionPreview key={id} {...props} />)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(Shop);