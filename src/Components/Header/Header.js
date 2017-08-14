import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { dataRetrieved, setActivePage } from '../../State/actions';
import appReducers from '../../State/reducers';


class Header extends Component {

  render() {
    // destructure variables from props
    const {
      data,
      getState,
      onClick,
      activePage
    } = this.props;


    // const { store } = this.context;

    // const setPage = (page) => {
    //   store.dispatch(setActivePage(page));
    //   console.log("changing state ", store.getState())
    // }
    //
    // const showInitialState = () => {
    //   return store.getState();
    // }

    return (
      <div className="Header">
        <div className="logo">
          {/* <p> ade </p> */}
        </div>
        <ul className="navigation">
          {
            data.map( function(document) {
              return (<li
                style={{
                  textDecoration: document.slug === activePage.slug ? 'underline' : 'none'
                }}
                onClick={() => { onClick(document) }}
                key={ document.id }>
                <a href="#" className="link">{document.slug}</a>
              </li>);
            })
          }
        </ul>
      </div>
    );
  }
}


//
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (page) => { // if you don't return a function, then the DOM calls SET_ACTIVE_PAGE xx times
    dispatch(setActivePage(page));
  }
}
}

// have to make sure that components are 'listening' and know when state changes
// collecting any variable / object within the state object
const mapStateToProps = (state) => {
  return {
    activePage: state.activePage,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
