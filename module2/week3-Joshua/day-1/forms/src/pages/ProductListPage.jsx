import { Link } from "react-router-dom";

const ProductListPage = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <div id="products-container">
        {products.map((oneProduct) => {
          return (
            <div key={oneProduct.id} className="product-card">
              <img src={oneProduct.thumbnail} alt={oneProduct.title} />
              <p>{oneProduct.title}</p>
              <p>Price: {oneProduct.price}</p>
              <p>
                Status:
                {oneProduct.availabilityStatus === "Low Stock"
                  ? " Low"
                  : " Full"}
              </p>
              <p>
                Ragnar's Choice:{" "}
                {oneProduct.ragnarChoice
                  ? "Ragnar Recommends"
                  : "Ragnar does not like"}
              </p>
              <Link to={`/edit-product/${oneProduct.id}`}>
                <button>Edit</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductListPage;
