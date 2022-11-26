import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Store/cart-context";

import classes from "./ProductList.module.css";

const ProductList = (props) => {
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx.listOfItems);

    // console.log(item);

    const addToCartHandler = () => {
        if (cartCtx.listOfItems.length >= 1) {
            const itemIndex = cartCtx.listOfItems.findIndex((item) => {
                console.log(item.item.id);
                return item.item.id === props.id;
            });
            let item = cartCtx.listOfItems[itemIndex];
            if (item && Number(item.item.quantity) >= 1) {
                cartCtx.addItems({
                    ...props,
                    quantity: Number(item.item.quantity) + 1,
                });
            } else {
                cartCtx.addItems({ ...props, quantity: "1" });
            }
        } else {
            cartCtx.addItems({ ...props, quantity: "1" });
        }
    };

    return (
        <div className={classes.list}>
            <li key={props.id}>
                <div className={classes.title}>
                    <h3>{props.title}</h3>
                </div>
                <div className={classes.image}>
                    <Link to={`/store/${props.id}`}>
                        <img src={props.img} alt="" />
                    </Link>
                </div>
                <div className={classes.details}>
                    <span>${props.price}</span>
                    <button
                        className={classes.button}
                        onClick={addToCartHandler}
                    >
                        ADD TO CART
                    </button>
                </div>
            </li>
        </div>
    );
};

export default ProductList;
