import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="ordenarProductos">
      {products ? (
        products.map((product) => (
          <Item key={product._id} {...product} />
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};


export default ItemList;
