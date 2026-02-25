// App.jsx

import { useState, useEffect } from "react";
import { getProducts, getCart } from "./api/productApi";

import "./App.css";

import { LoginPage } from "./pages/LoginPage/LoginPage";
import { CheckoutPage } from "./pages/checkoutpage/checkoutPage";
import HomePage from "./pages/homepage/HomePage";

import { Route, Routes } from "react-router-dom";

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const [cart, setCart] = useState(null);

 
  const refreshCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setCart(null);
      return;
    }

    try {
      const data = await getCart();
      setCart(data);
    } catch (err) {
      console.error("Cart load failed", err);
    }
  };

  useEffect(() => {

    const loadData = async () => {

      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }

      await refreshCart();
    };

    loadData();

  }, []);

  return (
    <Routes>

      <Route
        path="/"
        element={
          <HomePage
            products={products}
            cart={cart}
            loading={loading}
            error={error}
            refreshCart={refreshCart}
          />
        }
      />

      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/checkout"
        element={
          <CheckoutPage
            cart={cart}
            refreshCart={refreshCart}
          />
        }
      />

    </Routes>
  );
}

export default App;