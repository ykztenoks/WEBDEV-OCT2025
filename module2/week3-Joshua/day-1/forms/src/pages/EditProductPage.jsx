import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProductPage = ({ products, setProducts }) => {
  const { productId } = useParams();
  const oneProduct = products.find((product) => {
    if (product.id == productId) {
      return true;
    }
  });
  const nav = useNavigate();
  const [title, setTitle] = useState(oneProduct.title);
  const [price, setPrice] = useState(oneProduct.price);
  const [image, setImage] = useState(oneProduct.thumbnail);
  const [ragnarChoice, setRagnarChoice] = useState(oneProduct.ragnarChoice);
  const [availabilityStatus, setAvailabilityStatus] = useState(
    oneProduct.availabilityStatus
  );

  function handleEditProduct(event) {
    event.preventDefault();
    const updatedProduct = {
      id: oneProduct.id,
      title,
      price,
      ragnarChoice,
      availabilityStatus,
      thumbnail: image,
    };
    const mappedProducts = products.map((oneProduct) => {
      if (oneProduct.id == productId) {
        return { ...oneProduct, ...updatedProduct };
      } else {
        return oneProduct;
      }
    });
    setProducts(mappedProducts);

    //navigate back to the list of products
    nav("/products");
  }
  return (
    <div>
      <h2>Edit Product</h2>
      <div className="form-page">
        <form onSubmit={handleEditProduct}>
          <label>
            Product Title:
            <input
              type="text"
              placeholder="put the title here"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
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
              value={ragnarChoice}
              onChange={(e) => {
                setRagnarChoice(e.target.value);
              }}
            />
          </label>
          <label>
            Status:
            <select
              onChange={(e) => {
                setAvailabilityStatus(e.target.value);
              }}
            >
              <option value="none">--none--</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
            </select>
          </label>
          <button>Update Product</button>
        </form>
      </div>
    </div>
  );
};
export default EditProductPage;
