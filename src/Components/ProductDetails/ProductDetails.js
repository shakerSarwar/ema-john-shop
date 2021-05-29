import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(product => product.key === productKey)
    return (
        <div>
            <h1>{productKey} Details coming soon</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;