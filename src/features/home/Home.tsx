import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';

export const Home: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation('home');

  return (
    <div>{t('hello')}</div>
  );
};
