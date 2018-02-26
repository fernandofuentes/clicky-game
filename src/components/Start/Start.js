import React, {Component} from "react";
import "./Start.css";

class Start extends React.Component {
  constructor(props) {
        super(props);
        // this.state = { count: 0 };
    }

    render() {
      return (
        <button type="button" className="btn btn-success">Start</button>
      )
    }
  }

export default Start;
