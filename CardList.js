import React, { Component } from 'react';
import CatCard from './CatCard';

export default class CardList extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({cats: users}));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchfield !== this.props.searchfield) {
      this.setState({searchfield: this.props.searchfield});
    }
  }

  render() {
    const {cats, searchfield} = this.state;

    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
      filteredCats.map((user, i) => {
        return (
          <CatCard
            key={filteredCats[i].id}
            id={filteredCats[i].id}
            name= {filteredCats[i].name}
            email={filteredCats[i].email}
          />
        );
      })
    );
  }
}