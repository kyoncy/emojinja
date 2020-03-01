import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Card } from 'semantic-ui-react';
import EmojiArea from './EmojiArea';

interface CardEmojiProps {
  emoji?: string;
  backgroundColor?: string;
  name?: string;
  description?: string;
};

const CardEmoji = ({
  emoji = '❌',
  backgroundColor = '#ffffff',
  name = 'none',
  description = 'no description'
}: CardEmojiProps) => (
  <CopyToClipboard
    text={`:${name}:`}
  >
    <Card
      id={name}
      href={`#${name}`}
      style={{
        margin: '20px'
      }}
    >
      <EmojiArea emoji={emoji} backgroundColor={backgroundColor} />
      <Card.Content>
        <Card.Header style={{ textAlign: 'center' }}>
          {`:${name}:`}
        </Card.Header>
        <Card.Description style={{ textAlign: 'center' }}>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  </CopyToClipboard>
);

export default CardEmoji;
