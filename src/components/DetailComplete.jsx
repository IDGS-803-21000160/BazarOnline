import { useCart } from "../pages/CartContext";
import SearchBox from "./SearchBox";

const DetailComplete = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div>
      <SearchBox />
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700 p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {product.title}
        </h1>
        <img
          className="w-full h-64 object-cover mb-4"
          src={product.thumbnail}
          alt={product.title}
        />
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          {product.description}
        </p>
        <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Precio: ${product.price}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          Descuento: {product.discountPercentage}%
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          Rating: {product.rating}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          Stock: {product.stock}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          Marca: {product.brand}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Categoría: {product.category}
        </p>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Imágenes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {product.imagesList.map((image, index) => (
              <img
                key={index}
                className="w-full h-48 object-cover rounded-lg"
                src={image}
                alt={`${product.title} ${index}`}
              />
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default DetailComplete;
