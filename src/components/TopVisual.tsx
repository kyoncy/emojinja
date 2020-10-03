import React, { useRef } from "react";
import Typed from "react-typed";
import { Header, Icon } from "semantic-ui-react";
import Translation from "./Translation";

const TopVisual = (): JSX.Element => {
  return (
    <div style={{ padding: "20px" }}>
      <Header
        as="h1"
        style={{
          textAlign: "center",
          userSelect: "none",
        }}
      >
        <div
          style={{
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          <Typed strings={["Emojinja⛩️"]} typeSpeed={100} />
        </div>
        {` `}
        <Translation />
        <a
          style={{ fontSize: "30px" }}
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/intent/tweet?text=Emojinja%20%7C%20%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%97%E3%81%A6Git%E3%81%A7%E4%BD%BF%E3%81%86%E7%B5%B5%E6%96%87%E5%AD%97%E3%82%92%E3%82%B3%E3%83%94%E3%83%BC%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%B5%E3%82%A4%E3%83%88&url=https://emojinja.web.app/"
        >
          <Icon name="twitter" style={{ color: "#1da1f2" }} />
          Share
        </a>
      </Header>
    </div>
  );
};

export default TopVisual;
