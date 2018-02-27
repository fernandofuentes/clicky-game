import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";
import Start from "./components/Start/Start";
import Score from "./components/Score/Score";
import HighScore from "./components/HighScore/HighScore";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: [],
      cards: cards,
      unselectedCards: cards,
      Score: 0,
      HighScore: 0
    };
    console.log(cards);
  }

  // Shuffle Cards Array
  shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Select Card - if else
    selectCard = character => {
        const findCard = this.state.unselectedCards.find(item => item.character === character);

        if(findCard === undefined) {
            // failure to select a new card
            this.setState({
                HighScore: this.state.HighScore + 1,
                Score: 0,
                cards: cards,
                unselectedCards: cards
            });
        }
        else {
            // success to select a new card
            const newCards = this.state.unselectedCards.filter(item => item.character !== character);

            this.setState({
                Score: this.state.Score + 1,
                cards: cards,
                unselectedCards: newCards
            });
        }
        this.shuffleArray(cards);
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

        <div className="container-fluid">
          <div className="row text-center">
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
