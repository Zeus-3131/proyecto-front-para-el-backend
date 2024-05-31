import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { CarritoContext } from "../../../Context/CarritoContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { agregarAlCarrrito } = useContext(CarritoContext);
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/products/${id}`);
        if (res.data.status === 200) {
          setProducto(res.data.product);
        } else {
          setError("Producto no encontrado");
        }
        setLoading(false);
      } catch (err) {
        setError("Error al obtener el producto");
        setLoading(false);
      }
    };
    fetchProducto();
  }, [id]);

  const handleAgregarAlCarrito = () => {
    agregarAlCarrrito(producto, 1);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      <div>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt={producto.nombre} />
        <p>Precio: ${producto.precio}</p>
        <p>Descripción: {producto.descripcion}</p>
        <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
