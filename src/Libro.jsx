import React from 'react';

const Libro = () => {
  // Oggetto che rappresenta un libro
  const libro = {
    titolo: 'Il nome della rosa',
    autore: {
      nome: 'Umberto',
      cognome: 'Eco'
    },
    numeroDiPagine: 500
  };

  // Destructuring annidato per estrarre il titolo e il cognome dell'autore
  const { titolo, autore: { cognome } } = libro;

  return (
    <div>
      <p>Libro: {titolo}</p>
      <p>Autore: {cognome}</p>
    </div>
  );
};

export default Libro;
