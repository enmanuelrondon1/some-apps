import { useEffect, useState } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=1ae0eba`;

export const useFecth = (params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fecthMovie = (url) => {
    setIsLoading(true);
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((respuestaJson) => {
        if (respuestaJson.Response === "True") {
          setData(respuestaJson.Search || respuestaJson);
          setError(false);
        } else {
          setError(true);
        }
        setIsLoading(false);
        // console.log("data: ", respuestaJson);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fecthMovie(`${API_ENDPOINT}${params}`);
  }, [params]);

  return { isLoading, error, data };
};
