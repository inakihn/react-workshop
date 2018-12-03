import React from "react";
import "./CurrentDateTime.css";

export default class CurrentDateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="current-date-time">{this.state.date.toUTCString()}</div>
    );
  }
}
