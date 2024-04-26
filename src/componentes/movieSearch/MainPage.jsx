import { useNavigate, useParams } from "react-router-dom";
import { useFecth } from "./hooks/useFectch";

export const MainPage = () => {
  const navegacion = useNavigate();
  const { id } = useParams();
  const { isLoading, error, data } = useFecth(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } =
    data;
  return (
    <>
      {!isLoading ? (
        <div className="single-movie">
          <img src={Poster} />
          <div className="single-info">
            <h2>{Title}</h2>
            <p>{Plot}</p>
            <p>
              <strong>Country:</strong> {Country}
            </p>
            <p>
              <strong>Director:</strong> {Director}
            </p>
            <p>
              <strong>Release:</strong> {Released}
            </p>
            <p>
              <strong>Runtime:</strong> {Runtime}
            </p>
            <p>
              <strong>Year:</strong> {Year}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      <button onClick={() => navegacion("/movies")} className="Button ">
        <span>Volver</span>
      </button>
    </>
  );
};
