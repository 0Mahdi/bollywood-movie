import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    const total = cart.reduce((acc, worker) => acc + worker.amount, 0);

    return (
        <div className="cart">
            <h3>Team Mates Added: {cart.length}</h3>
            <h5>Total Cost: {total}</h5>

            <h2>Team Members Name:</h2>
            <ul>
                {cart.map(worker => (
                    <li key={worker._id}>{worker.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
