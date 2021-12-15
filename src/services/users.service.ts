import {AxiosResponse} from 'axios';

import api from './api';

import {IUserAPI} from '../models/user.model';


export function all(): Promise<AxiosResponse<IUserAPI[]>> {
  return api.get<IUserAPI[]>('/users');
}

export function getByEmail(email: string): Promise<AxiosResponse<IUserAPI[]>> {
  return api.get<IUserAPI[]>('/users', {
    params: {
      email,
    },
  });
}

export default {all};
