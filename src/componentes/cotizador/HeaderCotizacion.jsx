import { useState } from "react";
import { Formulario } from "./Formulario";
import { Header } from "./Header";
import { Resultado } from "./Resultado";
import { Mensaje } from "./Mensaje";
import "./cotizacion.css";

export const HeaderCotizacion = () => {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

  let componente;
  if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} cantidad={cantidad} plazo={plazo} />;
  }

  return (
    <>
      <Header titulo="Cotizador de Prestamos" />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          total={total}
          setTotal={setTotal}
        />
      </div>
      <div className="mensaje">
        {componente}
      </div>
    </>
  );
};
