import {
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_FAILURE,
} from "./types";

const INITIAL = {
  loading: true,
  users: undefined,
  error: false,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
