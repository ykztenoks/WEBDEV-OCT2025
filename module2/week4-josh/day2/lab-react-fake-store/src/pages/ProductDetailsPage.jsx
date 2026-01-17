import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function getOneProduct() {
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then(({ data }) => {
          console.log(data);
          setProduct(data);
        })
        .catch((err) => console.log(err));
    }
    getOneProduct();
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <img
        alt={product.title}
        src={product.image}
        style={{ height: "200px" }}
      />
      <h3>{product.category}</h3>
      <h3>Price: ${product.price.toFixed(2)}</h3>
    </div>
  );
}

export default ProductDetailsPage;
