import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Card, Popup, Grid, Button, Header } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { css } from 'glamor'
import 'react-toastify/dist/ReactToastify.css';
import EmojiArea from './EmojiArea';

interface CardEmojiProps {
  emoji?: string;
  backgroundColor?: string;
  name?: string;
};

toast.configure({
  position: "bottom-left",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
});

const CardEmoji = ({
  emoji = '❌',
  backgroundColor = '#ffffff',
  name = 'none',
}: CardEmojiProps) => {
  const [t] = useTranslation();
  const notify = (text: string, backgroundColor: string) => toast(`Copy ${text}`, {
    className: css({
      fontWeight: 'bold',
      backgroundColor: `${backgroundColor} !important`,
      color: 'rgba(0,0,0,.87) !important'
    }),
    bodyClassName: css({
      fontSize: '18px',
      fontFamily: 'Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols',
    })
  });

  return (
    <Popup
      content={<p style={{ fontWeight: 'bold', userSelect: 'none' }}>Copy text :{name}:</p>}
      on={['hover', 'click']} size='large' flowing hoverable
      trigger={
        <Card id={name} style={{ margin: '20px' }} >
          <EmojiArea emoji={emoji} backgroundColor={backgroundColor} />
          <Card.Content>
            <Card.Header style={{ textAlign: 'center' }}>
              {`:${name}:`}
            </Card.Header>
            <Card.Description style={{ textAlign: 'center' }}>
              {`${t(name)}`}
            </Card.Description>
          </Card.Content>
        </Card>
      }
    >
      <Grid centered divided columns={2}>
        <Grid.Column textAlign='center'>
          <Header as='h4' style={{
            userSelect: 'none',
            fontFamily: 'Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols',
          }}>{emoji}</Header>
          <CopyToClipboard text={emoji}>
            <Button onClick={() => notify(emoji, backgroundColor)}>Direct Copy</Button>
          </CopyToClipboard>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Header as='h4' style={{ userSelect: 'none' }}>{`:${name}:`}</Header>
          <CopyToClipboard text={`:${name}:`}>
            <Button onClick={() => notify(`:${name}:`, backgroundColor)}>Alias Copy</Button>
          </CopyToClipboard>
        </Grid.Column>
      </Grid>
    </Popup>
)
};

export default CardEmoji;
