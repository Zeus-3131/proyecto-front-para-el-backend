import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Aside from "../Aditamentos/Aside/Aside";
import Footer from "../Footer/Footer";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = ({ mostrarComponentes = true }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then((res) => {
        setProducts(res.data.response);
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
      });
  }, []);

  return (
    <>
      {mostrarComponentes && <Navbar />}
      {mostrarComponentes && (
        <div className="ContenedorNavegacionContainer">
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
        </div>
      )}

      <div className="contenedorDivDelListContainer">
        {mostrarComponentes && <Aside />}
        <div className="contenedorProductosItemListContainer">
          <h2 className="itemh2">Mis productos</h2>
          <ItemList products={products} /> {/* Pasar los productos como prop a ItemList */}
        </div>
      </div>
      {mostrarComponentes && <Footer />}
    </>
  );
};

export default ItemListContainer;
