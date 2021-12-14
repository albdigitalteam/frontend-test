import {IPost, IPostAPI} from '../models/post.model';
import {IUserAPI, IUser} from '../models/user.model';

import {adaptUser} from './user.adapter';

export function adaptPost(postAPI: IPostAPI, usersAPI: IUserAPI[]): IPost {
  const userSelected = usersAPI.find((user) => user.id === postAPI.userId);

  return {
    id: postAPI.id,
    title: postAPI.title,
    description: postAPI.body,
    user: userSelected ? adaptUser(userSelected) : {} as IUser,
    comments: [],
  };
}
