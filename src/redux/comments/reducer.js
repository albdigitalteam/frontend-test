import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_FAILURE,
  NEW_COMMENTS_REQUEST,
  NEW_COMMENTS_SUCCESS,
} from "./types";

const INITIAL = {
  loading: true,
  comments: undefined,
  error: false,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload.comments,
      };
    case NEW_COMMENTS_REQUEST:
      return {
        ...state,
      };
    case NEW_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload.comments],
      };
    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
