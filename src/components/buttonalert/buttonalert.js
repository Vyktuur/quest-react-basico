import React from 'react';
import '../buttonalert/buttonalert.css';

const AlertButton = ({ label }) => {
  const Click = () => {
    alert(`A label desse botão é ${label}`);
  };

  return (
    <button className='alert' onClick={Click}>{label}</button>
  );
};

export default AlertButton;

