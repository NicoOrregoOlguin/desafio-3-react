// Alert.jsx
import React from 'react';

const Alert = ({ mensaje, tipo }) => {

  return (
    <div className={`alert alert-${tipo} mt-2`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;
