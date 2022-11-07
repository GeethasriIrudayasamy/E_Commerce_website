import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/HomePage/Home";
import Store from "./Components/Pages/StorePage/Store";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import About from "./Components/Pages/AboutPage/About";
import CartProvider from "./Store/CartProvider";

function App() {
    return (
        <CartProvider>
            <Header />
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <Store />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </CartProvider>
    );
}

export default App;
