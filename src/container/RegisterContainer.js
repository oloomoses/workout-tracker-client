import React from 'react';
import { useDispatch } from 'react-redux';
import Register from '../components/Register';
import { userRegister } from '../redux/user/userRegisterAction';

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const handleRegistration = (data) => {
    // console.log(data);
    dispatch(userRegister(data));
  };

  return (
    <div>
      <Register submission={handleRegistration} />
    </div>
  );
};

export default RegisterContainer;
