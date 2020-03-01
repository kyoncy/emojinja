import React from 'react';
import { Header } from 'semantic-ui-react'
import Translation from './Translation';

const TopVisual = () => (
  <div style={{ padding: '20px' }}>
    <Header as='h1' style={{
      textAlign: 'center',
      fontSize: '70px',
      userSelect: 'none',
    }}>
      Emojinja
      <Translation />
    </Header>
  </div>
);

export default TopVisual;
