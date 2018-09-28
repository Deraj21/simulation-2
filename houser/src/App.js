import React, { Component } from 'react';
import './reset.css';
import './App.css';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="app">
        App
        { routes }
      </div>
    );
  }
}

export default App;
