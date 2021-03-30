import { api } from '#services/api';
import { Post, PostWithComments } from '../../interfaces/post';
import { ResponseItem, ResponseListItem } from '../../interfaces/Service';
import { getCommentsByPostId } from '../comment';

export async function getPosts(): Promise<ResponseListItem<Post>> {
	try {
		const response = await api.get<Array<Post>>('/posts');
		return {
			error: false,
			items: response.data,
		};
	} catch (error) {
		return {
			error: true,
			errorMsg: error?.response.data || error.message,
			items: [],
		};
	}
}

export async function getPostWithComments(postId: number): Promise<ResponseItem<PostWithComments>> {
	try {
		const response = await api.get<Post>(`/posts/${postId}`);
		const responseComments = await getCommentsByPostId(postId);
		const post: ResponseItem<PostWithComments> = {
			error: false,
			item: {
				...response.data,
				comments: [],
			},
		};
		if (responseComments.error) {
			post.error = true;
			post.errorMsg = 'Não foi possível buscar os comentários';
		} else {
			post.item.comments = responseComments.items;
		}

		return post;
	} catch (error) {
		return {
			error: true,
			errorMsg: error?.response.data || error.message,
			item: {} as PostWithComments,
		};
	}
}
