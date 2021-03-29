import * as CONSTANTS from '../actions/constants'

/**
 * 
 * @param {object} item The post object from store
 * that contains the necessary properties for deletion
 * @returns void
 */
export function deleteStorePostComment(item) {

    return async function (dispatch) {
        dispatch(
            {
                type: CONSTANTS.COMMENT_DELETE,
                postId: item.postId,
                commentId: item.id
            }
        )
    }

}