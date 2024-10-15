import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

const ScrollFadeIn: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Cambia 100 a un valor que se adapte a tu diseño
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al cargar para mostrar el estado inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      ref={ref}
      opacity={visible ? 1 : 0}
      transform={visible ? "translateY(0)" : "translateY(20px)"}
      transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out"
    >
      {children}
    </Box>
  );
};

export default ScrollFadeIn;
