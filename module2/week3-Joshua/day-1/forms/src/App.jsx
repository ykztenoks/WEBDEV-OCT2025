import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductListPage from "./pages/ProductListPage";
import AddProductPage from "./pages/AddProduct";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getAllProducts() {
      try {
        const { data } = await axios("https://dummyjson.com/products");
        console.log("all products", data);
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
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={<ProductListPage products={products} />}
          />
          <Route
            path="/add-product"
            element={
              <AddProductPage products={products} setProducts={setProducts} />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
