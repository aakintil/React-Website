import fetch from 'isomorphic-fetch'


/*
* action types
*/

// set the active page
export const DATA_RETRIEVED = 'DATA_RETRIEVED';
export const RECEIVED_POSTS = 'RECEIVED_POSTS';
// export const REQUEST_POSTS = 'REQUEST_POSTS';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';


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


export const fetchPostsRequest = (prismic) => {
  return {
    type: FETCH_POSTS_REQUEST,
    prismic
  }
}


export const fetchPostsSuccess = (prismic, json) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    prismic,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const fetchPosts = (subreddit) => {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://aderinsola.prismic.io/api`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

export const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export const fetchPostsIfNeeded = (subreddit) => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}

export const setActivePage = (activePage) => {
  return {
    type: SET_ACTIVE_PAGE,
    activePage: activePage
  };
}
