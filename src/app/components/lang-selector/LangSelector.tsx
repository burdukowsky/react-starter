import React from 'react';
import { useTranslation } from 'react-i18next';

import { useLocalStorage } from 'app/hooks/useLocalStorage';
import { LS_LANG } from 'app/globals/ls-keys';

export const LangSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [, setLang] = useLocalStorage<string | null>(LS_LANG);

  function onLangSelect(event: React.ChangeEvent<HTMLSelectElement>): void {
    i18n.changeLanguage(event.target.value);
    setLang(event.target.value);
  }

  return (
    <select onChange={onLangSelect} defaultValue={i18n.language}>
      <option value='en'>en</option>
      <option value='ru'>ru</option>
    </select>
  );
};
