import React, { useState } from 'react';
import { SHOP_DATA } from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      {collections.map(({id, ...props}) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  )
};

export default Shop

