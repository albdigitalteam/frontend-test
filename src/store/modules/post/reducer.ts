import produce from 'immer';

import { POSTS_TYPES } from './types';
import { ActionPost, StatePost, PostWithUser } from '#interfaces/Post';
import { Comment } from '#interfaces/Comment';

const INITIAL_STATE: StatePost = {
	filter: '',
	allPosts: [],
	posts: [],
	loading: false,
	detail: {} as PostWithUser,
	commentsDetail: [],
};

export default function post(state = INITIAL_STATE, action: ActionPost) {
	return produce(state, (draft) => {
		switch (action.type) {
			case POSTS_TYPES.FETCHING_POSTS:
				draft.loading = true;
				break;

			case POSTS_TYPES.FETCHED_POSTS:
				draft.allPosts = action.payload as Array<PostWithUser>;
				draft.posts = action.payload as Array<PostWithUser>;
				draft.loading = false;
				break;

			case POSTS_TYPES.FILTER_POSTS:
				draft.filter = action.payload as string;
				draft.posts = draft.allPosts.filter(
					(post) =>
						post.title.toLowerCase().includes((action.payload as string).toLowerCase()) ||
						post.body.toLowerCase().includes((action.payload as string).toLowerCase())
				);
				draft.loading = false;
				break;

			case POSTS_TYPES.FETCHING_COMMENTS_BY_POST:
				draft.loading = true;
				break;

			case POSTS_TYPES.FETCHED_COMMENTS_BY_POST:
				draft.commentsDetail = action.payload as Array<Comment>;
				draft.loading = false;
				break;

			case POSTS_TYPES.CLEAR_COMMENTS:
				draft.commentsDetail = [] as Array<Comment>;
				draft.loading = false;
				break;

			default:
		}
	});
}
