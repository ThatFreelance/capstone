import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../../Utilities/TabTitle";
import { getJewelry } from "../../API/Jewelry";
import AddToCart from "../AddToCart";

export default function Jewelry() {
  const [jewelry, setJewelry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useNavigate();

  TabTitle("OneShop | Jewelry" );


  useEffect(() => {

    const fetchJewelry = async () => {
      try {
        const data = await getJewelry();
        setJewelry(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetchJewelry();
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error) {
    return <div className="error">Error</div>;
  }

  return (
    <>
    {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {jewelry.map((product) => (
        <div className="card" key={product.id}>
          <div            
            style={{ cursor: "pointer" }}
            onClick={() => location(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.title} />
          </div>
          <h1>{product.title}</h1>
          <p>${product.price}</p>
          <details>
            <h3>Product Description:</h3>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            Rating: {product.rating.rate}/5 <br />
            Total Reviews: {product.rating.count}
          </details>
          <AddToCart productId={product.id} />        
        </div>
      ))}
    
    </>
  );
}
