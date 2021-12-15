import React from 'react';
import {Navigate, Outlet, RouteProps} from 'react-router-dom';

import {useAuth} from '../hooks/auth';

const PublicRoute: React.FC<RouteProps> = () => {
  const {user} = useAuth();

  return !user ? <Outlet /> : <Navigate to='/feed' />;
};

export default PublicRoute;
