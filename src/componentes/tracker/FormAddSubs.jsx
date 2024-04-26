import { useState } from "react";

export const FormAddSubs = ({
  setType,
  setPrice,
  price,
  type,
  setSubs,
  subs,
  editId,
  setEditId,
  spent,
  count,
}) => {
  const [error, setError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);

  const handleSubs = (e) => {
    e.preventDefault();
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    if (count - spent < Number(price)) {
      setErrorMoney(true);
      return;
    }
    setError(false);
    setErrorMoney(false);
    if (editId !== "") {
      setEditId("");
      const newSubs = subs.map((item) => {
        if (item.id === editId) {
          item.type = type;
          item.price = price;
        }
        return item;
      });
      setSubs([...newSubs]);
    } else {
      const data = {
        type,
        price,
        id: Date.now(),
      };
      setSubs([...subs, data]);
    }

    setType("");
    setPrice("");
    // console.log(subs);
    // console.log(price);
    // console.log(type);
  };
  return (
    <>
      <div className="add-subscription">
        <h3>Agregar Suscripciones</h3>
        <form onSubmit={handleSubs}>
          <p>Servicios</p>

          <select onChange={(e) => setType(e.target.value)} value={type}>
            <option value="" className="value">
              Elegir
            </option>
            <option value="netflix" className="value">
              Netflix
            </option>
            <option value="disneyPlus" className="value">
              DisneyPlus
            </option>
            <option value="hboMax" className="value">
              HBO MAX
            </option>
            <option value="starPlus" className="value">
              Star Plus
            </option>
            <option value="primeVideo" className="value">
              Prime Videos
            </option>
            <option value="appletv" className="value">
              Aple TV
            </option>
          </select>

          <p>Cantidad</p>

          <input
            type="number"
            className="type"
            placeholder="20$"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          {editId !== "" ? (
            <input type="submit" className="subtmit" value="Guardar" />
          ) : (
            <input type="submit" className="subtmit" value="Agregar" />
          )}
        </form>
        {error ? <p className="error">Campos invalidos</p> : null}
        {errorMoney ? <p className="error">No tienes Presupuesto</p> : null}
      </div>
    </>
  );
};
