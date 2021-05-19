import React from 'react';

import './App.css';
import useAuth from './app/hooks/useAuth';
import { MainLayout } from './app/layouts/MainLayout';
import { LoginLayout } from './app/layouts/LoginLayout';

const App: React.FC = () => {
  const auth = useAuth();

  return auth.user
    ? <MainLayout />
    : <LoginLayout />;
};

export default App;
