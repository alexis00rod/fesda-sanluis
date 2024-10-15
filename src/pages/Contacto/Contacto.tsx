import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Grid,
  GridItem,
  Heading,
  Text,
  Icon,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { ScrollFadeIn } from "../../components"; // Asegúrate de importar el componente

const Contacto: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica para enviar el formulario
    toast({
      title: "Mensaje enviado.",
      description: "Gracias por contactarnos, te responderemos pronto.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Limpiar campos después de enviar
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box maxW="1200px" mx="auto" mt={8} px={4}>
      <ScrollFadeIn>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
          {/* Información de contacto */}
          <GridItem>
            <Heading as="h2" size="lg" mb={4}>
              Información de Contacto
            </Heading>
            <VStack align="start" spacing={4}>
              <Flex alignItems="center">
                <Icon as={MdLocationOn} w={6} h={6} color="blue.500" />
                <Text fontSize="lg" ml={2}>
                  Calle Ejemplo 123, San Luis, Argentina
                </Text>
              </Flex>
              <Flex alignItems="center">
                <Icon as={MdPhone} w={6} h={6} color="green.500" />
                <Text fontSize="lg" ml={2}>
                  +54 2664 123456 (WhatsApp)
                </Text>
              </Flex>
              <Flex alignItems="center">
                <Icon as={MdEmail} w={6} h={6} color="red.500" />
                <Text fontSize="lg" ml={2}>
                  contacto@federacionnatacion.com
                </Text>
              </Flex>
            </VStack>
          </GridItem>

          {/* Formulario de Contacto */}
          <GridItem>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea
                    placeholder="Tu mensaje"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" width="full">
                  Enviar
                </Button>
              </VStack>
            </form>
          </GridItem>
        </Grid>
      </ScrollFadeIn>
    </Box>
  );
};

export default Contacto;
