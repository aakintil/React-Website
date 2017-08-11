import React, { Component, PropTypes } from 'react';
import { changePage } from '../../State/actions';


class Header extends Component {

  render() {
    // destructure variables from props
    const { data, setActivePage, store } = this.props;

    const changePages = (page) => {
      store.dispatch(changePage(page)); 
    }
    return (
      <div className="Header">
        <div className="logo">
          <p> center test </p>
        </div>
        <ul className="navigation">
          {
            data.map( function(document) {
              return (<li
                onClick={() => { changePages(document)}}
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

// export default withQuery({
//   url: 'https://aderinsola.prismic.io/api',
//   query: ["", {}]
// })(Header);
