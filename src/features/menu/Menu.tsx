import React from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink } from './nav-link/NavLink';
import useAuth from 'app/hooks/useAuth';
import { LangSelector } from '../../app/components/lang-selector/LangSelector';

export const Menu: React.FC = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  function signOut(): void {
    // eslint-disable-next-line no-restricted-globals,no-alert
    if (confirm(t('signOutConfirm'))) {
      auth.signOut()
        // eslint-disable-next-line no-alert
        .catch(() => alert(t('requestFailed')));
    }
  }

  return (
    <nav>
      <NavLink to='/'>{t('home')}</NavLink>
      <NavLink to='demo'>{t('dashboard')}</NavLink>
      <NavLink to='users'>{t('users')}</NavLink>
      <LangSelector />
      <button type='button' onClick={signOut}>{t('signOut')}</button>
    </nav>
  );

};
