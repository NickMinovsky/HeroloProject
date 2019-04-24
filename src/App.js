import React, { Component } from "react";
import Block from "./components/WeatherBlock";
import Day from "./components/Day";
import $ from "jquery";
import "./App.css";
import moment from "moment";

// App Class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: <Block cityName="Enter A City Name" when="" temp="0" />
    };
  }
  // Search Handler
  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    this.preformSearch(searchTerm);
  }
  // Search function
  preformSearch(searchInput) {
    const API_KEY = "99109b2393bf4eec88491630192204";
    const urlString =
      "http://api.apixu.com/v1/forecast.json?key=" +
      API_KEY +
      "&q=" +
      searchInput +
      "&days=3";
    // AJAX REQUEST
    $.ajax({
      url: urlString,
      success: data => {
        let cities = [];
        let days = [];
        const aCity = (
          <Block
            key={data.current.wind_mph}
            cityName={data.location.name}
            when={moment(data.forecast.forecastday[0].date).calendar()}
            temp={data.current.temp_c}
            condition={data.current.condition.text}
          />
        );
        data.forecast.forecastday.forEach((forecast, index) => {
          const day = (
            <Day
              key={data.forecast.forecastday[index].date_epoch}
              day={moment(data.forecast.forecastday[index].date).format("dddd")}
              icon={data.forecast.forecastday[index].day.condition.icon}
              temp={
                data.forecast.forecastday[index].day.maxtemp_c +
                "/" +
                data.forecast.forecastday[index].day.mintemp_c
              }
              condition={data.forecast.forecastday[index].day.condition.text}
            />
          );
          days.push(day);
        });
        cities.push(aCity);
        this.setState({ data: cities, dayData: days });
      },
      error: (json, status, err) => {
        console.log("something failed...");
      }
    });
  }
  // Render
  render() {
    return (
      <div>
        <input
          placeholder=" &#xF002;   Search another city"
          onChange={this.searchChangeHandler.bind(this)}
        />
        <div className="container">
          <div className="city-data">{this.state.data}</div>
          <div className="day-data">{this.state.dayData}</div>
        </div>
      </div>
    );
  }
}

export default App;
