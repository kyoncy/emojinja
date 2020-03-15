/* eslint-disable react/jsx-wrap-multilines, react/jsx-curly-newline */
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Card, Popup, Grid, Button, Header } from "semantic-ui-react";
import { toast } from "react-toastify";
import { css } from "glamor";
import "react-toastify/dist/ReactToastify.css";
import EmojiArea from "./EmojiArea";
import EmojiDescription from "./EmojiDescription";

interface CardEmojiProps {
  emoji?: string;
  backgroundColor?: string;
  name?: string;
}

toast.configure({
  position: "bottom-left",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false
});

const CardEmoji = ({
  emoji = "❌",
  backgroundColor = "#ffffff",
  name = "none"
}: CardEmojiProps): JSX.Element => {
  // eslint-disable-next-line no-shadow
  const notify = (text: string, backgroundColor: string): React.ReactText =>
    toast(`Copy ${text}`, {
      className: css({
        fontWeight: "bold",
        backgroundColor: `${backgroundColor} !important`,
        color: "rgba(0,0,0,.87) !important"
      }),
      bodyClassName: css({
        fontSize: "18px",
        fontFamily:
          "Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols"
      })
    });

  return (
    <Popup
      on={["hover", "click"]}
      size="large"
      flowing
      hoverable
      trigger={
        <Card id={name} style={{ margin: "20px" }}>
          <EmojiArea emoji={emoji} backgroundColor={backgroundColor} />
          <Card.Content>
            <Card.Header style={{ textAlign: "center" }}>
              {`:${name}:`}
            </Card.Header>
            <EmojiDescription name={name} />
          </Card.Content>
        </Card>
      }
    >
      <Grid centered divided columns={2}>
        <Grid.Column textAlign="center">
          <Header
            as="h4"
            style={{
              userSelect: "none",
              fontFamily:
                "Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols"
            }}
          >
            {emoji}
          </Header>
          <CopyToClipboard text={emoji}>
            <Button
              onClick={(): React.ReactText => notify(emoji, backgroundColor)}
            >
              Copy Directly
            </Button>
          </CopyToClipboard>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Header as="h4" style={{ userSelect: "none" }}>{`:${name}:`}</Header>
          <CopyToClipboard text={`:${name}:`}>
            <Button
              onClick={(): React.ReactText =>
                notify(`:${name}:`, backgroundColor)
              }
            >
              Copy Alias
            </Button>
          </CopyToClipboard>
        </Grid.Column>
      </Grid>
    </Popup>
  );
};

export default CardEmoji;
