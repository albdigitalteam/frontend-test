/**
 * Interface for the 'CombinedPosts' data
 */
export interface PostsEntity {
  id: string | number; // Primary ID
  userId: number;
  title: string;
  body: string;
}

export interface CommentsEntity {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface UsersEntity {
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

export interface CombinedPosts extends PostsEntity {
  comments: CommentsEntity[];
  user: UsersEntity[];
}
