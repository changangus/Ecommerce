import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/CollectionPreview.component';

import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...props }) => <CollectionPreview key={id} {...props} />)}
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)
