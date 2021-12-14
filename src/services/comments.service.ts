import {AxiosResponse} from 'axios';

import api from './api';

import {ICommentAPI} from '../models/comment.model';


export async function get(id: number): Promise<AxiosResponse<ICommentAPI[]>> {
  return api.get<ICommentAPI[]>('/comments', {
    params: {
      postId: id,
    },
  });
}

export default {get};
