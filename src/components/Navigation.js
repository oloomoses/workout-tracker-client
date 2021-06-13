import React from 'react';
import { useSelector } from 'react-redux';
import LoginNav from './navigation/LoginNav';
import LogoutNav from './navigation/LogoutNav';

const Navigation = () => {
  const token = useSelector((state) => state.signup.token);
  return (
    <div className="bg-custom">
      { token ? <LogoutNav /> : <LoginNav /> }
    </div>
  );
};

export default Navigation;
