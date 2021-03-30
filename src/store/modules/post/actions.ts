import { POSTS_TYPES } from './types';
import { PostWithUser } from '#interfaces/Post';
import { Comment } from '#interfaces/Comment';

export function fetchingPosts() {
	return {
		type: POSTS_TYPES.FETCHING_POSTS,
	};
}

export function filterPosts(filter: string) {
	return {
		type: POSTS_TYPES.FILTER_POSTS,
		payload: filter,
	};
}

export function fetchedPosts(posts: Array<PostWithUser>) {
	return {
		type: POSTS_TYPES.FETCHED_POSTS,
		payload: posts,
	};
}

export function fetchedPostsError(message: string) {
	return {
		type: POSTS_TYPES.FETCHED_POSTS_ERRROR,
		payload: message,
	};
}

export function fetchingPostComments(postId: number) {
	return {
		type: POSTS_TYPES.FETCHING_COMMENTS_BY_POST,
		postId,
	};
}

export function fetchedPostComments(comments: Array<Comment>) {
	return {
		type: POSTS_TYPES.FETCHED_COMMENTS_BY_POST,
		payload: comments,
	};
}

export function fetchedPostCommentsError(message: string) {
	return {
		type: POSTS_TYPES.FETCHED_COMMENTS_BY_POST_ERROR,
		payload: message,
	};
}

export function clearComments() {
	return {
		type: POSTS_TYPES.CLEAR_COMMENTS,
	};
}
