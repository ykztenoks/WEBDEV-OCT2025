import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddProductPage = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState(0);
  const nav = useNavigate();
  async function handleAddProduct(e) {
    e.preventDefault();
    const newProduct = {
      title,
      thumbnail,
      price,
    };
    try {
      //fetch solution
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      console.log("fetch data", data);
      nav("/");
      //axios solution
      //   const { data } = await axios.post(
      //     "https://dummyjson.com/products/add",
      //     newProduct,
      //   );
      //   console.log("data", data);
      //   nav("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Add a Product:</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Product Title:
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Product Image:
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => {
              setThumbnail(e.target.value);
            }}
          />
        </label>
        <label>
          Product Price:
          <input
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <button>Add Product</button>
      </form>
    </div>
  );
};
export default AddProductPage;
