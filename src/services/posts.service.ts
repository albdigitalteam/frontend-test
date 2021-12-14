import {AxiosResponse} from 'axios';

import api from './api';

import {IPostAPI} from '../models/post.model';


export function all(): Promise<AxiosResponse<IPostAPI[]>> {
  return api.get<IPostAPI[]>('/posts');
}

export default {all};
