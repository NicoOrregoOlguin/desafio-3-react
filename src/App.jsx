// App.jsx
import React, { useState, useEffect } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import Listado from './Listado';
import Formulario from './Formulario';
import Buscador from './Buscador';
import Alert from './Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(BaseColaboradores); 
  const [filtro, setFiltro] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  useEffect(() => {
    const resultadosFiltro = colaboradores.filter(colaborador =>
      Object.values(colaborador).some(valor =>
        valor.toString().toLowerCase().includes(filtro.toLowerCase())
      )
    );
    setColaboradoresFiltrados(resultadosFiltro);
  }, [filtro, colaboradores]);

  const agregarColaborador = nuevoColaborador => {
    if (Object.values(nuevoColaborador).some(valor => valor.trim() === '')) {
      setMensaje('Completa todos los campos!');
      setTipoMensaje('danger');
      return;
    }
    nuevoColaborador.id = (colaboradores.length + 1).toString();
    setColaboradores([...colaboradores, nuevoColaborador]);
    setMensaje('Colaborador agregado con éxito');
    setTipoMensaje('success');
    setTimeout(() => setMensaje(''), 3000); 
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>Lista de colaboradores</h1>
      </div>
      {mensaje && <Alert mensaje={mensaje} tipo={tipoMensaje} />}
      <div className="row">
        <div className="col-lg-8">
          <Buscador onBuscar={setFiltro} />
          <Listado colaboradores={colaboradoresFiltrados} />
        </div>
        <div className="col-lg-4">
          <Formulario onAgregarColaborador={agregarColaborador} />
        </div>
      </div>
    </div>
  );
};

export default App;
