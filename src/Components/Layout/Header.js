import React from "react";
import classes from "./Header.module.css";

const Header = () => {
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
                        <button className={classes.cart}>Cart</button>
                        <span className={classes["cart-number"]}>0</span>
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
