import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { dataRetrieved, setActivePage } from '../../State/actions';
import appReducers from '../../State/reducers';


class Content extends Component {

  render() {
    // destructure variables from props
    const {
      activePage,
      data,
      onClick,
    } = this.props;
    const getActivePageData = () => {
      let pageData = '';
      data.map( (document) => {
        if ( document.slug === activePage ) {
          pageData = document;
        }
      });
      return pageData;
    }


    const page = getActivePageData();


    const structurePageData = () => {
      // we have to go through an organize this data too
      let organizedPageData = {
        slug: '',
        callout: '',
        category: '',
        description: '',
        title: ''
      }
    }

    console.log( getActivePageData() );

    const {
      title
    } = data;

    return (
      <div className="app-content">

        <div className="title">
          {page.data['project-pages.title'].value[0].text}
        </div>

        <div className="callout" // a shitty way to show the html in the values
          dangerouslySetInnerHTML={ {__html: page.data['project-pages.callout'].value[0].text} }
        />

        <div className="description">
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
    data: state.data,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);