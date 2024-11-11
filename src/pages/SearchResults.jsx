import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ListProducts from "../components/ListProducts";

function SearchResults() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    fetch(`https://backbazarapis.somee.com/api/sales/items${query}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [query]);

  return (
    <div>
      <ListProducts products={products} />
    </div>
  );
}

export default SearchResults;
