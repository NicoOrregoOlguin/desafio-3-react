
import React from 'react';

const Buscador = ({ onBuscar }) => {
  return (
    <input
      className="form-control"
      placeholder="Buscar colaborador..."
      onChange={(e) => onBuscar(e.target.value)}
    />
  );
};

export default Buscador;
