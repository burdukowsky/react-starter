import React from 'react';
import { RouteComponentProps } from '@reach/router';

import useAuth from '../../app/hooks/useAuth'; // todo: сокращение

export const Login: React.FC<RouteComponentProps> = () => {

  const auth = useAuth();

  function authorize(event: React.SyntheticEvent): void {
    event.preventDefault();

    auth.signIn('stub', 'stub')
      .catch((e) => {
        // eslint-disable-next-line no-alert
        alert('Ошибка авторизации');
        console.error(e);
      });
  }

  return (
    <form onSubmit={authorize}>
      <input type='text' />
      <input type='password' />
      <button type='submit'>Войти</button>
    </form>
  );

};
