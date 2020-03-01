import React from 'react';
import { Container } from 'semantic-ui-react'
import CardGroup from './components/CardGroup'
import ClipBoard from './components/ClipBoard';

const App = () => {
  return (
    <Container style={{ paddingTop: '2rem' }}>
      <ClipBoard />
      <CardGroup />
    </Container>
  );
}

export default App;
