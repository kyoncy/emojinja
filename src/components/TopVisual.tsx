/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */
import React, { useRef } from "react";
import Typed from "react-typed";
import { Header } from "semantic-ui-react";
import Translation from "./Translation";

const TopVisual = (): JSX.Element => {
  let typed: any = useRef();

  return (
    <div style={{ padding: "20px" }}>
      <Header
        as="h1"
        style={{
          textAlign: "center",
          userSelect: "none"
        }}
      >
        <div
          style={{
            fontSize: "40px",
            marginBottom: "20px"
          }}
          role="button"
          onClick={(): void => {
            typed.reset();
          }}
        >
          <Typed
            strings={["Emojinja⛩"]}
            typeSpeed={100}
            typedRef={(ref: HTMLElement): void => {
              typed = ref;
            }}
          />
        </div>
        {` `}
        <span style={{ fontSize: "30px" }}>for Github</span>
        <Translation />
      </Header>
    </div>
  );
};

export default TopVisual;
