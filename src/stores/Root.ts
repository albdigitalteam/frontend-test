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
        isCommentsLoading: false,
        isUsersLoading: false,
        isPostsLoading: false,
        isApplicationInitializing: true,
    })
    .actions((self) => ({
        setIsCommentsLoading(value: boolean) {
            self.isCommentsLoading = value;
        },
        setIsUsersLoading(value: boolean) {
            self.isUsersLoading = value;
        },
        setIsPostsLoading(value: boolean) {
            self.isPostsLoading = value;
        },
        setIsApplicationInitializing(value: boolean) {
            self.isApplicationInitializing = value;
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
        addUser(user: UserType) {
            self.users.push(user);
        },
        addPost(post: PostType) {
            self.posts.unshift(post);
        },
    }))
    .create({
        posts: [],
        users: [],
        comments: [],
        isCommentsLoading: false,
        isUsersLoading: false,
        isPostsLoading: false,
        isApplicationInitializing: true,
    });

const RootStoreContext = createContext<null | Instance<typeof initialInstance>>(
    null,
);
const StoreProvider = RootStoreContext.Provider;

export { initialInstance, StoreProvider, RootStoreContext };
