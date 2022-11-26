import React, { useState, useContext, useCallback, useEffect } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const authCtx = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    const [totalAmount, setTotalAmount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    let email;
    if (authCtx.isLoggedIn) {
        email = authCtx.email.replace(/[@.]/g, "");
    }
    // console.log(email);

    const getCartItemFromDb = useCallback(async () => {
        // console.log(" getcartitem called");
        if (email) {
            // const response = await fetch(
            //     `https://crudcrud.com/api/d5a5f82306ac46888fbc3bee9f50e267/cart${email}`
            // );
            const response = await fetch(
                `https://e-commerce-website-f6d8a-default-rtdb.firebaseio.com/cart${email}.json`
            );

            let data = await response.json();
            // console.log(data);
            if (data != null) {
                const cartItem = [];
                let amount = 0;
                let totalquantity = 0;

                for (const key in data) {
                    // console.log(JSON.parse(data[key].updatedItem));
                    let item = JSON.parse(data[key].updatedItem);
                    amount += Number(item.price) * Number(item.quantity);
                    totalquantity = totalquantity + Number(item.quantity);
                    cartItem.push({
                        item: item,
                        // email: data[key].email,
                        _id: key,
                        // quantity: Number(data[key].updatedItem.quantity),
                    });
                    // console.log(cartItem);
                    setTotalAmount(amount);
                    setTotalQuantity(totalquantity);
                    setCartItems(cartItem);
                }
            } else {
                setCartItems([]);
                setTotalAmount(0);
                setTotalQuantity(0);
            }
        }
    }, [email]);
    useEffect(() => {
        getCartItemFromDb();
    }, [getCartItemFromDb]);

    const addItemToCartHandler = useCallback(
        async (item) => {
            // const updatedTotalAmount = cart_context.totalAmount + item.price;
            // setTotalAmount(updatedTotalAmount);
            // setTotalQuantity((preQty) => preQty + 1);
            // console.log(cartItems);

            const itemIdx = cartItems.findIndex((i) => i.item.id === item.id);
            let existingItem = cartItems[itemIdx];
            if (existingItem) {
                // console.log(existingItem._id);
                let userId = existingItem._id;

                // let updatedItem = {
                //     ...existingItem,
                //     quantity: +existingItem.quantity + 1,
                // };

                // let updatedItems = [...cartItems];
                // updatedItems[itemIdx] = updatedItem;

                let updatedItem = {
                    ...item,
                    email,
                };
                // let updatedItems = [...cartItems];
                // updatedItems[itemIdx] = updatedItem;
                // setCartItems(updatedItems);

                await axios
                    .put(
                        `https://e-commerce-website-f6d8a-default-rtdb.firebaseio.com/cart${email}/${userId}.json`,
                        {
                            updatedItem: JSON.stringify(updatedItem),
                        }
                    )
                    .then(() => {
                        getCartItemFromDb();
                    });
            } else {
                let updatedItem = { ...item, email };

                //, quantity: "1"

                setCartItems(updatedItem);

                await axios
                    .post(
                        `https://e-commerce-website-f6d8a-default-rtdb.firebaseio.com/cart${email}.json`,
                        {
                            updatedItem: JSON.stringify(updatedItem),
                            // headers: {
                            //     "Content-Type": "application/json",
                            // },
                        }
                    )
                    .then(() => {
                        getCartItemFromDb();
                    });

                // if (response.ok) {
                //     getCartItemFromDb();
                // }
            }
        },
        [cartItems, email, getCartItemFromDb]
    );

    const removeItemToCartHandler = async (item) => {
        const itemIdx = cartItems.findIndex((i) => i.item.id === item.id);
        let existingItem = cartItems[itemIdx];
        let userId = existingItem._id;

        await axios
            .delete(
                `https://e-commerce-website-f6d8a-default-rtdb.firebaseio.com/cart${email}/${userId}.json`,
                {
                    method: "DELETE",
                }
            )
            .then(() => {
                getCartItemFromDb();
            });

        /***************************************************************************************************************/
        // const itemIndex = cartItems.findIndex((item) => {
        //     return item.id === id;
        // });
        // // let selectedItem = cartItems[itemIndex];
        // // setTotalAmount(cart_context.totalAmount - selectedItem.price);
        // // setTotalQuantity((preQty) => preQty - 1);
        // // let updatedItem, updatedItems;
        // // if (selectedItem.quantity > 1) {
        // //     updatedItem = {
        // //         ...selectedItem,
        // //         quantity: +selectedItem.quantity - 1,
        // //     };
        // //     updatedItems = [...cartItems];
        // //     updatedItems[itemIndex] = updatedItem;
        // //     setCartItems(updatedItems);
        // //     return;
        // // } else {
        // //     updatedItems = cartItems.filter((item) => {
        // //         return item.id !== id;
        // //     });
        // //     setCartItems(updatedItems);
        // // }
    };

    const cart_context = {
        listOfItems: cartItems,
        totalAmount: +totalAmount,
        totalQuantity: +totalQuantity,
        addItems: addItemToCartHandler,
        removeItems: removeItemToCartHandler,
    };

    return (
        <div>
            <CartContext.Provider value={cart_context}>
                {props.children}
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider;
