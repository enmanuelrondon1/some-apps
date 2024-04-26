import { useState } from "react";

export const AddCategory = ({ setCategory }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const searchGif = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      return;
    }
    setError(false)
    setCategory(value);
    setValue("")
  };

  return (
    <>

      <form onSubmit={searchGif} action="">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
      {error ? <p className="error">No has ingresado ninguna busqueda</p> : ""}
    </>
  );
};
