import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function getAllProducts() {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, []);
  return (
    <div className="ProductListPage">
      {products.map((oneProduct) => {
        return (
          <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
            <div className="product-card">
              <img alt={oneProduct.title} src={oneProduct.image} />
              <p>{oneProduct.title}</p>
              <p>{oneProduct.category}</p>
              <p>${oneProduct.price}</p>
              <p>{oneProduct.description.slice(0, 60)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
