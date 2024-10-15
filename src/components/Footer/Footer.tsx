import {
  Box,
  Text,
  Link,
  IconButton,
  VStack,
  Stack,
  Image,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ScrollFadeIn } from "../";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="gray.100" color="gray.800" py={10}>
      <ScrollFadeIn>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // Tres columnas iguales en desktop
          gap={6}
          maxW="1200px"
          mx="auto"
          px={4}
          alignItems="start"
          justifyContent="center"
        >
          {/* Logo Section */}
          <GridItem
            display="flex"
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Image src={logoImg} alt="FeSDA" h="60px" />
          </GridItem>

          {/* Si estamos en mobile, mostrar un Accordion */}
          {isMobile ? (
            <>
              <Accordion allowToggle>
                {/* Accordion para los enlaces */}
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Enlaces Importantes
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Stack direction="column" spacing={4}>
                      <Link href="/" _hover={{ textDecoration: "underline" }}>
                        Inicio
                      </Link>
                      <Link
                        href="/federacion"
                        _hover={{ textDecoration: "underline" }}
                      >
                        Federación
                      </Link>
                      <Link
                        href="/competencias"
                        _hover={{ textDecoration: "underline" }}
                      >
                        Competencias
                      </Link>
                      <Link
                        href="/noticias"
                        _hover={{ textDecoration: "underline" }}
                      >
                        Noticias
                      </Link>
                      <Link
                        href="/contacto"
                        _hover={{ textDecoration: "underline" }}
                      >
                        Contacto
                      </Link>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                {/* Accordion para la información de contacto */}
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Contacto y Redes Sociales
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <VStack align="start">
                      <Text>Dirección: Calle Ejemplo 123, San Luis</Text>
                      <Link href="mailto:info@federacionnatacion.com">
                        info@federacionnatacion.com
                      </Link>
                      <Link href="tel:+54123456789">+54 123 456 789</Link>
                    </VStack>

                    {/* Redes Sociales */}
                    <Stack direction="row" spacing={4} mt={4}>
                      <IconButton
                        as="a"
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        icon={<FaFacebookF />}
                        bg="white"
                        color="gray.800"
                        _hover={{ bg: "#3b5998", color: "white" }}
                      />
                      <IconButton
                        as="a"
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        icon={<FaInstagram />}
                        bg="white"
                        color="gray.800"
                        _hover={{ bg: "#E1306C", color: "white" }}
                      />
                      <IconButton
                        as="a"
                        href="https://wa.me/54123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        icon={<FaWhatsapp />}
                        bg="white"
                        color="gray.800"
                        _hover={{ bg: "#25D366", color: "white" }}
                      />
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </>
          ) : (
            <>
              {/* Enlaces Importantes */}
              <GridItem>
                <Stack direction="column" spacing={2}>
                  <Link href="/" _hover={{ textDecoration: "underline" }}>
                    Inicio
                  </Link>
                  <Link
                    href="/federacion"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Federación
                  </Link>
                  <Link
                    href="/competencias"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Competencias
                  </Link>
                  <Link
                    href="/noticias"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Noticias
                  </Link>
                  <Link
                    href="/contacto"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Contacto
                  </Link>
                </Stack>
              </GridItem>

              {/* Contact Info and Social Media */}
              <GridItem>
                <VStack align="start">
                  <Text fontWeight="bold">Contacto</Text>
                  <Text>Dirección: Calle Ejemplo 123, San Luis</Text>
                  <Link href="mailto:info@federacionnatacion.com">
                    info@federacionnatacion.com
                  </Link>
                  <Link href="tel:+54123456789">+54 123 456 789</Link>

                  <Stack direction="row" spacing={4} mt={4}>
                    <IconButton
                      as="a"
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      icon={<FaFacebookF />}
                      bg="white"
                      color="gray.800"
                      _hover={{ bg: "#3b5998", color: "white" }}
                    />
                    <IconButton
                      as="a"
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      icon={<FaInstagram />}
                      bg="white"
                      color="gray.800"
                      _hover={{ bg: "#E1306C", color: "white" }}
                    />
                    <IconButton
                      as="a"
                      href="https://wa.me/54123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      icon={<FaWhatsapp />}
                      bg="white"
                      color="gray.800"
                      _hover={{ bg: "#25D366", color: "white" }}
                    />
                  </Stack>
                </VStack>
              </GridItem>
            </>
          )}
        </Grid>

        {/* Footer Bottom Text */}
        <Box textAlign="center" mt={6} px={4}>
          <Text>
            © {new Date().getFullYear()} Federación Sanluiseña de Deportes
            Acuáticos. Todos los derechos reservados.
          </Text>
        </Box>
      </ScrollFadeIn>
    </Box>
  );
};

export default Footer;
