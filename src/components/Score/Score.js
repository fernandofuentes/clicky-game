import React, {Component} from "react";
import "./Score.css";

class Score extends React.Component {
  constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
      return (
      <div className="score-box">
        <h2>Score</h2>
        <h3 id="Score">{this.props.Score}</h3>
      </div>
    )
    }
  }

//handle functioning



export default Score;
