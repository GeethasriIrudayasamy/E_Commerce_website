import React, { useState } from "react";

import classes from "./Cart.module.css";
import CartProducts from "./CartProducts";

const Cart = () => {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart((prevVAl) => !prevVAl);
    };
    return (
        <div>
            {showCart && <CartProducts />}
            <button onClick={showCartHandler} className={classes.cart}>
                Cart
            </button>
        </div>
    );
};

export default Cart;
