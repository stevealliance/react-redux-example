import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import logo from '../logo.svg';

import store from '../store';

import ReduxActions from '../ReduxActions';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-Redux">
            <ReduxActions/>
          </p>

        </div>
      </Provider>
    );
  }
}

export default App;
