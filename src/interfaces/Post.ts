import { Comment } from './Comment';
import { User } from './User';

export interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

export interface PostWithComments {
	id: number;
	title: string;
	body: string;
	userId: number;
	comments: Array<Comment>;
}

export interface PostWithUser {
	id: number;
	title: string;
	body: string;
	userId: number;
	user: User;
}

export interface StatePost {
	filter: string;
	allPosts: Array<PostWithUser>;
	posts: Array<PostWithUser>;
	detail: PostWithUser;
	commentsDetail: Array<Comment>;
	loading: boolean;
}

export type ActionPayloadPost = boolean | Array<Post> | Post | PostWithComments | PostWithUser | Array<Comment> | string;

export interface ActionPost {
	type: string;
	payload?: ActionPayloadPost;
}
