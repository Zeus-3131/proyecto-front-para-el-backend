import Navbar from "../../Navbar/Navbar";
import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import { NavLink } from "react-router-dom";
import "./Productos.css";
import Aside from "../../Aditamentos/Aside/Aside";
import Footer from "../../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

// segunda entrega
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "../../ItemDetailContainer/ItemDetailContainer";

const Productos = () => {
  const componentesDelItemListContainer = false;

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios("http://localhost:8080/api/products")
  //     .then((res) =>setProducts(res.data.response.docs))
  //     .catch((err) => console.log(err));
  // }, []);
  
  return (
    <>
      <Navbar />
      <div className="ContenedorNavegacionProductos">
        <nav className="navProductos">
          <div className="col-12">
            <NavLink className="enlaceP" to="/">
              Inicio
            </NavLink>
            <span>
              <i className="fa fa-angle-right" />
            </span>
            <span>Calzado especial</span>
          </div>
        </nav>
      </div>

      <main>
        <h1 className="h1Productos">Calzado especial</h1>
        <div className="contenedormainProductos">
          <Aside />
          <div className="contenedorDeProductos">
            <ItemListContainer
              mostrarComponentes={componentesDelItemListContainer}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Productos;
