import {IComment} from './comment.model';
import {IUser} from './user.model';

export interface IPostAPI {
  readonly id: number;
  readonly title: string;
  readonly body: string;
  readonly userId: number;
}

export interface IPost {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly user?: IUser;
  readonly comments: IComment[] | [];
  readonly showComments?: boolean | false;
}

export type IPostPage = IPost & {
  handleSaveComment?(newComment: string): void
}
