import { types, Instance, cast } from 'mobx-state-tree';
import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';
import { createContext } from 'react';
import { CommentType, PostType, UserType } from '../types';

const initialInstance = types
    .model({
        posts: types.optional(types.array(Post), []),
        users: types.optional(types.array(User), []),
        comments: types.optional(types.array(Comment), []),
        isLoadingInitial: false,
    })
    .actions((self) => ({
        setIsLoadingInitial(value: boolean) {
            self.isLoadingInitial = value;
        },
        setPosts(posts: PostType[]) {
            self.posts = cast(posts);
        },
        setUsers(users: UserType[]) {
            self.users = cast(users);
        },
        setComments(comments: CommentType[]) {
            self.comments = cast(comments);
        },
    }))
    .create();

const RootStoreContext = createContext<null | Instance<typeof initialInstance>>(
    null,
);
const StoreProvider = RootStoreContext.Provider;

export { initialInstance, StoreProvider, RootStoreContext };
