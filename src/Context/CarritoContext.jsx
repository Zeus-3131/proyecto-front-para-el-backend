import { useState, createContext } from "react";

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CarritoProvider = ({children}) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  console.log(carrito);
  console.log("Cantidad Items", cantidadTotal);
  console.log("Precio total de la compra: ", total );

  const agregarAlCarrrito = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) { 
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad); 
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
  };

  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id);
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
  
    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal((prev) => prev - productoEliminado.item.precio * productoEliminado.cantidad);
  
    // Ahora total ha sido actualizado, puedes acceder al valor actualizado aquí
    const nuevoTotal = prev - productoEliminado.item.precio * productoEliminado.cantidad;
  
    // También puedes actualizar alguna referencia directa al DOM aquí, si es necesario
    document.getElementById('total').innerText = nuevoTotal;
  };
  
  


  const vaciarCarrito =()=>{
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
  }

  return(
    <CarritoContext.Provider value={{carrito,total,cantidadTotal, agregarAlCarrrito,eliminarProducto,vaciarCarrito}}>
        {children}
    </CarritoContext.Provider>
  )

};


