import { IconButton, Tooltip } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const ButtonBack: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Va un paso atrás en el historial
  };
  return (
    <Tooltip label="Volver" hasArrow>
      <IconButton
        aria-label="Volver atras"
        onClick={handleBack}
        icon={<ArrowBackIcon />}
      />
    </Tooltip>
  );
};

export default ButtonBack;
