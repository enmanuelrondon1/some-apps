import { moneyFormat } from "./helpers";
import { imagenes, img } from "./imagenes";

export const SimgleItems = ({ price, id, type, eliminarItem, editItem }) => {
  const HandleDelete = (e) => {
    e.preventDefault();
    const answer = window.confirm(`Borrar suscripcion a ${type}`);
    if (answer) {
      eliminarItem(id);
    }
  };

  const HandleEdit = (e) => {
    e.preventDefault();
    editItem(id);
  };

  const urlImage = `/${type}.png`;

  return (
    <>
      <div className="single-item">
        <img src={urlImage} alt="" />

        {/* <img
          src={`${img}/${imagenes[type]}`}
          alt=""
        /> */}

        <h3>Precio: {moneyFormat(Number(price))}</h3>
        <a href="" className="delete" onClick={HandleDelete}>
          Borrar
        </a>
        <a href="" className="edit" onClick={HandleEdit}>
          {" "}
          Editar
        </a>
      </div>
    </>
  );
};
