import React from "react";

import { useParams } from "react-router-dom";
import { productsArr } from "../../Products/AvailableProducts";
import Product from "./Product";

const ProductDetail = (props) => {
    // console.log(props);

    let { productId } = useParams();
    // console.log(productId);

    const itemIndex = productsArr.findIndex((item) => {
        return item.id === productId;
    });
    let content;
    let item = productsArr[itemIndex];
    // console.log(item);

    if (item) {
        content = (
            <Product
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.imageUrl}
                price={item.price}
                allimgs={item.allimages}
                reviews={item.reviews}
            />
        );
    }

    return (
        <div>
            <div>{content}</div>
        </div>
    );
};

export default ProductDetail;

/******************************************************************************************************/
/*    const cartCtx = useContext(CartContext);

    const addItemToCart = (event) => {
        event.preventDefault();
        const quantity = document.getElementById(props.id).value;

        cartCtx.addItems({ ...props.item, quantity });
        console.log(cartCtx);
    };

    return (
        <form className={classes.form}>
            <Input
                label="Quantity"
                input={{
                    id: props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button onClick={addItemToCart}>+Add</button>
        </form>
    );*/
