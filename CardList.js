import React, { Component } from 'react';
import { CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import CatCard from './CatCard';

export default class CardList extends Component {
  constructor() {
    super()
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({cats: users}));
  }

  render() {
    const {cats} = this.state;

    return (
      cats.map((user, i) => {
        return (
          <CatCard
            key={cats[i].id}
            id={cats[i].id}
            name= {cats[i].name}
            email={cats[i].email}
          />
        );
      })
    );
  }
}