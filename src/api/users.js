import * as API_CONSTANTS from './constants'

/**
 * 
 * @param {object} Object in raw format
 * @param {number} Object.userId the user id to fetch
 * @returns {object} the parsed JSON response
 */
export async function getUser({ userId }) {
    return await fetch(
        `${API_CONSTANTS.endpoint}/users/${userId}`,
        API_CONSTANTS.headers
    ).then(
        response => response.json()
    ).catch(
        error => new Error(error)
    )
}
