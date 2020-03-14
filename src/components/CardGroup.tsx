/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Card } from "semantic-ui-react";
import CardEmoji from "./CardEmoji";
import EmojiList from "../datas/EmojiList";

const CardGroup = (): JSX.Element => (
  <Card.Group centered>
    {Object.entries(EmojiList).map(([key, value]) => (
      <CardEmoji key={key} name={key} {...value} />
    ))}
  </Card.Group>
);

export default CardGroup;
