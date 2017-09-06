const initialState = {
  data: '',
  loading: true,
  indexPage: 'about',
  activePage: 'about'
}

const appReducers = ( state = initialState, action ) => {

  switch( action.type ) {
    case 'DATA_RETRIEVED':
    return Object.assign( {}, state, {
      data: action.data,
      loading: action.loading,
      indexPage: action.indexPage
    })

    case 'HOME':
    return Object.assign( {}, state, {
      data: action.data,
      location: action.payload.location,
      slug: action.payload.slug,
      payload: action.payload
    })

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

export default appReducers;
