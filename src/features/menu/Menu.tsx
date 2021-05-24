import React from 'react';

import { NavLink } from './nav-link/NavLink';
import useAuth from 'app/hooks/useAuth';

export const Menu: React.FC = () => {
  const auth = useAuth();

  function signOut(): void {
    // eslint-disable-next-line no-restricted-globals,no-alert
    if (confirm('Выйти?')) {
      auth.signOut()
        // eslint-disable-next-line no-alert
        .catch(() => alert('Ошибка запроса'));
    }
  }

  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='demo'>Dashboard</NavLink>
      <button type='button' onClick={signOut}>Выйти</button>
    </nav>
  );

};
