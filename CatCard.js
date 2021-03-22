import React, { Component } from 'react';
import { CardItem, Thumbnail, Text, Left, Body } from 'native-base';
export default class CatCard extends Component {
  render() {
    return (
      <CardItem>
        <Left>
          <Thumbnail source={{uri: 'https://robohash.org/karnyong?set=set4'}} style={{height: 170, width: null, flex: 1}}/>
          <Body>
            <Text>Karn Yong</Text>
            <Text note>karnyong@gmail.com</Text>
          </Body>
        </Left>
      </CardItem>
    );
  }
}