import React from 'react';
import {Navigate, Outlet, RouteProps} from 'react-router-dom';

import {useAuth} from '../hooks/auth.hook';

const ProtectRoute: React.FC<RouteProps> = () => {
  const {user} = useAuth();

  return !!user ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectRoute;
