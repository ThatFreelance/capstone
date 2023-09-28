import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h2>All Products</h2>
      </Link>

      <Link to="/mensclothing">
        <h2>Mens Clothing</h2>
      </Link>

      <Link to="/womensclothing">
        <h2>Womens Clothing</h2>
      </Link>

      <Link to="/jewelry">
        <h2>Jewelry</h2>
      </Link>

      <Link to="/electronics">
        <h2>Electronics</h2>
      </Link>

      <Link to="/cart">
        <ShoppingCart size={32} />
      </Link>
    </nav>
  );
}
