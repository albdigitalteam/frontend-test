import {IUser} from './user.model';

export interface ICommentAPI {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly body: string;
  readonly postId: number
}

export interface IComment {
  readonly id: number;
  readonly user: IUser;
  readonly description: string;
}
