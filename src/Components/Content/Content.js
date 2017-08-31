import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActivePage } from '../../State/actions';


class Content extends Component {
  static propTypes = {
    activePage: PropTypes.string,
    data: PropTypes.array,
    getState: PropTypes.object, // eslint-disable-line
    onClick: PropTypes.func, // eslint-disable-line
  }

  render() {
    // destructure variables from props
    const {
      activePage,
      data,
      onClick, // eslint-disable-line
    } = this.props;


    const page = data.find( (document) => {
      if ( document.slug === activePage ) {
        return document;
      }
      return '';
    });

    // eslint-disable-next-line
    const structurePageData = () => {
      // we have to go through an organize this data too

      // eslint-disable-next-line
      let organizedPageData = {
        'slug': '',
        'callout': '',
        'category': '',
        'description': '',
        'title': '',
        'skills': '',
        'hero-images': [],
        'process-block': [
          {
            'process-type': '',
            'process-title': '',
            'process-copy': ''
          }
        ],
      }
    }


    return (
      <div className="app-content">

        <div className="title">
          {page.data['project-pages.title'].value[0].text}
        </div>

        {/* // a shitty way to show the html in the values */}
        <div className="callout" // a shitty way to show the html in the values
        dangerouslySetInnerHTML={ {__html: page.data['project-pages.callout'].value[0].text} }
      />

      <h5>description</h5>
      { page.getText('project-pages.description') }
      <h5>callout</h5>
      { page.getStructuredText('project-pages.title').asHtml()}
      <div/>

      <div className="description">
        <h5>description</h5>
        {page.data['project-pages.description'].value[0].text}
      </div>

      <div className="category">
        {page.data['project-pages.category'].value[0].text}
      </div>

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
    data: state.slug.data,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);
