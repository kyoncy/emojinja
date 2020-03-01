import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

const Translation: React.FC = () => {
  const [, i18n] = useTranslation();
  const [lang, setLang] = useState('ja');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <Button.Group style={{ margin: '0 30px'}}>
      <Button
        toggle
        active={lang === 'ja'}
        onClick={() => setLang('ja')}
      >日本語</Button>
      <Button.Or />
      <Button
        toggle
        active={lang === 'en'}
        onClick={() => setLang('en')}
      >English</Button>
    </Button.Group>
  );
};

export default Translation;