import React from 'react';
import { Card } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

interface IProps {
  name: string;
};

const EmojiDescription = ({ name }: IProps) => {
  const [t] = useTranslation();

  return (
    <Card.Description style={{ textAlign: 'center' }}>
      {`${t(name)}`}
    </Card.Description>
  );
};

export default EmojiDescription;