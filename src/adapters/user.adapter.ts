import {IUser, IUserAPI} from '../models/user.model';

import profileImage from '../assets/profile.svg';

export function adaptUser(userAPI: IUserAPI): IUser {
  return {
    ...userAPI,
    avatar: {
      url: profileImage,
    },
  };
}
