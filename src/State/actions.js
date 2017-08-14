/*
* action types
*/

// set the active page
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
export const DATA_RETRIEVED = 'DATA_RETRIEVED';


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


export const setActivePage = (activePage, id, slug) => {
  return {
    type: SET_ACTIVE_PAGE,
    activePage: activePage,
    id: id,
    slug: slug
  };
}
