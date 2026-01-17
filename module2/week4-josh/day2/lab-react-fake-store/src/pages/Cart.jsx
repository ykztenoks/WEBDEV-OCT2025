import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    async function getCart() {
      try {
        const arrayOfProducts = [];
        const response = await axios.get("https://fakestoreapi.com/carts/3");
        console.log(response.data);
        for (let i = 0; i < response.data.products.length; i++) {
          const currentProduct = response.data.products[i];
          const oneProduct = await axios.get(
            `https://fakestoreapi.com/products/${currentProduct.productId}`,
          );
          oneProduct.data.quantity = currentProduct.quantity;
          arrayOfProducts.push(oneProduct.data);
          const subtotal = oneProduct.data.price * currentProduct.quantity;
          console.log(currentProduct, currentProduct.quantity);
          setGrandTotal((prev) => prev + subtotal);
        }
        console.log(arrayOfProducts);
        setCartProducts(arrayOfProducts);
      } catch (error) {
        console.log(error);
      }
    }
    getCart();
  }, []);
  return (
    <div>
      <h1>Cart</h1>
      {cartProducts.map((oneProduct) => {
        return (
          <div className="product-card" key={oneProduct.id}>
            <img alt={oneProduct.title} src={oneProduct.image} />
            <p>{oneProduct.title}</p>

            <p>Price: ${oneProduct.price}</p>
            <p>Quantity: {oneProduct.quantity}</p>
            <p>
              Subtotal: ${(oneProduct.price * oneProduct.quantity).toFixed(2)}
            </p>
          </div>
        );
      })}
      <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
    </div>
  );
};
export default Cart;
