import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Pages/HomePage/Home";
import Store from "./Components/Pages/StorePage/Store";
import Contact from "./Components/Pages/ContactPage/Contact";
import About from "./Components/Pages/AboutPage/About";
import Login from "./Components/Pages/LoginPage/LoginPage";
import CartProvider from "./Store/CartProvider";
import AuthContext from "./Store/AuthContext";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";

function App() {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <CartProvider>
            {!isLoggedIn && (
                <Switch>
                    <Route path="/store" exact>
                        <Redirect to="/" />
                    </Route>
                    <Route exact path="/about">
                        <Redirect to="/" />
                    </Route>
                    <Route exact path="/home">
                        <Redirect to="/" />
                    </Route>
                    <Route path="/contact">
                        <Redirect to="/" />
                    </Route>
                    <Route path="/store/:productId">
                        <Redirect to="/" />
                    </Route>
                    <Route exact path="/">
                        <Login />
                    </Route>
                </Switch>
            )}

            {isLoggedIn && (
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/store" />
                    </Route>
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
                    <Route path="/store/:productId">
                        <ProductDetail />
                    </Route>
                </Switch>
            )}
        </CartProvider>
    );
}

export default App;
