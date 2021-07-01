import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3300/products').then(response => {
      setProducts(response.data);
    })
  }, []);

  return <div className="products">
    <ul className="productsList">
      {
        products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="title">{product.title}</div>
            </Link>
            <div className="price">Price: {product.price}</div>
          </li>
        ))
      }
    </ul>
  </div>
}
