import { initial_types } from './initial.saga'
const INITIAL = {
  activeUser: null
}

const reducer = (state = INITIAL, payload) => {
  switch (payload.type) {
    case initial_types.set_active_user: {
      return { 
        ...state, 
        activeUser: payload.payload
      }
    }

    default:
      return state
  }
}

export default reducer
