import React, { Component, PropTypes } from 'react';
import { setActivePage } from '../../State/actions';


class Header extends Component {

  render() {
    // destructure variables from props
    const {
      data,
      store
    } = this.props;

    const setPage = (page) => {
      store.dispatch(setActivePage(page));
      console.log("changing state ", store.getState())
    }

    const showInitialState = () => {
      return store.getState();
    }

    return (
      <div className="Header">
        <div className="logo">
          <p> ade </p>
        </div>
        <ul className="navigation">
          {
            data.map( function(document) {
              return (<li
                onClick={() => { setPage(document)}}
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

export default Header;
