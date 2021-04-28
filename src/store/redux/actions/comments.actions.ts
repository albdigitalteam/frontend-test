import { commentsConstants } from 'store/redux/constants';
import { IComment } from 'types';

export const addComment = (comment: IComment) => ({
  type: commentsConstants.ADD_COMMENT,
  comment,
})

