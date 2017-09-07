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

  componentDidMount = () => {
    // create a function that sets the data in state
    dataRetrieved(this.props.prismicData, false, 'about');
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
    onClick: (page) => {
      dispatch(setActivePage(page));
    },
    dataRetrieved: (data, loading, indexPage) => {
      dispatch(dataRetrieved(data, loading, indexPage));
    }
  }
}

// have to make sure that components are 'listening' and know when state changes
// collecting any variable / object within the state object
const mapStateToProps = (state) => {
  console.log('state to props ', state)
  return {
    activePage: '',//state.activePage,
    data: '',//state.slug.data, // apparently slug contains the data
    slug: ''//state.slug,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
