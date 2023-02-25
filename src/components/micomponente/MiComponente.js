import { useContext } from "react";
import { MiContexto } from "../../context/MiContexto";
import React, { useState } from "react";

function MiComponente() {
  const { miDato, setMiDato } = useContext(MiContexto);
  // let isVisible = true;
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    // isVisible = !isVisible;
    setIsVisible(!isVisible);
    console.log(isVisible);
    setMiDato(
      isVisible ? "Nuevo dato desde el componente" : "Hola desde el contexto"
    );
  };

  return (
    <div>
      <h1>{miDato}</h1>
      <button onClick={handleClick}>Cambiar dato</button>
    </div>
  );
}

export default MiComponente;
