import React, { Component } from "react";

class Day extends Component {
  state = {};
  render() {
    return (
      <div className="day" key={this.props.id}>
        <p className="day-date">{this.props.day}</p>
        <img className="day-icon" src={this.props.icon} alt="icon" />
        <p className="day-temp">{this.props.temp}&#176;</p>
        <p className="day-condition">{this.props.condition}</p>
      </div>
    );
  }
}

export default Day;
