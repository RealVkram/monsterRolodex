import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
      }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render() {
    return (
      <div className="App">
      <CardList name="victor"><h2>{}</h2> </CardList>
        { this.state.monsters.map(monster => <h2 key={monster.id}>{monster.name}</h2>)}
      </div>
    );
  }
}

export default App;
