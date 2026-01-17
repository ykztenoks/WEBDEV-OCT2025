import { Link } from "react-router-dom";
const HomePage = ({ products }) => {
  return (
    <div>
      <h1>Product List:</h1>
      <section id="products-container">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img alt={product.title} src={product.thumbnail} />
              <Link to={`/product-detail/${product.id}`}>
                <h3>{product.title}</h3>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default HomePage;
