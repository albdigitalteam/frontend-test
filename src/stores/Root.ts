import { types } from 'mobx-state-tree';
import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';

export const RootStore = types
    .model({
        posts: types.optional(types.map(Post), {}),
        users: types.optional(types.map(User), {}),
        comments: types.optional(types.map(Comment), {}),
    })
    .actions((self) => ({}));
