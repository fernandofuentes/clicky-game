import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";
import Start from "./components/Start/Start";
import Score from "./components/Score/Score";
import HighScore from "./components/HighScore/HighScore";

class App extends Component {
  // Setting this.state.cards to the cards json array
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
        <div className="container">

          <div className="row">
            <div className="col-12 text-center">
              <img src="http://unwrittenhosting.com/starwars-cards/star-wars-the-clicky-game-app.png"></img>
            </div>
          </div>
          <div className="row main-bar">
            <div className="col-12 col-md-4 col-sm-12 bsCol">
              <Start />
            </div>
            <div className="col-12 col-md-4 col-sm-12 bsCol">
              <Score Score={this.state.Score}/>
            </div>
            <div className="col-12 col-md-4 col-sm-12 bsCol">
              <HighScore HighScore={this.state.HighScore}/>
            </div>
          </div>

        </div>

        <div className="container">
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                id={card.id}
                key={card.id}
                name={card.name}
                image={card.image}
              />
            ))}
          </div>
          <div className="row">
            <div className="col-12 text-center name">
              <p>Fernando Fuentes</p>

            </div>

          </div>
        </div>


      </Wrapper>
    );
  }
}

export default App;
