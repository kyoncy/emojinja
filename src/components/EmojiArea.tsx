import React from "react";

interface CardEmojiProps {
  emoji?: string;
  backgroundColor?: string;
}

const EmojiArea = ({
  emoji = "❌",
  backgroundColor = "#ffffff"
}: CardEmojiProps): JSX.Element => (
  <div
    style={{
      backgroundColor: backgroundColor,
      textAlign: "center",
      fontSize: "100px",
      height: "200px",
      position: "relative"
    }}
  >
    <p
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateY(-50%) translateX(-50%)",
        WebkitTransform: "translateY(-50%) translateX(-50%)",
        fontFamily:
          "Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,Segoe UI Symbol,Android Emoji,EmojiSymbols"
      }}
    >
      {emoji}
    </p>
  </div>
);

export default EmojiArea;
