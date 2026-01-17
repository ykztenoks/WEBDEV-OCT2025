import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AddProductPage from "./pages/AddProductPage";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
function App() {
  //state to store the products
  const [products, setProducts] = useState([]);
  //useEffect to fetch the products once
  useEffect(() => {
    async function getAllProducts() {
      try {
        //axios solution
        // const { data } = await axios.get("https://dummyjson.com/products");
        //fetch solution
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </>
  );
}

export default App;
