import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Login from "./components/Login";
import SingleProduct from "./components/SingleProduct";
import MensClothing from "./components/Category/MensClothing";
import WomensClothing from "./components/Category/WomensClothing";
import Electronics from "./components/Category/Electronics";
import Jewelry from "./components/Category/Jewelry";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [token, setToken] = useState("");

  const handle_token = localStorage.getItem("handle_token");
  console.log(handle_token);

  const handleLogout = () => {
    localStorage.clear(handle_token);
    window.location.reload();
  };

  return (
    <main>
      <Header />
      <div className="user">

        {handle_token ? (
          <Link to="/logout" onClick={handleLogout}>
            <h2>Logout</h2>
          </Link>
        ) : (
          <Link to="/login">
            <h2>Sign in</h2>
          </Link>
        )}
      </div>
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/mensclothing" element={<MensClothing />} />
          <Route path="/womensclothing" element={<WomensClothing />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/cart" element={<Cart token={token} />} />
        </Routes>
      </section>
      <Footer />
    </main>
  );
}
