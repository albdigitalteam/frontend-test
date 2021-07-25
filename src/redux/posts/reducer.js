import {
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  GET_POST_REQUEST,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
} from "./types";

const INITIAL = {
  loading: true,
  posts: undefined,
  error: false,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
      };
    case DELETE_POST_SUCCESS:
      const newPostState = state.posts.filter(
        (post) => post.id !== action.payload.posts
      );
      return {
        ...state,
        posts: newPostState,
      };
    case NEW_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_POST_SUCCESS:
      const array = state.posts;
      const newFirstElement = action.payload.posts;
      const newArray = [newFirstElement].concat(array);
      return {
        ...state,
        loading: false,
        posts: newArray,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
