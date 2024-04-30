import "./ItemListContainer.css";
import { useState, useEffect } from "react";
// import { db } from "../../services/config";
// import {collection, getDocs, where, query} from "firebase/firestore"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Aside from "../Aditamentos/Aside/Aside";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const ItemListContainer = ({ mostrarComponentes = true }) => {
  // const [productos, setProductos] = useState([]);
  // const { idCategoria } = useParams();

  // useEffect(()=>{
  //   const misProductos = idCategoria ? query(collection(db, "Inventario"), where("idcat", "==", idCategoria)): collection(db, "Inventario");

  //   getDocs(misProductos)
  //    .then(res=>{
  //     const nuevosProductos = res.docs.map(doc=>{
  //       const data = doc.data();
  //       return {id:doc.id, ...data}
  //     })
  //     setProductos(nuevosProductos);
  //    })
  //    .catch(error=> console.log("Error",error))
  // },[idCategoria])

  // const [products, setProducts] = useState(initialProducts);

  // useEffect(() => {
  //   // Llamada a la API para obtener los productos
  //   axios.get("http://localhost:8080/api/products")
  //     .then((res) => {
  //       // Actualizar el estado con los productos obtenidos de la API
  //       setProducts(res.data.response.docs);
  //       console.log(res.data.response.docs);
  //     })
  //     .catch((err) => {
  //       console.log("Error fetching products:", err);
  //     });
  // }, []); // Ejecutar solo una vez al montar el componente

  return (
    <>
      {mostrarComponentes && <Navbar />}
      {mostrarComponentes && <div className="ContenedorNavegacionContainer">
        <nav className="navProductosContainer">
          <div className="col-12Container">
            <NavLink className="enlacePContainer" to="/">
              Inicio
            </NavLink>
            <span>
              <i className="faContainer fa-angle-right" />
            </span>
            <span>Calzado especial</span>
          </div>
        </nav>
      </div>}

      <div className="contenedorDivDelListContainer">
        {mostrarComponentes && <Aside />}
        <div className="contenedorProductosItemListContainer"> 
          <h2 className="itemh2">mis productos</h2>
          {/* <ItemList productos={productos} /> */}
          {/* <ItemList initialProducts={products} /> */}
        </div>
      </div>
      {mostrarComponentes && <Footer />}
    </>
  );
};

export default ItemListContainer;
