interface IPost {
  id: number;
  body: string;
  title: string;
  userId: number;
}

interface ICreatePostDto {
  body: string;
  title: string;
  userId: number;
}

export type {ICreatePostDto, IPost};
