import React, { useEffect ,useState} from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
   const [cart, setCart] = useState([]);

   const handleRemoveProduct =(productKey) => {
    const newCart = cart.filter(product => product.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
   };

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find(product => product.key === key);
            product.quantity = savedCart[key];
            return product;
        })
     setCart(cartProducts);
    },[]);

    return (
        <div>
            <h1>Cart Item : {cart.length}</h1>
            {
                cart.map(product => 
                <ReviewItem 
                key={product.key}
                handleRemoveProduct = {handleRemoveProduct}
                product={product}>

                </ReviewItem>)
            }
        </div>
    );
};

export default Review;