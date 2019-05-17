import React, { Component } from 'react'
import './App.css'

import Bedroom from '../components/containers/Bedroom'
import Village from '../components/containers/Village'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Bedroom />
        <Village />
      </div>
    )
  }
}

export default App
