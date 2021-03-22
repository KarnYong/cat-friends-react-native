import React from 'react';
import { Container, Header, Title, Body, Content } from 'native-base';
import CardList from './CardList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Cat Friends</Title>
          </Body>
        </Header>
        <Content>
          <CardList />
        </Content>
      </Container>
    );
  }
}
