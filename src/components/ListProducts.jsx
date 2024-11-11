import ProductDetails from "./ProductDetails";
import SearchBox from "./SearchBox";

const ListProducts = ({ products }) => {
  return (
    <div>
      <SearchBox></SearchBox>
      {products.map((product) => (
        <ProductDetails key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListProducts;
