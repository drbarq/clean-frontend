import React, { Component } from 'react';

import './App.css';
import SightingsContainer from './Components/ContainerComponent/SightingsContainer'
import Header from './Components/Header/Header'
import Map from './Components/map/map.js'
import FilterByDate from './Components/Filter/FilterByDate'


class App extends Component {
  state = {
    sightings: [{incident_occurrence: "2002-07-17T00:00:00.000",
      incident_location: 'Denver',
      latitude: 39.73,
      longitude: -104.999,
      blood_alcohol_level: 0.4,
      responding_police_department_location: 'California'},
      {incident_occurrence: "2007-07-17T00:00:00.000",
      incident_location: 'Los Angelos',
      latitude: 34.65,
      longitude: 118.453,
      blood_alcohol_level: 0.9,
      responding_police_department_location: 'LAPD'}]

    }

  filterByDate = () => {
    this.setState({
      sightings: this.state.sightings.sort((alpha, beta) => beta.incident_occurrence.localeCompare(alpha.incident_occurrence))
    })
  }

  addNewSighting = event => {
    event.preventDefault()
    alert('YUH YEET')
  }
  render() {
    return (
      <div className="App">
        <Header addNewSighting={this.addNewSighting} />
        <SightingsContainer sightings={this.state.sightings} />
        <Map sightings={this.state.sightings}/>
        <FilterByDate filterByDate={this.filterByDate} />
      </div>
    );
  }
}

export default App;
