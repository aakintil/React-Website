import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataRetrieved } from './State/actions';
import appReducers from './State/reducers';
import Header from './Components/Header/Header';
import logo from './logo.svg';
import './App.css';

// have to make sure that components are 'listening' and know when state changes
const mapStateToProps = function(state){
  return {
    something: state.something,
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    getSomething: actionCreators.getSomething,
  }, dispatch)
}

class App extends Component {

  render() {
    // props
    const { prismicData } = this.props;
    const { store } = this.context;

    console.log( this.props )
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
