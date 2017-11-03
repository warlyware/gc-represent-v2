import React, { Component } from 'react';

import './App.css';
import SketchComponent from './sketch/Sketch';

class App extends Component {

  componentDidMount() {
    // new p5(sketch);
  }

  render() {
    return (
      <div className="App">
        <SketchComponent />
      </div>
    );
  }
}

export default App;
