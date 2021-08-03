import { home_types } from './home.saga'
const INITIAL = {
  posts: [],
  loadingPosts: false,
  loadingRemovePost: false,
  loadingNewComment: false
}

const reducer = (state = INITIAL, payload) => {
  switch (payload.type) {
    case home_types.set_posts: {
      return { 
        ...state,
        posts: payload.payload
      }
    }
    case home_types.set_new_comment: {
      return { 
        ...state,
        posts: payload.payload
      }
    }
    case home_types.set_loading: {
      return { 
        ...state,
        loadingPosts: payload.payload
      }
    }
    case home_types.set_loading_remove: {
      return { 
        ...state,
        loadingRemovePost: payload.payload
      }
    }
    case home_types.set_loading_new_comment: {
      return { 
        ...state,
        loadingNewComment: payload.payload
      }
    }

    default:
      return state
  }
}

export default reducer
