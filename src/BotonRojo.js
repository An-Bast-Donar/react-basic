import React, { useState } from "react";

function BotonRojo() {
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
    transition: "box-shadow 0.3s ease-in-out",
    fontSize: "1.2rem",
  });

  const handleMouseEnter = () => {
    setButtonStyle({
      ...buttonStyle,
      backgroundColor: "red",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    });
  };

  const handleMouseLeave = () => {
    setButtonStyle({
      ...buttonStyle,
      backgroundColor: "#333",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
    });
  };

  const handleClick = () => {
    console.log("Hola mundo!");
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Presioname
    </button>
  );
}

export default BotonRojo;
