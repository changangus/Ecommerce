import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import { compose } from 'redux';
import withSpinner from '../with-spinner/WithSpinner.component';
import CollectionsOverview from './CollectionsOverview.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;