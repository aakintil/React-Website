import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { dataRetrieved, setActivePage } from '../../State/actions';
import appReducers from '../../State/reducers';


class Header extends Component {

  render() {
    // destructure variables from props
    const {
      activePage,
      data,
      getState,
      onClick,
    } = this.props;

    return (
      <div className="Header">
        <div className="logo">
          {/* <p> ade </p> */}
        </div>

        {/*  turn into a component -- Navbar */}
        <ul className="navigation">
          {
            data.map( function(document) {
              return (<li
                style={{ // write better styles later
                  textDecoration: document.slug === activePage ? 'underline' : 'none'
                }}
                // if you don't return a function, then the DOM calls SET_ACTIVE_PAGE xx times
                onClick={() => { onClick(document.slug) }}
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



const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (page) => {
      dispatch(setActivePage(page));
    }
  }
}

// have to make sure that components are 'listening' and know when state changes
// collecting any variable / object within the state object
const mapStateToProps = (state) => {
  return {
    activePage: state.activePage,
    data: state.data,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
