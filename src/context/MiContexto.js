import React, { createContext, useState } from "react";

export const MiContexto = createContext();

export const MiContextoProvider = ({ children }) => {
  const [miDato, setMiDato] = useState("Hola desde el contexto");

  return (
    <MiContexto.Provider value={{ miDato, setMiDato }}>
      {children}
    </MiContexto.Provider>
  );
};
