const ListSales = ({ sales }) => {
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          <p>{sale.date}</p>
          <p>{sale.total}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListSales;
