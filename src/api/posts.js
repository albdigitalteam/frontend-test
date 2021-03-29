import * as CONSTANTS from './constants'

/**
 * 
 * @returns {object} the parsed JSON response
 */
export async function getPosts() {
    return await fetch(
        `${CONSTANTS.endpoint}/posts`,
        {
            ...CONSTANTS.method.get,
            headers: CONSTANTS.headers,
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
 * @param {number} Object.userId the user id
 * @returns {object} the parsed JSON response
 */
export async function getUserPosts({ userId }) {
    return await fetch(
        `${CONSTANTS.endpoint}/users/${userId}/posts`,
        {
            ...CONSTANTS.method.get,
            headers: CONSTANTS.headers,
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
 * @param {number} Object.payload the user payload { userId, title, body }
 * @returns {object} the parsed JSON response
 */
export async function createPost({ payload }) {
    return await fetch(
        `${CONSTANTS.endpoint}/posts`,
        {
            ...CONSTANTS.method.post,
            headers: CONSTANTS.headers,
            body: JSON.stringify(payload),
        },
    ).then(
        response => response.json()
    ).catch(
        error => new Error(error)
    )
}

/**
 * 
 * @param {object} Object in raw format
 * @param {number} Object.id the post id to be delete from store
 * @returns {object} the parsed JSON response
 */
export async function deletePost({id}) {
    return await fetch(
        `${CONSTANTS.endpoint}/posts/${id}`,
        {
            ...CONSTANTS.method.delete,
            headers: CONSTANTS.headers,
        }
    ).then(
        response => response.json()
    ).catch(
        error => new Error(error)
 
        )
}