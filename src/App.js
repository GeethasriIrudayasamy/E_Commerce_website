import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import AvailableProducts from "./Components/Products/AvailableProducts";
import CartProvider from "./Store/CartProvider";

function App() {
    return (
        <CartProvider>
            <Header />
            <AvailableProducts />
            <Footer />
        </CartProvider>
    );
}

export default App;
