import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dataRetrieved, setActivePage } from '../../STATE/actions/actions';


// import logo from './logo.svg';
import './App.css';

class App extends Component {

  static propTypes = {
    dataRetrieved: PropTypes.func,
  }

  render() {

    const { prismicData } = this.props;
    // TODO
    // when data is received
    // -- 1. store the data in the store
    // -- 2. set the active page

    return (
      <div className="App">
        <h1>loaded the data</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // collectPageData: (slug) => {
    //   dispatch(collectPageData(slug));
    // }
  }
}

// have to make sure that components are 'listening' and know when state changes
// collecting any variable / object within the state object
const mapStateToProps = (state) => {
  console.log('state to props ', state)
  return {
    activePage: state.pages.payload.slug
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
