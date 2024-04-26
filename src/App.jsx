import { Route, Routes } from "react-router-dom";
import { Header } from "./componentes/tracker/Header";
import "./App.css";
import Nav from "./componentes/navbar/DrawerMobileNavigation";
import { HeaderCotizacion } from "./componentes/cotizador/HeaderCotizacion";
import { HeaderGifs } from "./componentes/buscadorGifs/HeaderGifs";
import { ValuesColors } from "./componentes/generarColors/ValuesColors";
import { Movies } from "./componentes/movieSearch/Movies";
import { MainPage } from "./componentes/movieSearch/MainPage";
import { AppChat } from "./componentes/chat-App/AppChat";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/headercotizacion" element={<HeaderCotizacion />} />
          <Route path="/headergifs" element={<HeaderGifs />} />
          <Route path="/valuescolors" element={<ValuesColors />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MainPage />} />
          <Route path="/appchat" element={<AppChat/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
