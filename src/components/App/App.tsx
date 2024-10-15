import { Route, Routes } from "react-router-dom";
import { Navbar } from "../index";
import {
  Competencias,
  Contacto,
  Federacion,
  Inicio,
  Noticias,
} from "../../pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/federacion" element={<Federacion />} />
        <Route path="/competencias" element={<Competencias />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};

export default App;
