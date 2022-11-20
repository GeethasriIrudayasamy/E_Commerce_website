import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/HomePage/Home";
import Store from "./Components/Pages/StorePage/Store";
import Contact from "./Components/Pages/ContactPage/Contact";
import About from "./Components/Pages/AboutPage/About";
import Login from "./Components/Pages/LoginPage/LoginPage";
import CartProvider from "./Store/CartProvider";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";

function App() {
    return (
        <CartProvider>
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/store">
                    <Store />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/store/:productId">
                    <ProductDetail />
                </Route>
            </Switch>
        </CartProvider>
    );
}

export default App;
