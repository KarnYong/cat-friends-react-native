import React from 'react';
import { Container, Header, Title, Body, Content, Item, Icon, Input } from 'native-base';
import CardList from './CardList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: ""
    };
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({searchfield: event.target.value});
  }

  render() {
    const {searchfield} = this.state;

    return (
      <Container>
        <Header>
          <Body>
            <Title>Cat Friends</Title>
          </Body>
        </Header>
        <Item>
          <Icon active name="search" />
          <Input placeholder="Search for cats"
            value={this.state.password}
            onChangeText={(searchfield) => this.setState({searchfield})}
          />
        </Item>
        <Content>
          <CardList searchfield={searchfield}/>
        </Content>
      </Container>
    );
  }
}
