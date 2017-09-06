const initialState = {
  data: '',
  loading: true,
  activePage: 'about'
}

const dataRetrievedReducer = ( state = initialState, action ) => {

  switch( action.type ) {
    case 'DATA_RETRIEVED':
    return Object.assign( {}, state, {
      data: action.data,
      loading: action.loading,
      indexPage: action.indexPage
    })

    default:
    return state;
  }
}

export default dataRetrievedReducer;
