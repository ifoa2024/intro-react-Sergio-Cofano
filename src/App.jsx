import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Persona from './Persona';


const App = () => {
  return (
    <div className="App">
      <h1>Informazioni sulla persona</h1>
      <Persona />  {/* Usa il componente Persona */}
    </div>
  );
};

export default App;