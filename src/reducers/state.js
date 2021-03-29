import * as CONSTANTS from '../actions/constants'
import update from 'immutability-helper'

export const state = (
    storeState = {
        posts: [],
        users: []
    },
    action
) => {
    const { type, data } = action
    switch (type) {
        case CONSTANTS.POSTS_SET:
            return data
        case CONSTANTS.POST_DELETE:
            const { postId } = action
            return {
                ...storeState,
                posts: storeState.posts.filter(post => post.id !== postId)
            }
        case CONSTANTS.COMMENT_DELETE: {

            const { postId, commentId } = action

            const post = storeState.posts.find(
                post => post.id === postId
            )

            const comments = post.comments.filter(
                comment => comment.id !== commentId
            )

            return {
                ...storeState,
                posts: [
                    ...storeState.posts,
                    {
                        ...post,
                        comments
                    }
                ]
            }
        }
        case CONSTANTS.POST_CREATE:
            return {
                ...storeState,
                posts: [data, ...storeState.posts]
            }
        case CONSTANTS.COMMENT_CREATE:
            const post = storeState.posts.find(
                post => post.id === data.postId
            )
            return {
                ...storeState,
                posts: [
                    {
                        ...post,
                        comments: [data, ...post.comments]
                    },
                    ...storeState.posts.filter(
                        post => post.id !== data.postId
                    )
                ]
            }
        default:
            return storeState
    }
}

export default state
