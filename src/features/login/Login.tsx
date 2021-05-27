import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';

import useAuth from 'app/hooks/useAuth';

export const Login: React.FC<RouteComponentProps> = () => {

  const auth = useAuth();
  const { t } = useTranslation();

  function authorize(event: React.SyntheticEvent): void {
    event.preventDefault();

    auth.signIn('stub', 'stub')
      .catch((e) => {
        // eslint-disable-next-line no-alert
        alert(t('requestFailed'));
        console.error(e);
      });
  }

  return (
    <form onSubmit={authorize}>
      <input type='text' />
      <input type='password' />
      <button type='submit'>{t('signIn')}</button>
    </form>
  );

};
