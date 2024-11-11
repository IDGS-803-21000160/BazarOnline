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
          className="w-full h-64 object-cover mb-4 border-4 border-gray-200 rounded-lg"
          src={product.thumbnail}
          alt={product.title}
        />
        <p className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
          {product.description}
        </p>
        <table className="min-w-full bg-white dark:bg-gray-800">
          <tbody>
            <tr className="border-b dark:border-gray-700"></tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                Precio
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                ${product.price}
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                Descuento
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                {product.discountPercentage}%
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                Rating
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                {product.rating}
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                Stock
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                {product.stock}
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                Marca
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                {product.brand}
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                Categoría
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                {product.category}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6">
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
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default DetailComplete;
