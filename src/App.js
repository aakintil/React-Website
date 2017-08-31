import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import './App.css';


class App extends Component {

  render() {

    // props
    // eslint-disable-next-line
    const { prismicData } = this.props;
    // const state = store.getState();
    // component
    return (
      <div className="App">
        <Header/>

        {/*  make a component */}
        <Content/>

        {/*  make a component */}
        <div className="app-footer">
          <h5>footer</h5>
        </div>
      </div>
    );
  }
}

export default App;
