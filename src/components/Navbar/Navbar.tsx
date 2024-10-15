import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logoImg from "../../assets/logo.png";

type NavLink = {
  name: string;
  href: string;
};

const links: NavLink[] = [
  { name: "Inicio", href: "/" },
  { name: "Federación", href: "/federacion" },
  { name: "Competencias", href: "/competencias" },
  { name: "Noticias", href: "/noticias" },
  { name: "Contacto", href: "/contacto" },
];

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Box>
          <Image
            src={logoImg}
            alt="Federación Sanluiseña de Deportes Acuáticos"
            h="60px"
          />
        </Box>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Abrir menú"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Links for Desktop */}
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link
              key={link.name}
              px={2}
              py={1}
              rounded="md"
              _hover={{ bg: "gray.100" }}
              href={link.href}
              color="gray.700"
            >
              {link.name}
            </Link>
          ))}
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <Link
                key={link.name}
                px={2}
                py={1}
                rounded="md"
                _hover={{ bg: "gray.100" }}
                href={link.href}
                color="gray.700"
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
