import React, {Component} from "react";
import "./HighScore.css";


class HighScore extends React.Component {
  constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
      return (
      <div className="high-score-box">
        <h2>High Score</h2>
        <h3 id="HighScore">{this.props.HighScore}</h3>
      </div>
    )
  }
}

//handle functioning

export default HighScore;
