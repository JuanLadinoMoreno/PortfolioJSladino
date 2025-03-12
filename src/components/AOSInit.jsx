import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      once: true, // Animar solo una vez
    });
  }, []);

  return null; // No renderiza nada en pantalla
};

export default AOSInit;
