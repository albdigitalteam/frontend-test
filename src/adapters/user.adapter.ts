import {IUser, IUserAPI} from '../models/user.model';

export function adaptUser(userAPI: IUserAPI): IUser {
  return {
    id: userAPI.id,
    name: userAPI.name,
    email: userAPI.email,
    avatar: {
      url: 'https://scontent.fcgh10-1.fna.fbcdn.net/v/t39.30808-6/258854853_4697875306922352_8420990843923849622_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sPgW1bQXhfUAX__znKq&_nc_ht=scontent.fcgh10-1.fna&oh=00_AT-P50UHEnjcLGF3NUFtsNYRGFNJ7fPAT1XuZJR8ypWMMQ&oe=61B91BAD',
    },
  };
}
