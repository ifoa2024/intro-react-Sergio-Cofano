// Bandiera.jsx
import React from 'react';

const Bandiera = () => {
  // Array che rappresenta i colori della bandiera
  const colori = ['Rosso', 'Bianco',];  // Esempio con solo due colori

  // Destructuring con valore predefinito per il terzo colore
  const [colore1, colore2, colore3 = 'Verde'] = colori;

  return (
    <div>
      <p>Colore 1: {colore1}</p>
      <p>Colore 2: {colore2}</p>
      <p>Colore 3: {colore3}</p>
    </div>
  );
};

export default Bandiera;
