import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Aside from "../Aditamentos/Aside/Aside";
import Footer from "../Footer/Footer";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ mostrarComponentes = true }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/products");
        // console.log("API Response Data:", JSON.stringify(res.data, null, 2));  // Log detallado de la respuesta completa
        
        // Verifica si 'all' contiene directamente una lista de productos
        if (res.data.status === 200 && res.data.all && Array.isArray(res.data.all.docs)) {
          setProducts(res.data.all.docs);
        } else {
          console.error("Unexpected API response format:", res.data);
          setError("Formato de respuesta de API inesperado");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error al obtener los productos");
        setLoading(false);
      }
    };
    fetchProducts();
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
          {loading ? (
            <p>Cargando productos...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ItemList products={products} />
          )}
        </div>
      </div>
      {mostrarComponentes && <Footer />}
    </>
  );
};

export default ItemListContainer;
