import { changePage } from './actions';


const initialState = {
  data: '',
  loading: true,
  indexPage: 'about',
  activePage: 'about'
}

const app = ( state = initialState, action ) => {

  switch( action.type ) {
    case 'SET_ACTIVE_PAGE':
    return Object.assign( {}, state, {
      activePage: action.activePage,
    })

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

export default app;
