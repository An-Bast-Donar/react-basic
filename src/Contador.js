import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>El contador actual es: {contador}</p>
      <button onClick={incrementarContador}>Incrementar contador</button>
    </div>
  );
}

export default Contador;
