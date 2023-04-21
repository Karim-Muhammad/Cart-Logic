// Lib
import React from "react";

// Components
import Header from "./Components/Layout/Header";
import MealsSection from "./Components/Layout/Meals";
import Cart from "./Components/UI/Cart";

// Context
import ctxCartUI from "./contexts/cart-show";
import CartDataProvider from "./contexts/cart-ctx";

// Styles
import "./App.css";

function App() {
  const [showCart, setShowCart] = React.useState(false);

  const cartUI = {
    isOpen: showCart,
    open: () => setShowCart(true),
    close: () => setShowCart(false),
  };

  return (
    <ctxCartUI.Provider value={cartUI}>
      <CartDataProvider>
        <div className="App">
          <Header />

          <main>
            {showCart && <Cart onClose={cartUI.close} />}
            <MealsSection />
          </main>
        </div>
      </CartDataProvider>
    </ctxCartUI.Provider>
  );
}

export default App;
