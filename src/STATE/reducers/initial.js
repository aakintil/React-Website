const initialState = {
  pageData: '',
  slug: 'about',
  payload: '',
}

const initialReducer = ( state = initialState, action ) => {

  switch( action.type ) {
    case 'HOME':
    return Object.assign( {}, state, {
      pageData: action.pageData,
      slug: action.payload.slug,
      payload: action.payload
    })

    default:
    return state;
  }
}

export default initialReducer;
