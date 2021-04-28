import { commentsConstants } from 'store/redux/constants';
import { IComment } from 'types';

const comments = (state = [], action: any) => {

  switch (action.type) {
    case commentsConstants.SET_COMMENTS:{    
      return [...action.comments];
    }   
    default:
      return state;
  }
}

export default comments;
