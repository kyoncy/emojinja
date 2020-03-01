import React from 'react';
import { Container } from 'semantic-ui-react'
import TopVisual from './components/TopVisual';
import CardGroup from './components/CardGroup'

const App = () => {
  return (
    <Container style={{ paddingTop: '2rem' }}>
      <TopVisual />
      <CardGroup />
    </Container>
  );
}

export default App;
