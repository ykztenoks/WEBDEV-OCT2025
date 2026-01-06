import { NavLink } from "react-router-dom";
import logo from "../assets/ragnar.png";
const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <h2>Free Bay </h2>
      <section>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/add-product">Add Product</NavLink>
      </section>
    </nav>
  );
};
export default Navbar;
