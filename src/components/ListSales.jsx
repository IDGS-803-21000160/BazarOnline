import { Link } from "react-router-dom";

const ListSales = ({ sales }) => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../../public/bazzar.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <Link to="/"> Bazar Online</Link>
            </span>
          </a>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          ></div>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Lista de Compras
        </h2>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {sales.map((sale) => (
            <li key={sale.id} className="py-4">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <p className="text-gray-700 dark:text-gray-300">
                    Total: ${sale.total}
                  </p>
                  <span className="ml-4 bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    {sale.fechaVenta}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListSales;
