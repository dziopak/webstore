import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { collectionsFetch } from './../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const CollectionContainer = lazy(() =>
  import('../collection/collection.container')
);
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CheckoutPage = lazy(() => import('../checkout/checkout.component'));

const ShopPage = ({ collectionsFetch, match }) => {
  useEffect(() => {
    collectionsFetch();
  }, []);

  const { path } = match;
  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={path} component={CollectionsOverviewContainer} />
          <Route path={`${path}/checkout`} exact component={CheckoutPage} />
          <Route path={`${path}/:collection`} component={CollectionContainer} />
        </Switch>
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  collectionsFetch: () => dispatch(collectionsFetch())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
