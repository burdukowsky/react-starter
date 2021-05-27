import React from 'react';
import { useTranslation } from 'react-i18next';

export const LangSelector: React.FC = () => {
  const { i18n } = useTranslation();

  function onLangSelect(event: React.ChangeEvent<HTMLSelectElement>): void {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <select onChange={onLangSelect} defaultValue={i18n.language}>
      <option value='en'>en</option>
      <option value='ru'>ru</option>
    </select>
  );
};
