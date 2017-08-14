import React, { Component } from 'react';
import Header from './Components/Header/Header';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    // props
    const { prismicData } = this.props;

    // const state = store.getState();
    // component
    return (
      <div className="App">
        <Header data={prismicData} />

        {/*  make a component */}
        <div className="app-content">
          <h5>content</h5>
        </div>

        {/*  make a component */}
        <div className="app-footer">
          <h5>footer</h5>
        </div>
      </div>
    );
  }
}

export default App;
