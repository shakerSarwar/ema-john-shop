import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total , product) => total + product.price, 0);

    let shipping = 0;
    if (total > 500) {
        shipping = 0;
    } else if(total > 200){
        shipping = 5;
    }else if(total === 0){
        shipping = 0;
    }else{
        shipping = 10;
    }

    const tax = (total / 15);
    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div>  
            <h2>Order Summary</h2>
            <p>Items Ordered:{cart.length}</p>
            <p>Product Price : {parseFloat(total).toFixed(2)}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p>Tax / Vat = {parseFloat(tax).toFixed(2)}</p>
            <p>Total Price :{grandTotal}</p>
        </div>
    );
};

export default Cart;