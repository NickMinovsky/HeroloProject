import React, { Component } from "react";

class Block extends Component {
  state = {};
  render() {
    return (
      <div className="city" key={this.props.id}>
        <h1 className="city-name">{this.props.cityName}</h1>
        <h2 className="city-date">{this.props.when}</h2>
        <h3 className="city-temp">{this.props.temp}&#176;</h3>
        <h2 className="city-condition">{this.props.condition}</h2>
      </div>
    );
  }
}

export default Block;
