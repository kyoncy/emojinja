import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import "./datas/i18n";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: "61810b0d3eac5f5f08bdd9d6",
  });

  ReactDOM.render(
    <LDProvider>
      <App />
    </LDProvider>,
    document.getElementById("root")
  );
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
