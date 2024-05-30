import Navbar from "../../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Tienda.css";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemListTienda from "../../ItemListTienda/ItemListTienda";

const Tienda = ({ mostrarComponentesTienda = true }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        // Realizar la solicitud a la API sin ningún filtro
        const res = await axios.get("http://localhost:8080/api/products");
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
    <>
      {mostrarComponentesTienda && <Navbar />}
      <div className="ContenedorNavegacionTienda">
        <nav className="navProductosTienda">
          <div className="col-12Tienda">
            <NavLink className="enlacePTienda" to="/">
              Inicio
            </NavLink>
            <span>
              <i className="faTienda fa-angle-right" />
            </span>
            <span>Tienda</span>
          </div>
        </nav>
      </div>

      <div className="contenedorDivDelListTienda">
        <div className="contenedorProductosItemListTienda">
          <h2 className="itemh2Tienda">Nuestros Productos</h2>
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
    </>
  );
};

export default Tienda;
