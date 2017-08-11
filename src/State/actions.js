/*
* action types
*/

export const SET_PAGE = 'SET_PAGE';

/*
* action creators
*/

export const changePage = (page) => {
  return {
    type: SET_PAGE,
    page: page
  };
}
