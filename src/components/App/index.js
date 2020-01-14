import React, {Component} from 'react';
import 'whatwg-fetch';

import Intro from '../intro/index';
import Series from '../../containers/Series/index';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
          <Intro message="Here you can find all of your most loved series" />
          <Series />
        </header>
      </div>
    );

  }
}

export default App;
