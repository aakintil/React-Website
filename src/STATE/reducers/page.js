const initialState = {
  activePageData: '',
  activePage: ''
}

const pageReducers = ( state = initialState, action ) => {

  switch( action.type ) {
    case 'GET_ACTIVE_PAGE_DATA':
    return Object.assign( {}, state, {
      activePageData: action.activePageData,
    })

    case 'SET_ACTIVE_PAGE':
    return Object.assign( {}, state, {
      activePage: action.activePage,
    })

    default:
    return state;
  }
}

export default pageReducers;
