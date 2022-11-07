import React from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import AvailableProducts from "../../Products/AvailableProducts";
import classes from "./Store.module.css";

const Store = () => {
    return (
        <div>
            <Header />
            <div className={classes.head}>
                <h1>The Generics</h1>
            </div>
            <AvailableProducts />
            <Footer />
        </div>
    );
};

export default Store;
