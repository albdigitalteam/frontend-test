import { types } from 'mobx-state-tree';

export const Comment = types.model({
    postId: types.number,
    id: types.number,
    name: types.string,
    email: types.string,
    body: types.string,
});
