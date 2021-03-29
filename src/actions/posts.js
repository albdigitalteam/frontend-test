import * as CONSTANTS from '../actions/constants'
import {
    getPosts,
    getUser,
    getPostComments,
    deletePost,
    createPost,
    createPostComment
} from '../api'

/**
 * Initial fetch of posts, it also binds the comments to the posts
 * @returns Promise
 */
export function setStoreData() {
    return async function (dispatch) {
        const posts = await getPosts()
        const users = await Promise.all(posts.map(post => getUser(post)))
        const comments = await Promise.all(posts.map(async post => {
            return {
                [post.id]: await getPostComments(post)
            }
        }))
        dispatch(
            {
                type: CONSTANTS.POSTS_SET,
                data: {
                    posts: posts.map(post => {
                        return {
                            ...post,
                            comments: comments.reduce((prev, current) => {
                                return {
                                    ...prev,
                                    ...current
                                }
                            }, {})[post.id]
                        }
                    }),
                    users
                },
            }
        )
    }
}

/**
 * 
 * @param {object} payload The payload consists of { userId, title, body }
 * @returns 
 */
export function createStorePost(payload) {
    return async function (dispatch) {
        const post = await createPost(payload)
        const fakePost = { ...post, ...payload, comments: [] }
        dispatch(
            {
                type: CONSTANTS.POST_CREATE,
                data: fakePost
            }
        )
    }
}

/**
 * 
 * @param {*} payload The payload consists of { postId, name, email, body }
 * @returns 
 */
export function createStorePostComment(payload) {
    return async function (dispatch) {
        const comment = await createPostComment(payload)
        const fakeComment = { ...comment, ...payload }
        dispatch(
            {
                type: CONSTANTS.COMMENT_CREATE,
                data: fakeComment
            }
        )
    }
}

/**
 * 
 * @param {object} item The post for deletion
 * @returns 
 */
export function deleteStorePost(item) {
    return async function (dispatch) {
        dispatch(
            {
                type: CONSTANTS.POST_DELETE,
                postId: item.id
            }
        )
        deletePost(item)
    }
}
