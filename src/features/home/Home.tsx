import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { Button, DatePicker, Space } from 'antd';

import { AppRangePicker } from 'app/components/app-range-picker/AppRangePicker';

export const Home: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation('home');
  const api = window.appConfig.api;

  return (
    <Space direction='vertical' size={12}>
      <div>{t('hello')}, API: {api}</div>
      <DatePicker />
      <Button>Default Button</Button>
      <AppRangePicker />
    </Space>
  );
};
