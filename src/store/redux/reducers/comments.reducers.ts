import { commentsConstants } from 'store/redux/constants';

const comments = (state = [], action: any) => {
  switch (action.type) {
    case commentsConstants.SET_COMMENTS: {
      return [...action.comments];
    }
    case commentsConstants.SET_COMMENT: {
      return [...state, action.comment];
    }
    default:
      return state;
  }
}

export default comments;
