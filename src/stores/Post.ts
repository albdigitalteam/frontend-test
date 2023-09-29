import { types } from 'mobx-state-tree';

export const Post = types.model({
    userId: types.number,
    id: types.number,
    title: types.string,
    body: types.string,
    image: types.maybeNull(types.string),
});
