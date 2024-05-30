import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="ordenarProductos">
      {products && products.length > 0 ? (
        products.map((product) => <Item key={product._id} {...product} />)
      ) : (
        <p>No hay productos para mostrar</p>
      )}
    </div>
  );
};

export default ItemList;
