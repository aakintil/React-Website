import React, { Component } from 'react';
import Header from './Components/Header/Header';
import logo from './logo.svg';
import { withQuery } from 'react-prismic';
import './App.css';

class App extends Component {

  // creating state variable to control current page and other transitions
  constructor(props) {
    super(props);
    this.state = { activePage: {} };
  }

  render() {
    const { prismic } = this.props;
    const setActivePage = (page) => {
      this.setState({ activePage: page });
      console.log("app state ", this.state);
    }
    return (
      <div className="App">
        { prismic.results &&
          <Header
            data={this.props.prismic.results}
            setActivePage={setActivePage}
          />
        }
        <div className="app-content">

        </div>

        <div className="app-footer">

        </div>
      </div>
    );
  }
}

export default withQuery({
  url: 'https://aderinsola.prismic.io/api',
  query: ["", {}]
})(App);
