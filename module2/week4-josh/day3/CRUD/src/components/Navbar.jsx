import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img alt="logo" />
      <h1>Crud Day! </h1>
      <NavLink to="/">Products List</NavLink>
      <NavLink to="/add-product">Add a Product</NavLink>
    </nav>
  );
};
export default Navbar;
