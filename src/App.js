import logo from "./assets/logo.svg";
import { FaSearch } from "react-icons/fa";

import "./App.css";

import { MiContextoProvider } from "./context/MiContexto";

import Saludo from "./components/saludo/Saludo";
import BotonRojo from "./components/botonrojo/BotonRojo";
import Contador from "./components/contador/Contador";
import MiComponente from "./components/micomponente/MiComponente";

function ListaUsuarios() {
  const usuarios = [
    { nombre: "Juan", email: "juan@example.com" },
    { nombre: "María", email: "maria@example.com" },
    { nombre: "Pedro", email: "pedro@example.com" },
  ];

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.email} style={{ textAlign: "left" }}>
          <strong>{usuario.nombre + " "}</strong>
          <span>{usuario.email}</span>
        </li>
      ))}
    </ul>
  );
}

function SearchBar() {
  return (
    <div>
      <FaSearch />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Saludo nombre="Juan" />
        <BotonRojo />
        <SearchBar />
        <ListaUsuarios />
        <Contador />
        <MiContextoProvider>
          <div className="App">
            <MiComponente />
          </div>
        </MiContextoProvider>
      </header>
    </div>
  );
}

export default App;
