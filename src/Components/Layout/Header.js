import { NavLink, useHistory } from "react-router-dom";
import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import AuthContext from "../../Store/AuthContext";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";

const Header = () => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const isLoggedIn = authCtx.isLoggedIn;
    // console.log(cartCtx);
    console.log(authCtx);

    const logoutHandler = () => {
        authCtx.logout();
        history.replace("/");
    };

    return (
        <div>
            <header>
                <div className={classes.header}>
                    <section className={classes.navlist}>
                        {isLoggedIn && (
                            <li>
                                <NavLink className={classes.navlist} to="/home">
                                    HOME
                                </NavLink>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li>
                                <NavLink
                                    className={classes.navlist}
                                    to="/store"
                                >
                                    STORE
                                </NavLink>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li>
                                <NavLink
                                    className={classes.navlist}
                                    to="/about"
                                >
                                    ABOUT
                                </NavLink>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li>
                                <NavLink
                                    className={classes.navlist}
                                    to="/contact"
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                        )}
                        {!isLoggedIn && (
                            <li>
                                <NavLink className={classes.navlist} to="/">
                                    LOGIN /CREATE ACCOUNT
                                </NavLink>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li>
                                <button
                                    style={{
                                        cursor: "pointer",
                                        background: "transparent",
                                        color: "white",
                                        fontSize: "18px",
                                        fontFamily: "inherit",
                                        border: "1px solid white",
                                        borderRadius: "3px",
                                    }}
                                    onClick={logoutHandler}
                                >
                                    LOGOUT
                                </button>
                            </li>
                        )}
                    </section>
                    {isLoggedIn && (
                        <div>
                            <Cart />
                            <span className={classes["cart-number"]}>
                                {cartCtx.totalQuantity}
                            </span>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;
