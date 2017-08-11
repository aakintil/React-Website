import { changePage } from './actions';


const initialState = {
  slug: 'about',
  id: 'WSyPiyUAAM1BjSfI'
}

const app = ( state = initialState, action ) => {

  switch( action.type ) {
    case 'SET_PAGE':
    return Object.assign( {}, state, {
      page: action.page,
      data: action.page.data,
      id: action.page.id,
      slug: action.page.slug
    })
    default:
    return state;
  }
}

export default app;
