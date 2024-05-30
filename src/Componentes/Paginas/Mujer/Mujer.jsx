import Navbar from "../../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Mujer.css";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemListTienda from "../../ItemListTienda/ItemListTienda";

const Mujer = ({ mostrarComponentesTienda = true }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        // Realizar la solicitud a la API filtrando los productos por idcat=F
        const res = await axios.get("http://localhost:8080/api/products?idcat=F");
        // console.log("API Response Data:", JSON.stringify(res.data, null, 2)); // Log detallado de la respuesta completa

        // Verificar si la respuesta contiene un array de productos
        if (res.data.status === 200 && res.data.all && Array.isArray(res.data.all.docs)) {
          setProductos(res.data.all.docs);
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
    fetchProductos();
  }, []);

  return (
    <div>
      {mostrarComponentesTienda && <Navbar />}
      <div className="ContenedorNavegacionMujer">
        <nav className="navProductosMujer">
          <div className="col-12Mujer">
            <NavLink className="enlacePMujer" to="/">
              Inicio
            </NavLink>
            <span>
              <i className="faMujer fa-angle-right" />
            </span>
            <span>Mujer</span>
          </div>
        </nav>
      </div>

      <div className="contenedorDivDelListMujer">
        <div className="contenedorProductosItemListMujer">
          <h2 className="itemh2Mujer">Productos para Mujer</h2>
          {loading ? (
            <p>Cargando productos...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ItemListTienda productos={productos} />
          )}
        </div>
      </div>
      {mostrarComponentesTienda && <Footer />}
    </div>
  );
};

export default Mujer;
