import { types, Instance, cast, flow } from 'mobx-state-tree';
import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';
import { createContext } from 'react';
import { CommentType, PostType, UserType } from '../types';
import axios from 'axios';

const DEFAULT_APP_USER = {
    name: 'TEST_FRONT_END',
    email: 'TEST_FRONT_END@april.biz',
    username: 'TEST_FRONT_END',
};

const initialInstance = types
    .model({
        user: types.maybeNull(User),
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
        setUser(user: UserType) {
            self.user = user;
        },
    }))
    .actions((self) => ({
        // Set a default user for our system, to create and delete posts from the API id
        afterCreate: flow(function* afterCreate() {
            const userData = yield axios
                .post('/users', DEFAULT_APP_USER)
                .then((response) => response.data);

            self.setUser(userData);
        }),
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
