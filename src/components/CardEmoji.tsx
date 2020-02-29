import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Card } from 'semantic-ui-react';


interface CardEmojiProps {
  emoji?: string;
  backgroundColor?: string;
  name?: string;
};

const CardEmoji = ({
  emoji = '❌',
  backgroundColor = '#ffffff',
  name = 'none',
}: CardEmojiProps) => (
  <CopyToClipboard
    text={`:${name}:`}
  >
    <Card
      id={name}
      href={`#${name}`}
    >
      <div style={{
        backgroundColor: backgroundColor,
        textAlign: 'center',
        fontSize: '100px',
        height: '200px',
        position: 'relative',
      }}>
        <p style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translateY(-50%) translateX(-50%)',
          WebkitTransform: 'translateY(-50%) translateX(-50%)',
        }}>
          {emoji}
        </p>
      </div>
      <Card.Content>
        <Card.Header style={{ textAlign: 'center' }}>
          {`:${name}:`}
        </Card.Header>
      </Card.Content>
    </Card>
  </CopyToClipboard>
);

export default CardEmoji;
