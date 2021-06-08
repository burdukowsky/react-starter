import React from 'react';
import { useTranslation } from 'react-i18next';
import { ConfigProvider } from 'antd';
import en_US from 'antd/lib/locale/en_US';
import ru_RU from 'antd/lib/locale/ru_RU';
import 'moment/locale/ru';

const antdLocales = {
  en: en_US,
  ru: ru_RU
};

export const AntdConfigProvider: React.FC = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <ConfigProvider locale={antdLocales[i18n.language as 'en' | 'ru']}>
      {children}
    </ConfigProvider>
  );
};
