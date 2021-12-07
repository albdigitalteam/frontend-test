import Config from 'react-native-config';
import {ICreateCommentDto} from '../store/interfaces';

const BASE_URL_COMMENTS = `${Config.API_BASE_URL}/comments`;

export const getComments = async (postId: number) => {
  return await fetch(`${BASE_URL_COMMENTS}?postId=${postId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const createComment = async (commentDto: ICreateCommentDto) => {
  return await fetch(`${BASE_URL_COMMENTS}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentDto),
  });
};
