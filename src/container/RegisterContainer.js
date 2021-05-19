import React from 'react';
import Register from '../components/Register';

const RegisterContainer = () => {
  const handleRegistration = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Register submission={handleRegistration} />
    </div>
  );
};

export default RegisterContainer;
