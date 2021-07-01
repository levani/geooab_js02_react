import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"

export default function Product() {
  const { id } = useParams();
  let history = useHistory();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3300/products/${id}`).then(response => {
      setProductData(response.data);
    })
  }, [id]);
  
  return <div>
    <button onClick={() => {
      history.goBack();
    }}>go back</button>
    <h1>{productData.title}</h1>
  </div>
}
