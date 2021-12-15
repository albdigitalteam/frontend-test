import {IPost, IPostAPI} from '../models/post.model';
import {IUserAPI, IUser} from '../models/user.model';

import {adaptUser} from './user.adapter';

import noDataImage from '../assets/no-data.svg';

export function adaptPost(postAPI: IPostAPI, usersAPI: IUserAPI[], photoUrl?: string): IPost {
  const userSelected = usersAPI.find((user) => user.id === postAPI.userId);

  return {
    id: postAPI.id,
    title: postAPI.title,
    description: postAPI.body,
    photoUrl: photoUrl ? photoUrl : noDataImage,
    user: userSelected ? adaptUser(userSelected) : {} as IUser,
    comments: [],
  };
}
