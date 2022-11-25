import React, { useState } from "react";

import classes from "./Cart.module.css";
import CartProducts from "./CartProducts";

const Cart = () => {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true);
    };
    const hideCartHandler = () => {
        setShowCart(false);
    };
    return (
        <div>
            {showCart && <CartProducts onClose={hideCartHandler} />}
            
            <button onClick={showCartHandler} className={classes.cart}>
                Cart
            </button>
        </div>
    );
};

export default Cart;
