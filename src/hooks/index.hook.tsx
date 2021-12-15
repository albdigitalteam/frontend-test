import React from 'react';

import {AuthProvider} from './auth.hook';
import {ToastProvider} from './toast.hook';

const AppProvider: React.FC = ({children}) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
