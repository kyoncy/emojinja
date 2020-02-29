import React from 'react';
import { Container, Divider, Header, Segment, Table } from 'semantic-ui-react'

export const Sample = () => {
  return (
    <Container style={{ paddingTop: '2rem' }}>
      <Header as="h2">概要</Header>
      <Divider />
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>項目</Table.HeaderCell>
            <Table.HeaderCell>内容</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Sematic-UIとは</Table.Cell>
            <Table.Cell>CSSフレームワークの１つである</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Reactとの相性は？</Table.Cell>
            <Table.Cell>公式がReactライブラリを提供しているので安定感がある</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Header as="h2">公式サイト</Header>
      <Divider />
      <Segment>
        <Header as="h3">公式ドキュメント</Header>
        <a href="https://react.semantic-ui.com"> https://react.semantic-ui.com</a>
      </Segment>
      <Segment>
        <Header as="h3">Github</Header>
        <a href="https://github.com/Semantic-Org/Semantic-UI-React">
          https://github.com/Semantic-Org/Semantic-UI-React
        </a>
      </Segment>
      <Header as="h2">解説</Header>
      <Divider />
      <p>このように、あらかじめ用意されているコンポーネントを利用して、綺麗なサイトを作成できる。</p>
    </Container>
  )
};
