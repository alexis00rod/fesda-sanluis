import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import {
  Admin,
  Competencias,
  Contacto,
  Federacion,
  Inicio,
  NoticiaDetalles,
  Noticias,
} from "../../pages";
import { Navbar, Footer } from "../";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Flex direction="column" minHeight="100vh">
        <Navbar />
        <Box
          as="main"
          flex="1"
          width="100%"
          maxW="1200px"
          mx="auto"
          px={4}
          display="flex"
          flexDirection="column"
        >
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/federacion" element={<Federacion />} />
            <Route path="/competencias" element={<Competencias />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:idNoticia" element={<NoticiaDetalles />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default App;
