import React, { Component } from 'react';
import { withQuery } from 'react-prismic';

class PrismicWrapper extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="PrismicWrapper">
        { children }
      </div>
    );
  }
}

export default withQuery({
  url: 'https://aderinsola.prismic.io/api',
  query: ["", {}]
})(PrismicWrapper);
