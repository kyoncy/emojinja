import React from 'react';
import { Card } from 'semantic-ui-react';
import CardEmoji from './CardEmoji';
import EmojiList from '../datas/EmojiList';

const CardGroup = () => (
  <Card.Group centered itemsPerRow={4}>
    {EmojiList.map((emoji, index) => (
      <CardEmoji
        key={index}
        {...emoji}
      />
    ))}
  </Card.Group>
);

export default CardGroup;
