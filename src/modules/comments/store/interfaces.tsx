interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface ICreateCommentDto {
  postId: number;
  name: string;
  email: string;
  body: string;
}

export type {ICreateCommentDto, IComment};
