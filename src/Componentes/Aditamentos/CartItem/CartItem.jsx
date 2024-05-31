// import { useContext } from "react"
// import { CarritoContext } from "../../../Context/CarritoContext"
// import "./CartItem.css";

// const CartItem = ({item,cantidad}) => {
//     const{eliminarProducto}=useContext(CarritoContext);

//   return (
//     <div className="contenedorCartItem">
//         <h3>{item.nombre}</h3>
//         <p className="CartItemP">cantidad:{cantidad}</p>
//         <p className="CartItemP">precio: {item.precio}</p>
//         {/* <button className="CartItemButton" onClick={()=>eliminarProducto(item.id)}>Eliminar</button> */}
//     </div>
//   )
  
// } 

// export default CartItem

import { useContext } from "react";
import { CarritoContext } from "../../../Context/CarritoContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="contenedorCartItem">
      <h3>{item.nombre}</h3>
      <img src={item.imagen} alt={item.nombre} />
      <p className="CartItemP">Cantidad: {cantidad}</p>
      <p className="CartItemP">Precio: ${item.precio}</p>
      <button className="CartItemButton" onClick={() => eliminarProducto(item.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
