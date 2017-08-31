import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActivePage } from '../../State/actions';


class Header extends Component {
  static propTypes = {
    activePage: PropTypes.string,
    data: PropTypes.array,
    onClick: PropTypes.func, // eslint-disable-line
  }

  render() {
    // destructure variables from props
    const {
      activePage,
      data,
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
                <a href="##" className="link">{document.slug}</a>
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
  console.log('state to props ', state)
  return {
    activePage: state.activePage,
    data: state.slug.data, // apparently slug contains the data
    slug: state.slug,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
