import { initial_types } from './initial.saga'
const INITIAL = {
  initialLoading: false,
  activeUser: null,
  loginError: ''
}

const reducer = (state = INITIAL, payload) => {
  switch (payload.type) {
    case initial_types.set_active_user: {
      return { 
        ...state, 
        activeUser: payload.payload
      }
    }
    case initial_types.set_loading: {
      return { 
        ...state, 
        initialLoading: payload.payload
      }
    }
    case initial_types.set_active_user_error: {
      return { 
        ...state, 
        loginError: payload.payload
      }
    }

    default:
      return state
  }
}

export default reducer
