import React, { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Card, Image } from 'semantic-ui-react';
import SlackEmojiList from '../datas/SlackEmojiList';

const SlackEmoji = () => {
  const [emoji, setEmoji]: [any, React.Dispatch<any>] = useState({});

  useEffect(() => {
    const f = async () => {
      const { emoji } = SlackEmojiList;
      setEmoji(emoji);
    }
    f();
  }, []);

  return (
    <>
      {Object.keys(emoji).map(key => {
        return (
          <CopyToClipboard
            text={`:${key}:`}
          >
            <Card
              id={key} key={key}
              href={`#${key}`}
              style={{
                margin: '20px'
              }}
            >
              <Image style={{ padding: '10px' }} src={emoji[key]} wrapped ui={false} />
              <Card.Content>
                <Card.Header style={{ textAlign: 'center' }}>
                  {`:${key}:`}
                </Card.Header>
              </Card.Content>
            </Card>
          </CopyToClipboard>
        )
      })}
    </>
  );
};

export default SlackEmoji;
