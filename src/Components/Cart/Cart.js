import React, { useState } from "react";

import classes from "./Cart.module.css";
import CartProducts from "./CartProducts";

const Cart = () => {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true);
    };
    return (
        <div>
            <button onClick={showCartHandler} className={classes.cart}>
                Cart
            </button>
            {showCart && <CartProducts />}
        </div>
    );
};

export default Cart;
