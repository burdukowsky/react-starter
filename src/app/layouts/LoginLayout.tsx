import { Router } from '@reach/router';
import React from 'react';

import { Login } from 'features/login/Login';

export const LoginLayout: React.FC = () => {
  return (
    <Router>
      <Login default />
    </Router>
  );
};
