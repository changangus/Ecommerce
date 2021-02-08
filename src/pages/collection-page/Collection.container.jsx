import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import CollectionPage from './Collection.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import withSpinner from '../../components/with-spinner/WithSpinner.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionContainer;