import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailComplete from "../components/DetailComplete";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://backbazarapis.somee.com/api/sales/items/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div>
      {product ? <DetailComplete product={product} /> : <p>Loading...</p>}
    </div>
  );
}

export default ProductDetail;
