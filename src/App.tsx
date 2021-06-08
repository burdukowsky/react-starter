import React, { Suspense } from 'react';

import './App.less';
import useAuth from './app/hooks/useAuth';
import { Loader } from './app/components/loader/Loader';
import { AntdConfigProvider } from './app/providers/AntdConfigProvider';

const MainLayout = React.lazy(() => import('./app/layouts/MainLayout'));
const LoginLayout = React.lazy(() => import('./app/layouts/LoginLayout'));

const App: React.FC = () => {
  const auth = useAuth();

  return (
    <Suspense fallback={<Loader />}>
      <AntdConfigProvider>
        {
          auth.user
            ? <MainLayout />
            : <LoginLayout />
        }
      </AntdConfigProvider>
    </Suspense>
  );
};

export default App;
