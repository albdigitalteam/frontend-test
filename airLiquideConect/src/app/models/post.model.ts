import { IComment } from './comment.model';

export interface IPost {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
  readonly author: string;
  readonly comments?: IComment[];
  readonly image?: string;
  showContent?: boolean;
  showTitle?: boolean;
}
