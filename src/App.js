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
        <div class="container">
        <div class="row">
          <div class="col-6">
            <Title><img src="http://unwrittenhosting.com/starwars-cards/star-wars-the-clicky-game-app.png"></img></Title>
          </div>
          <div class="col-6">
            other
          </div>
        </div>
        </div>
        <div class="container-fluid">
        <div class="row">
        {this.state.cards.map(card => (
          <Card
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </div>
    </div>
      </Wrapper>
    );
  }
}

export default App;
