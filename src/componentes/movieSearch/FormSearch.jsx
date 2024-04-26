import { useContext, useState } from "react";
import { useFecth } from "./hooks/useFectch";
import { DataContext } from "./context/DataContext";

export const FormSearch = () => {

  const {setQuery, error} = useContext(DataContext); //acceder a los val

  const [title, setTitle] = useState("");

  const {data} = useFecth("&s=superman")

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(title)
    // console.log(title);
  };
  return (
    <>
      <div className="form-search">
        <h2>Old Movies Finder</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Title movie" onChange={(e) => setTitle(e.target.value)} />
          <input type="submit" value="Search" />
        </form>
        {error && <p className="error">The movie doesn't exist</p>}
      </div>
    </>
  );
};
