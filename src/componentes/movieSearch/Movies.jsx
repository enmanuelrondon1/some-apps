import { Film } from "./Film";
import { FormSearch } from "./FormSearch";
import "./movies.css";

export const Movies = () => {
  // https://www.omdbapi.com/?apikey=1ae0eba&i=tt11796304

  return (
    <>
      <div className="App-Movie">
        <FormSearch />
        <Film />
      </div>
    </>
  );
};
