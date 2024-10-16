import { useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Select,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
  Thead,
  IconButton,
  Text,
} from "@chakra-ui/react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { competencias } from "../../services/competencias";
import { formatDate } from "../../utils/formatDate";

const Competencias = () => {
  const [selectedSport, setSelectedSport] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortField, setSortField] = useState<"nombre" | "fechaInicio">(
    "nombre"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const deportes = Array.from(new Set(competencias.map((c) => c.categoria)));
  const filteredCompetencias =
    selectedSport === ""
      ? competencias
      : competencias.filter(
          (competencia) => competencia.categoria === selectedSport
        );

  const sortedCompetencias = filteredCompetencias.sort((a, b) => {
    const aValue = sortField === "nombre" ? a.nombre : a.fechaInicio.getTime();
    const bValue = sortField === "nombre" ? b.nombre : b.fechaInicio.getTime();

    return sortOrder === "asc"
      ? aValue > bValue
        ? 1
        : -1
      : aValue < bValue
      ? 1
      : -1;
  });

  const totalPages = Math.ceil(sortedCompetencias.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompetencias = sortedCompetencias.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const toggleSort = (field: "nombre" | "fechaInicio") => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <Box>
      <Flex my={8} px={4} alignItems="center" justifyContent="space-between">
        <Heading as="h2" size="md">
          Competencias
        </Heading>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/">Competencias</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Flex mb={4} px={4}>
        <Select
          placeholder="Filtrar por deporte"
          onChange={(e) => setSelectedSport(e.target.value)}
        >
          {deportes.map((deporte) => (
            <option key={deporte} value={deporte}>
              {deporte}
            </option>
          ))}
        </Select>
      </Flex>

      <Box overflowX="auto">
        <Table variant="simple" size="lg" width="full">
          <Thead>
            <Tr>
              <Th minWidth="200px">
                Nombre
                <IconButton
                  aria-label="Sort by name"
                  icon={
                    sortOrder === "asc" ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )
                  }
                  onClick={() => toggleSort("nombre")}
                  variant="link"
                  size="sm"
                  ml={2}
                />
              </Th>
              <Th minWidth="150px">Ubicación</Th>
              <Th minWidth="180px">
                Fecha
                <IconButton
                  aria-label="Sort by start date"
                  icon={
                    sortOrder === "asc" ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )
                  }
                  onClick={() => toggleSort("fechaInicio")}
                  variant="link"
                  size="sm"
                  ml={2}
                />
              </Th>
              <Th minWidth="150px">Categoría</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentCompetencias.map((competencia) => (
              <Tr key={competencia.id}>
                <Td>{competencia.nombre}</Td>
                <Td>{competencia.ubicacion}</Td>
                <Td>{`${formatDate(
                  competencia.fechaInicio,
                  "DD/MM/YYYY"
                )} - ${formatDate(competencia.fechaFin, "DD/MM/YYYY")}`}</Td>
                <Td>{competencia.categoria}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Paginación */}
      <Flex justifyContent="space-between" mt={4}>
        <IconButton
          aria-label="Previous page"
          icon={<ChevronLeftIcon />}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          isDisabled={currentPage === 1}
        />
        <Text>
          Página {currentPage} de {totalPages}
        </Text>
        <IconButton
          aria-label="Next page"
          icon={<ChevronRightIcon />}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          isDisabled={currentPage === totalPages}
        />
      </Flex>
    </Box>
  );
};

export default Competencias;
