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


// import React from "react";
// import "./ItemListTienda.css";

// const ItemListTienda = ({ productos }) => {
//   return (
//     <div className="ordenarProductosTienda">
//       {productos && productos.length > 0 ? (
//         productos.map((producto) => (
//           <div key={producto._id} className="item-tienda">
//             <h3>{producto.nombre}</h3>
//             <img src={producto.imagen} alt={producto.nombre} />
//             <p>Precio: ${producto.precio}</p>
//             <button className="btn-comprar">Ver detalles</button>
//           </div>
//         ))
//       ) : (
//         <p>No hay productos para mostrar</p>
//       )}
//     </div>
//   );
// };

// export default ItemListTienda;
