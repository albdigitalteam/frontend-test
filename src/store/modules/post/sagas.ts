import { showMessage } from 'react-native-flash-message';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { getPosts } from '#services/post';
import { getUsers } from '#services/user';
import { getCommentsByPostId } from '#services/comment';
import { ResponseListItem } from '#interfaces/Service';
import { Post, PostWithUser } from '#interfaces/Post';
import { User } from '#interfaces/User';

import { fetchedPosts, fetchedPostsError, fetchedPostComments, fetchedPostCommentsError } from './actions';
import { POSTS_TYPES } from './types';
import { Action } from 'redux';
import { Comment } from '#interfaces/Comment';

export function* fetchPosts() {
	const responseUser: ResponseListItem<User> = yield call(getUsers);
	const response: ResponseListItem<Post> = yield call(getPosts);
	if (!response.error && !responseUser.error) {
		const postsWithUser = response.items.reduce((acc, current) => {
			const user = responseUser.items.find((u) => u.id === current.userId) || ({} as User);
			return [...acc, { ...current, user }];
		}, [] as Array<PostWithUser>);

		yield put(fetchedPosts(postsWithUser));
	} else {
		showMessage({
			type: 'danger',
			message: 'Não foi possível buscar os posts, verifique sua conexão',
			icon: 'auto',
		});
		yield put(fetchedPostsError('Não foi possível buscar os posts'));
	}
}

export function* fetchPostComments(postId: number) {
	const response: ResponseListItem<Comment> = yield call(getCommentsByPostId, postId);
	if (!response.error) {
		yield put(fetchedPostComments(response.items));
	} else {
		showMessage({
			type: 'danger',
			message: 'Não foi possível buscar os comentários do post',
			icon: 'auto',
		});
		yield put(fetchedPostCommentsError('NNão foi possível buscar os comentários do post'));
	}
}

export default all([
	takeLatest(POSTS_TYPES.FETCHING_POSTS, fetchPosts),
	takeLatest(POSTS_TYPES.FETCHING_COMMENTS_BY_POST, (action: Action & { postId: number }) =>
		fetchPostComments(action.postId)
	),
]);
