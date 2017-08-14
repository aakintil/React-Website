import React, { Component } from 'react';
import { withQuery } from 'react-prismic';
import App from '../../App';

class PrismicWrapper extends Component {

  render() {
    const { prismic } = this.props;
    return (
      <div className="PrismicWrapper">
        {
          prismic.results &&
          <App prismicData={prismic.results}/>
        }
        {
          !prismic.results &&
          <h1>loading...</h1>
        }
      </div>
    );
  }
}

export default withQuery({
  url: 'https://aderinsola.prismic.io/api',
  query: ["", {}]
})(PrismicWrapper);
