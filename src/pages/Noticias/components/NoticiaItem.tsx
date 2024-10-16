import { Link } from "react-router-dom";
import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";
import { NoticiaType } from "../../../models/NoticiaType";
import { ScrollFadeIn } from "../../../components";
import { formatDate } from "../../../utils/formatDate";

interface NoticiaItemProps {
  noticia: NoticiaType;
}

const NoticiaItem: React.FC<NoticiaItemProps> = ({ noticia }) => {
  // Función para obtener un resumen de 3 líneas (limitado a 100 caracteres en este caso)
  const getBriefContent = (content: string) => {
    const strippedContent = content.replace(/<[^>]+>/g, ""); // Elimina etiquetas HTML
    return strippedContent.length > 100
      ? strippedContent.substring(0, 100) + "..."
      : strippedContent;
  };

  // Función para extraer la primera imagen
  const getPrimerImagen = (content: string): string | null => {
    const imageRegex = /<img[^>]*src=["']?([^"'>]+)["']?[^>]*>/i;
    const match = content.match(imageRegex);
    return match ? match[1] : null;
  };

  const primeraImagen = getPrimerImagen(noticia.content);

  return (
    <ScrollFadeIn>
      <Link to={`/noticias/${noticia.id}`}>
        <Flex
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          transition="all 0.3s ease"
          flexDirection={{ base: "column", sm: "row", md: "column" }}
          _hover={{
            boxShadow: "md",
            borderRadius: "md",
          }}
        >
          {primeraImagen && (
            <Box w="100%" h="250px" overflow="hidden">
              <Image
                src={primeraImagen}
                alt={noticia.title}
                w="100%"
                h="100%"
                objectFit="contain"
                transition="transform 0.3s ease"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Box>
          )}

          <Box p={6}>
            <Heading
              size="md"
              mb={2}
              _hover={{
                color: "blue.600",
                textDecoration: "underline",
              }}
            >
              {noticia.title}
            </Heading>

            {/* Fecha de publicación */}
            <Text fontSize="sm" color="gray.500" mb={4}>
              {formatDate(noticia.date, "LL")}
            </Text>

            {/* Resumen con un máximo de 3 líneas */}
            <Text noOfLines={3}>{getBriefContent(noticia.content)}</Text>
          </Box>
        </Flex>
      </Link>
    </ScrollFadeIn>
  );
};

export default NoticiaItem;
