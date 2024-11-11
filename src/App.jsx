import { Routes, Route } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import ProductDetail from "./pages/ProductDetail";
import Sales from "./pages/Sales";
import "./index.css";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<SearchResults></SearchResults>} />
        <Route path="/item/:id" element={<ProductDetail />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
