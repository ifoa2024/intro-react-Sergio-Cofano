import React from 'react';  // Importa React (necessario per JSX)
import './App.css';  // Stili per il componente
import Persona from './Persona';  // Importa il componente Persona
import Bandiera from './Bandiera';  // Importa il componente Bandiera

const App = () => {
  return (
    <div className="App">
      <h1>Informazioni sulla persona</h1>
      <Persona />  {/* Usa il componente Persona */}

      <h2>Colori della Bandiera</h2>
      <Bandiera />  {/* Usa il componente Bandiera */}
    </div>
  );
};

export default App;
