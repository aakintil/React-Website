import fetch from 'isomorphic-fetch'


/*
* action types
*/

// set the active page
export const DATA_RETRIEVED = 'DATA_RETRIEVED';
export const RECEIVED_POSTS = 'RECEIVED_POSTS';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';


// TODO
// -- might have to create an action that sends a request to prismic


/*
* action creators
*/
export const dataRetrieved = (data, loading, indexPage) => {
  return {
    type: DATA_RETRIEVED,
    data: data,
    loading: loading,
    indexPage: indexPage
  }
}


function requestPosts(prismic) {
  return {
    type: REQUEST_POSTS,
    prismic
  }
}


function receivedPosts(prismic, json) {
  return {
    type: RECEIVED_POSTS,
    prismic,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const setActivePage = (activePage) => {
  return {
    type: SET_ACTIVE_PAGE,
    activePage: activePage
  };
}
