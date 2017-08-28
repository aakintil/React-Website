/*
* action types
*/

// set the active page
export const DATA_RETRIEVED = 'DATA_RETRIEVED';
export const RECEIVED_POSTS = 'RECEIVED_POSTS';
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

export const setActivePage = (activePage) => {
  return {
    type: SET_ACTIVE_PAGE,
    activePage: activePage
  };
}
