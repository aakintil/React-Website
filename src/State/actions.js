/*
* action types
*/

// set the active page
export const SET_PAGE = 'SET_PAGE';

// TODO
// -- might have to create an action that sends a request to prismic


/*
* action creators
*/

export const changePage = (page) => {
  return {
    type: SET_PAGE,
    page: page
  };
}
