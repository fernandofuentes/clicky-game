import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the friends json array
  state = {
    cards
  };

  removeCard = id => {
    // Filter this.state.Card for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new cards array
    this.setState({ cards });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>StarWars Clicky Card Game</Title>
        {this.state.cards.map(card => (
          <Card
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
