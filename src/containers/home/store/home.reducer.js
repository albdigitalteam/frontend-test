import { home_types } from './home.saga'
const INITIAL = {
  posts: [],
}

const reducer = (state = INITIAL, payload) => {
  switch (payload.type) {
    case home_types.set_posts: {
      return { 
        ...state, 
        posts: payload.payload
      }
    }

    default:
      return state
  }
}

export default reducer
