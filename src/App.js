import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  // static defaultProps = {
  //   store: {
  //     lists: [],
  //     allCards: {},
  //   },

  //create state
  state = store;

  //add functions to modify state
  deleteCard = () => {
    console.log('deleting');
    // function omit(obj, keyToOmit) {
    //   let {[keyToOmit]: _, ...rest} = obj;
    //   return rest;
  };

  // Example
  // const objectWithKVPs = {
  //   key: 'value',
  //   foo: 'foo value',
  //   bar: 'bar value',
  //   abc: { nested: 'object' }
  // }

  // // To remove the foo key value pair
  // const newObjectWithKVPs = omit(objectWithKVPs, 'foo');
  //}
  addRandomCard = () => {
    //   const newRandomCard = () => {
    //     const id = Math.random().toString(36).substring(2, 4)
    //       + Math.random().toString(36).substring(2, 4);
    //     return {
    //       id,
    //       title: `Random Card ${id}`,
    //       content: 'lorem ipsum',
    //     }
    //   }
    //   console.log('adding card')
    // }
    // pass the function down to child components
  };

  render() {
    const { store } = this.props;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map((list) => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
