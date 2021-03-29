import * as API_CONSTANTS from './constants'

/**
 * 
 * @param {object} Object in raw format
 * @param {number} Object.id the post id
 * @returns {object} the parsed JSON response
 */
export async function getPostComments({ id }) {
    return await fetch(
        `${API_CONSTANTS.endpoint}/posts/${id}/comments`,
        {
            ...API_CONSTANTS.method.get,
            headers: API_CONSTANTS.headers
        }
    ).then(
        response => response.json()
    ).catch(
        error => new Error(error)
    )
}

/**
 * 
 * @param {object} Object in raw format
 * @param {number} Object.postId the post id
 * @param {object} Object.payload the payload
 * @returns {object} the parsed JSON response
 */
export async function createPostComment({ postId, payload }) {
    return await fetch(
        `${API_CONSTANTS.endpoint}/posts/${postId}/comments`,
        {
            ...API_CONSTANTS.method.post,
            headers: API_CONSTANTS.headers,
            body: JSON.stringify(payload)
        }
    ).then(
        response => response.json()
    ).catch(
        error => new Error(error)
    )
}
