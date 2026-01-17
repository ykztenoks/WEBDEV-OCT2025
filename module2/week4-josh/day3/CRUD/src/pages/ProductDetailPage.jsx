import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getOneProduct() {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneProduct();
  }, [id]);

  return (
    <div>
      <h2>{product.title}'s Detail Page</h2>
      <img alt="picture" src={product.thumbnail} />
      <h3>Price: ${product.price}</h3>
    </div>
  );
};
export default ProductDetailPage;
