import React from 'react';
import { Card } from 'semantic-ui-react';
import CardEmoji from './CardEmoji';
import EmojiList from '../datas/EmojiList';
import SlackEmoji from './SlackEmoji';

const CardGroup = () => (
  <Card.Group centered itemsPerRow={6}>
    {/* {EmojiList.map((emoji, index) => (
      <CardEmoji
        key={index}
        {...emoji}
      />
    ))} */}
    <SlackEmoji />
  </Card.Group>
);

export default CardGroup;
