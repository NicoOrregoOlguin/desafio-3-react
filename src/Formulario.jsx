// Formulario.jsx
import React, { useState } from 'react';

const Formulario = ({ onAgregarColaborador }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });
  const [mensajeError, setMensajeError] = useState('');

  const handleInputChange = (event) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificar si todos los campos están completos
    if (Object.values(nuevoColaborador).some(valor => valor.trim() === '')) {
      setMensajeError('Completa todos los campos!');
      return;
    }
    
    // Si todos los campos están completos, ejecutar la función para agregar colaborador
    onAgregarColaborador(nuevoColaborador);
    // Resetear el formulario y el mensaje de error
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
    setMensajeError('');
  };

  return (
    <div className="card p-3">
      <h2 className="card-title text-center">Agregar colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del colaborador</label>
          <input
            type="text"
            className="form-control mb-2"
            id="nombre"
            name="nombre"
            value={nuevoColaborador.nombre}
            onChange={handleInputChange}
          />
          <label htmlFor="correo">Email del colaborador</label>
          <input
            type="email"
            className="form-control mb-2"
            id="correo"
            name="correo"
            value={nuevoColaborador.correo}
            onChange={handleInputChange}
          />
          <label htmlFor="edad">Edad del colaborador</label>
          <input
            type="number"
            className="form-control mb-2"
            id="edad"
            name="edad"
            value={nuevoColaborador.edad}
            onChange={handleInputChange}
          />
          <label htmlFor="cargo">Cargo del colaborador</label>
          <input
            type="text"
            className="form-control mb-2"
            id="cargo"
            name="cargo"
            value={nuevoColaborador.cargo}
            onChange={handleInputChange}
          />
          <label htmlFor="telefono">Teléfono del colaborador</label>
          <input
            type="tel"
            className="form-control mb-2"
            id="telefono"
            name="telefono"
            value={nuevoColaborador.telefono}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Agregar colaborador</button>
        {mensajeError && <div className="alert alert-danger mt-2">{mensajeError}</div>}
      </form>
    </div>
  );
};

export default Formulario;
