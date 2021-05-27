import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';

export const NotFound: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  return (
    <div>404 - {t('404')}</div>
  );
};
