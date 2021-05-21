import { commentsConstants } from 'store/redux/constants';
import { IComment } from 'types';

const comments = (state = [], action: any) => {
  switch (action.type) {
    case commentsConstants.SET_COMMENTS: {
      return [...action.comments];
    }
    case commentsConstants.SET_COMMENT: {
      return [...state, action.comment];
    }
    case commentsConstants.EDIT_COMMENT: { 
      const newState = state.map((comment: IComment) => {
        if (comment.id === action.comment.id)
          return { ...action.comment, postId: comment.postId }
        else
          return comment;
      });
      return [...newState]     
    }
    default:
      return state;
  }
}

export default comments;
