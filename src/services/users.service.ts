import {AxiosResponse} from 'axios';

import api from './api';

import {IUserAPI} from '../models/user.model';


export function all(): Promise<AxiosResponse<IUserAPI[]>> {
  return api.get<IUserAPI[]>('/users');
}

export default {all};
