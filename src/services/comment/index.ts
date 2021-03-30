import { api } from "#services/api"
import { Comment } from '../../interfaces/comment';
import { ResponseListItem } from '../../interfaces/Service';

export async function getCommentsByPostId(postId: number): Promise<ResponseListItem<Comment>> {
    try {
        const response = await api.get(`/posts/${postId}/comments`);
        return {
            error: false,
            items: response.data
        }
    } catch (error) {
        return {
            error: true,
            errorMsg: error?.response.data || error.message,
            items: []
        }
    }
}

