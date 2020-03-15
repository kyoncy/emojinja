import React from "react";
import { Container } from "semantic-ui-react";
import TopVisual from "./components/TopVisual";
import CardGroup from "./components/CardGroup";
import Footer from "./components/Footer";

const App = (): JSX.Element => {
  return (
    <Container fluid style={{ paddingTop: "2rem" }}>
      <TopVisual />
      <CardGroup />
      <Footer />
    </Container>
  );
};

export default App;
