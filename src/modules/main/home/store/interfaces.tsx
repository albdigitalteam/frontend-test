interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

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

export type {ICreatePostDto, ICreateCommentDto, IUser, IComment, IPost};
