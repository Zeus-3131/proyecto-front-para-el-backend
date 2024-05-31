import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ _id, nombre, precio, imagen, idcat, stock }) => {
  let brandClass = '';

  switch (idcat) { 
    case '1':
      brandClass = 'nikeStyle';
      break;
    case '2':
      brandClass = 'pumaStyle';
      break;
    case '3':
      brandClass = 'converStyle';
      break;
    case '4':
      brandClass = 'lacoseStyle';
      break;
    case '5':
      brandClass = 'adidasStyle';
      break;
    case '6':
      brandClass = 'rebookStyle';
      break;
    default:
      break;
  }

  return (
    <div className="contenedorTarjeta">
      <div>
        <ul className="ulTarjeta">
          <li className="alineacionTarjeta">
            <div className="contenedorinter">
              <div className="margenesconten">
                <div className="container14">
                  <div className={`card14 ${brandClass}`}>
                    <div className="imgBx">
                      <img src={imagen} alt={nombre} />
                    </div>
                    <div className="contentBx">
                      <h2>{nombre}</h2>
                      <div className="size contenInfo info2">
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                      </div>
                      <div className="color contenInfo">
                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="size contenInfo">
                        <h3>Precio : {precio}</h3>
                        <h3>Id : {_id}</h3>
                        <h3>Stock: {stock}</h3>
                      </div>
                      <Link to={`/Item/${_id}`}>Comprar Ahora</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Item;


