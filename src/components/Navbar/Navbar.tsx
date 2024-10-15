import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Link,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoImg from "../../assets/logo.png";

type NavLinkType = {
  name: string;
  href: string;
};

const links: NavLinkType[] = [
  { name: "Inicio", href: "/" },
  { name: "Federación", href: "/federacion" },
  { name: "Competencias", href: "/competencias" },
  { name: "Noticias", href: "/noticias" },
  { name: "Contacto", href: "/contacto" },
];

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Cierra el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <Box bg="white" px={4} shadow="md">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* Logo Section */}
        <Box flex="none">
          <Image src={logoImg} alt="FeSDA" h="60px" objectFit="contain" />
        </Box>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Abrir menú"
          display={{ base: "flex", lg: "none" }} // Se muestra en pantallas de 834px o menos
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Links and Social Media for Desktop */}
        <Flex
          alignItems="center"
          as="nav"
          display={{ base: "none", lg: "flex" }} // Se oculta en pantallas de 834px o menos
          gap={4}
        >
          <HStack spacing={4}>
            {links.map((link) => (
              <Link
                as={NavLink}
                key={link.name}
                to={link.href}
                px={2}
                py={1}
                rounded="md"
                _hover={{ bg: "gray.100" }}
                _activeLink={{
                  bg: "blue.600",
                  color: "white",
                }}
                color="gray.700"
                _focus={{ boxShadow: "outline" }}
                _active={{ bg: "blue.600", color: "white" }}
                onClick={handleLinkClick} // Cierra el menú al hacer clic
              >
                {link.name}
              </Link>
            ))}
          </HStack>

          {/* Social Media Icons */}
          <HStack spacing={4} ml={4}>
            <IconButton
              as="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              icon={<FaFacebookF />}
              colorScheme="gray"
              variant="ghost"
              _hover={{ bg: "#3b5998", color: "white" }}
            />
            <IconButton
              as="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              icon={<FaInstagram />}
              colorScheme="gray"
              variant="ghost"
              _hover={{ bg: "#E1306C", color: "white" }}
            />
            <IconButton
              as="a"
              href="https://wa.me/54123456789"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              icon={<FaWhatsapp />}
              colorScheme="gray"
              variant="ghost"
              _hover={{ bg: "#25D366", color: "white" }}
            />
          </HStack>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ lg: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <Link
                as={NavLink}
                key={link.name}
                to={link.href}
                px={2}
                py={1}
                rounded="md"
                _hover={{ bg: "gray.100" }}
                _activeLink={{
                  bg: "blue.600",
                  color: "white",
                }}
                color="gray.700"
                _focus={{ boxShadow: "outline" }}
                _active={{ bg: "blue.600", color: "white" }}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </Stack>

          {/* Social Media Icons for Mobile */}
          <Stack direction="row" spacing={4} mt={4}>
            <IconButton
              as="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              icon={<FaFacebookF />}
              colorScheme="gray"
              variant="ghost"
              _hover={{ bg: "#3b5998", color: "white" }}
            />
            <IconButton
              as="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              icon={<FaInstagram />}
              colorScheme="gray"
              variant="ghost"
              _hover={{ bg: "#E1306C", color: "white" }}
            />
            <IconButton
              as="a"
              href="https://wa.me/54123456789"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              icon={<FaWhatsapp />}
              colorScheme="gray"
              variant="ghost"
              _hover={{ bg: "#25D366", color: "white" }}
            />
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
