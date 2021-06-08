import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { DatePicker } from 'antd';

export const Home: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation('home');
  const api = window.appConfig.api;

  return (
    <React.Fragment>
      <div>{t('hello')}, API: {api}</div>
      <DatePicker />
    </React.Fragment>
  );
};
