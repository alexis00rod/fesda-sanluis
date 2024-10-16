import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoticiaType } from "../../models/NoticiaType";
import { noticias } from "../../services/noticias";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spinner,
  Text,
  Heading,
} from "@chakra-ui/react";
import { ButtonBack } from "../../components";
import { formatDate } from "../../utils/formatDate";

const NoticiaDetalles: React.FC = () => {
  const { idNoticia } = useParams<{ idNoticia: string }>();
  const [noticia, setNoticia] = useState<NoticiaType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (idNoticia) {
      try {
        const noticiaDoc = noticias.find((e) => e.id === parseInt(idNoticia));

        if (!noticiaDoc) {
          setError("No se encontró la noticia.");
          setIsLoading(false);
          return;
        }

        setNoticia(noticiaDoc);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError("Hubo un error al cargar la noticia.");
        setIsLoading(false);
      }
    }
  }, [idNoticia]);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Text color="red.500">{error}</Text>
      </Flex>
    );
  }

  if (!noticia) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Text>No hay detalles disponibles para esta noticia.</Text>
      </Flex>
    );
  }

  return (
    <Box w="100%" maxW="800px" mx="auto" p={4}>
      <Flex my={8} alignItems="center" justifyContent="space-between">
        <ButtonBack />
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/">Noticias</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex direction="column" maxW="800px" mx="auto" align="center">
        <Box w="100%">
          <Text>{formatDate(noticia.date, "LL")}</Text>
        </Box>
        <Heading as="h1" size="lg" mb={4}>
          {noticia.title}
        </Heading>

        {/* Renderizar el contenido de la noticia */}
        <Box
          dangerouslySetInnerHTML={{ __html: noticia.content }}
          w="100%"
          mt={4}
        />
      </Flex>
    </Box>
  );
};

export default NoticiaDetalles;
