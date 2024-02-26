// Listado.jsx
import React from 'react';

const Listado = ({ colaboradores }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map(colaborador => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
