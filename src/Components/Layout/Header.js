import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";

const Header = () => {
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx.totalQuantity);
    return (
        <div>
            <header>
                <div className={classes.header}>
                    <section className={classes.navlist}>
                        <li>
                            <NavLink className={classes.navlist} to="/home">
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.navlist} to="/">
                                STORE
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.navlist} to="/about">
                                ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={classes.navlist} to="/contact">
                                CONTACT
                            </NavLink>
                        </li>
                    </section>
                    <div>
                        <Cart />
                        <span className={classes["cart-number"]}>
                            {cartCtx.totalQuantity}
                        </span>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
