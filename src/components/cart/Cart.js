import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const actor of cart) {
        total = total + actor.salary;
    }
    return (
        <div className='cart-container'>
            <h4>Hired Actor : {props.cart.length}</h4>
            <h5>Total Amount : $ {total}</h5>

        </div>
    );
};

export default Cart;