import { Link } from "react-router-dom";

export const ItemMovie = ({ id, title, year, type, poster }) => {

  let image = 'https://i.ibb.co/wR3L3m7/NoImage.png';

  let imagen = poster === "N/A" ? image : poster
  return (
    <>
    <Link to={`/movies/${id}`}>
      <article>
        <div
          className="item-movie"
          style={{ backgroundImage: `url(${imagen})` }}
        >
          <div className="info">
            <h4>{title}</h4>
            <p className="row-info">
              <span>{type}</span>
              <span>{year}</span>{" "}
            </p>
          </div>
        </div>
      </article>
    </Link>

    </>
  );
};
