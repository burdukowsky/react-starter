import React, { Suspense } from 'react';

import './App.less';
import useAuth from './app/hooks/useAuth';
import { Loader } from './app/components/loader/Loader';

const MainLayout = React.lazy(() => import('./app/layouts/MainLayout'));
const LoginLayout = React.lazy(() => import('./app/layouts/LoginLayout'));

const App: React.FC = () => {
  const auth = useAuth();

  return (
    <Suspense fallback={<Loader />}>
      {
        auth.user
          ? <MainLayout />
          : <LoginLayout />
      }
    </Suspense>
  );
};

export default App;
