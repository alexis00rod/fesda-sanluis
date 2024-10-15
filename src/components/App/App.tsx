import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "../index";
import {
  Admin,
  Competencias,
  Contacto,
  Federacion,
  Inicio,
  Noticias,
} from "../../pages";
import { Box, Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Flex direction="column" minHeight="100vh">
        <Navbar />
        <Box as="main" flex="1" width="100%" maxW="1200px" mx="auto" px={4}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/federacion" element={<Federacion />} />
            <Route path="/competencias" element={<Competencias />} />
            <Route path="/noticias" element={<Noticias />} />
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
