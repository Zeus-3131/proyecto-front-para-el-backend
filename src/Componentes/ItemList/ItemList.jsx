// import Item from "../Item/Item";
// import "./ItemList.css";
// import axios from "axios";
// import { useState, useEffect } from "react";


// const ItemList = ({ products }) => {
  
  // const [product, setProducts] = useState([]);
  // const [prev,setPrev]=useState(null);
  // const [next,setNext]=useState(null);
  // useEffect(() => {
  //   axios("http://localhost:8080/api/products")
  //     .then((res) => {
  //       setProducts(res.data.response.docs);
  //       setPrev(res.data.response.prevPage);
  //       setNext(res.data.response.nextPage);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

//   return (
//     <div className="ordenarProductos">
//       {products.map((product) => (
//         <Item key={product._id} {...product} />
//       ))}
//     </div>
//   );
// };

// export default ItemList;

// import React, { useState, useEffect } from "react";
// import Item from "../Item/Item";
// import "./ItemList.css";
// import axios from "axios";

// const ItemList = ({ initialProducts }) => { // Cambia el nombre de la prop para evitar conflicto
//   const [products, setProducts] = useState([]); // Estado local para almacenar productos

//   useEffect(() => {
//     // Llamada a la API para obtener los productos
//     axios.get("http://localhost:8080/api/products")
//       .then((res) => {
//         // Actualizar el estado con los productos obtenidos de la API
//         setProducts(res.data.response.docs);
//         console.log(res.data.response.docs);

//       })
//       .catch((err) => {
//         console.log("Error fetching products:", err);
//       });
//   }, []); // Ejecutar solo una vez al montar el componente

//   return (
//     <div className="ordenarProductos">
//       {products.map((product) => (
//         <Item key={product._id} {...product} />
//       ))}
//     </div>
//   );
// };

// export default ItemList;


const ItemList = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    // Llamada a la API para obtener los productos
    axios.get("http://localhost:8080/api/products")
      .then((res) => {
        // Actualizar el estado con los productos obtenidos de la API
        setProducts(res.data.response.docs);
        
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
      });
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div className="ordenarProductos">
      {products.map((product) => (
        <Item key={product._id} {...product} />
      ))}
    </div>
  );
};
export default ItemList;
