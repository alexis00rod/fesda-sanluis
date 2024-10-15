import { Route, Routes } from "react-router-dom";
import { Navbar } from "../index";
import {
  Admin,
  Competencias,
  Contacto,
  Federacion,
  Inicio,
  Noticias,
} from "../../pages";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Navbar />
      <Box maxW="1200px" mx="auto" px={4}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/federacion" element={<Federacion />} />
          <Route path="/competencias" element={<Competencias />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Box>
    </div>
  );
};

export default App;
