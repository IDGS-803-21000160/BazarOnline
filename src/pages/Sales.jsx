import { useState, useEffect } from "react";
import ListSales from "../components/ListSales";
function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch("/api/sales")
      .then((response) => response.json())
      .then((data) => setSales(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Compras Registradas</h2>
      <ListSales sales={sales} />
    </div>
  );
}

export default Sales;
