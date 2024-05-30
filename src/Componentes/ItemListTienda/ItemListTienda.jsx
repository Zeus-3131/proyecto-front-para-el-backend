import React from "react";
import Item from "../Item/Item";
import "./ItemListTienda.css";

const ItemListTienda = ({ productos }) => {
  return (
    <div className="ordenarProductosTienda">
      {productos && productos.length > 0 ? (
        productos.map((producto) => <Item key={producto.id} {...producto} />)
      ) : (
        <p>No hay productos para mostrar</p>
      )}
    </div>
  );
};

export default ItemListTienda;
