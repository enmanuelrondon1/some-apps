import { useState } from "react";
import { calcularTotal } from "./helpers";

export const Formulario = ({ cantidad, setCantidad, plazo, setPlazo, setTotal, total }) => {
  const [error, setError] = useState(false);

  const calcularPrestamo = (e) => {
    e.preventDefault();
    if (cantidad === 0 || plazo === "") {
      setError(true);
      return
    }
    setError(false)
    const total = calcularTotal(cantidad, plazo);
    setTotal(total)
    
  };

  return (
    <>
      <form onSubmit={calcularPrestamo} className="action">
        <div className="column">
          <div>
            <label htmlFor="nombre">Cantida de prestamos</label>
            <input
              type="number"
              placeholder="Ej: 3000"
              onChange={(e) => setCantidad(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="">Plazo para pagar</label>
            <select name="" id="" onChange={(e) => setPlazo(e.target.value)}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
        </div>
        <div className="btnSubmit">
          <input type="submit" value="Calcular" />
        </div>
      </form>
      {error ? (
        <p className="error">Todos los campos son obliagatorios</p>
      ) : null}
    </>
  );
};
