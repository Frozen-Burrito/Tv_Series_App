import React, {Component} from 'react';
import 'whatwg-fetch';

import Main from '../Main/index';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
          
          <Main />
        </header>
      </div>
    );

  }
}

export default App;
