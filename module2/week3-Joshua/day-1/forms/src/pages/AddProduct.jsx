import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ products, setProducts }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [ragnarChoice, setRagnarChoice] = useState(true);
  const [availabilityStatus, setAvailabilityStatus] = useState(null);
  //create a variable for the nav
  const nav = useNavigate();

  function handleChangePrice(event) {
    setPrice(event.target.value);
  }
  function handleAddProduct(event) {
    //first thing to always do when submitting a form is stop the reload with preventDefault()
    event.preventDefault();
    // create a new variable that has all of the data from the states
    const newProduct = {
      title: title,
      price: price,
      thumbnail: image,
      ragnarChoice,
      availabilityStatus,
    };
    console.log("product added", newProduct);
    // set the array of products that were sent as props to be all the original plus the new product
    setProducts([newProduct, ...products]);

    //after adding the new product, set all of the states back to original values
    setTitle("");
    setPrice(0);
    setImage("");

    // Joshua preferred way is to 'navigate' to the list page after adding the new product
    nav("/products");
  }
  return (
    <div className="form-page">
      <form onSubmit={handleAddProduct}>
        <label>
          Product Title:
          <input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            type="text"
            placeholder="put the title here"
          />
        </label>
        <label>
          Product Price:
          <input type="number" value={price} onChange={handleChangePrice} />
        </label>
        <label>
          Product Picture:
          <input
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
          Ragnar Choice:
          <input
            type="checkbox"
            checked={ragnarChoice}
            onChange={(e) => {
              setRagnarChoice(e.target.checked);
            }}
          />
        </label>
        <label>
          Status:
          <select
            onChange={(event) => {
              setAvailabilityStatus(event.target.value);
            }}
          >
            <option value="none">--none--</option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
          </select>
        </label>
        <button>Add Product</button>
      </form>
    </div>
  );
};
export default AddProduct;
