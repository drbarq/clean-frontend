import React, { Component } from 'react';
const BASE_URL = 'https://rocky-ridge-92628.herokuapp.com/sightings'
import './App.css';
import SightingsContainer from './Components/ContainerComponent/SightingsContainer'
import Header from './Components/Header/Header'
import Map from './Components/map/map.js'
import FilterByDate from './Components/Filter/FilterByDate'
import TopTenPlausibility from './Components/Filter/TopTenPlausibility'
const store = []

class App extends Component {
  componentDidMount() {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(sightings => {
      this.setState({sightings})
      store.push(sightings)
    })
    .catch(error => console.error(error))
  }
  state = {
    modalVisibility: false,
    sightings: [{incident_occurrence: "2002-07-17T00:00:00.000",
      incident_location: 'Denver',
      latitude: 39.73,
      longitude: -104.999,
      blood_alcohol_level: 0.4,
      responding_police_department_location: 'California',
      plausibility: 8
      },
      {incident_occurrence: "2007-07-17T00:00:00.000",
      incident_location: 'Los Angelos',
      latitude: 34.65,
      longitude: 118.453,
      blood_alcohol_level: 0.9,
      responding_police_department_location: 'LAPD',
      plausibility: 3
      }
    ]
  }





  addNewSighting = event => {
    event.preventDefault()
    alert('im creating a new sighting')
    this.setState({modalVisibility: this.state.modalVisibility ? false : true})
  }
  showNewSightingModal = event => {
    event.preventDefault()
    this.setState({modalVisibility: this.state.modalVisibility ? false : true})
  }



  zeroOutState = () => {
    this.setState({
      sightings: []
    })
  }

  refillState = () => {
    this.setState({
      sightings: store
    })
  }



  render() {
    return (
      <div className="App">
        <Map sightings={this.state.sightings}/>
        <Header modalVisibility={this.state.modalVisibility} addNewSighting={this.addNewSighting} showNewSightingModal={this.showNewSightingModal}/>
        <SightingsContainer sightings={this.state.sightings} />



      </div>
    );
  }
}

export default App;
