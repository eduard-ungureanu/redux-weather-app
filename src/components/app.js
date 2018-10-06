import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';

import WeatherLit from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SearchBar/>
        <WeatherLit/>
      </div>
    );
  }
}
