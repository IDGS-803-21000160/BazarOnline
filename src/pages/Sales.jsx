import { useState, useEffect } from "react";
import ListSales from "../components/ListSales";
function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch("https://backbazarapis.somee.com/api/sales/sales")
      .then((response) => response.json())
      .then((data) => setSales(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <ListSales sales={sales} />
    </div>
  );
}

export default Sales;
