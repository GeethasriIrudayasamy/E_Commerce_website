import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/HomePage/Home";
import Store from "./Components/Pages/StorePage/Store";

import About from "./Components/Pages/AboutPage/About";
import CartProvider from "./Store/CartProvider";

function App() {
    return (
        <CartProvider>
            
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
            
        </CartProvider>
    );
}

export default App;
