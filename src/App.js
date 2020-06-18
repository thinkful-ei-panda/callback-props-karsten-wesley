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


  addRandomCard = (listIndex) => {
    console.log('adding card');
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    
    let newCards=this.state.allCards;
    const newCard=newRandomCard()
    newCards[newCard.id]=newCard;

    let newLists=this.state.lists
    newLists[listIndex].cardIds.push(newCard.id)


    this.setState({      
      allCards:newCards
    })

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
          {this.state.lists.map((list,listIndex) => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => this.state.allCards[id])}
              handleDelete={this.deleteCard}
              handleAdd={this.addRandomCard}
              listIndex={listIndex}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
