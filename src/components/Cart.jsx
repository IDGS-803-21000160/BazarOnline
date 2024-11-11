import { useCart } from "../pages/CartContext";
function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    console.log("Comprando", cartItems);

    const salesPayload = JSON.stringify(cartItems);

    console.log("Payload", salesPayload);

    fetch(`https://backbazarapis.somee.com/api/sales/addSale`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: salesPayload,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json().catch((error) => {
          throw new Error(`Error parsing JSON: ${error.message}`);
        });
      })
      .then((data) => {
        if (data.success) {
          alert("Compra realizada con éxito");
          clearCart();
        } else {
          alert("Hubo un problema con la compra");
        }
      })
      .catch((error) => {
        console.error("Error al comprar:", error);
        alert(`Hubo un problema con la compra: ${error.message}`);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Carrito de Compras
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">
          El carrito está vacío
        </p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.idProduct}
            className="mb-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Precio: ${item.price}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Cantidad: {item.quantity}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Total: ${item.total}
            </p>
            <button
              onClick={() => removeFromCart(item.idProduct)}
              className="mt-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Eliminar
            </button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="mt-6">
          <button
            onClick={handleCheckout}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
