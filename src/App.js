import React, { Component } from 'react';
import List from './List';
import './App.css';
import store from './STORE';

class App extends Component {
  state = { ...store };

  //add functions to modify state
  deleteCard = (listIndex, cardIndex) => {
    console.log('deleting');
    let newLists = this.state.lists;
    newLists[listIndex].cardIds.splice(cardIndex, 1);
    this.setState({ lists: newLists });
  };

  addRandomCard = () => {
    console.log('adding card');
  };

  render() {
    console.log(this.state);
    // const { state } = this.props;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => this.state.allCards[id])}
              handleDelete={this.deleteCard}
              handleAdd={this.addRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
