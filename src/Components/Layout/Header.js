import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";

const Header = () => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx.totalQuantity);
    return (
        <div>
            <header>
                <div className={classes.header}>
                    <section>
                        <a href="/">HOME</a>
                        <a href="/">STORE</a>
                        <a href="/">ABOUT</a>
                    </section>
                    <div>
                        <Cart />
                        <span className={classes["cart-number"]}>
                            {cartCtx.totalQuantity}
                        </span>
                    </div>
                </div>
            </header>
            <div className={classes.head}>
                <h1>The Generics</h1>
            </div>
        </div>
    );
};

export default Header;
