import React from 'react';

const Persona = () => {
  // Crea un oggetto che rappresenta una persona
  const persona = {
    nome: 'Mario',
    cognome: 'Rossi',
    età: 30
  };

  // Destructuring per estrarre 'nome' ed 'età'
  const { nome, età } = persona;

  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Età: {età}</p>
    </div>
  );
};

export default Persona;
