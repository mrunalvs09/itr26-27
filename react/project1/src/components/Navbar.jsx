import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Logo</Link>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
    </>
  );
}

export default Navbar;