import { ImageItem } from "./ImageItem";
import { useApi } from "./hooks/useApi";

export const DisplayGifs = ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=O11vZmYOCEJ2yqNzy24QBS2pSYx6QPy7&q=${category}&limit=10`;

  const { loading, data } = useApi(url);

  return (
    <>
      <div className="container-gifs">
        {loading
          ? data.map((img) => (
              <ImageItem
                key={img.id}
                title={img.title}
                url={img.images.downsized_medium.url}
              />
            ))
          : ""}
      </div>
    </>
  );
};
