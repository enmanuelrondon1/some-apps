import { useState } from "react";

export const FormAddMoney = ({ setCount, setIsValid }) => {
  const [input, setImput] = useState("");
  const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (input === 0 || Number(input) < 0) {
      setError(true);
      return;
    }
    setError(false);
    setCount(Number(input));
    setIsValid(true)
    // console.log(input);
  };
  return (
    <>
      <div className="form-add-money">
        {input}
        <form onSubmit={handleForm} action="" className="action">
          <p>Agregar Presupuesto</p>

          <input
            type="number"
            placeholder="300$"
            onChange={(e) => setImput(e.target.value)}
          />
          <input type="submit" value="Agregar" />
        </form>
        {error ? <p className="error">Presupuesto invalido</p> : null}
      </div>
    </>
  );
};
