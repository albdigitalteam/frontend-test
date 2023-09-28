import { types, Instance, cast, flow } from 'mobx-state-tree';
import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';
import { createContext } from 'react';
import { CommentType, PostType, UserType } from '../types';
import axios from 'axios';

const DEFAULT_APP_USER = {
    name: 'test_front_end',
    email: 'test_front_end@april.biz',
    username: 'test_front_end',
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
            const concatUsers = [...self.users, ...users];
            self.users = cast(concatUsers);
        },
        setComments(comments: CommentType[]) {
            self.comments = cast(comments);
        },
        addUser(user: UserType) {
            self.users.push(user);
        },
        addComment(comment: CommentType) {
            self.comments.push(comment);
        },
        addPost(post: PostType) {
            // Mock id because the post API return always the same id after the post
            post.id = self.posts.length + 1;
            self.posts.unshift(post);
        },
        deleteComment(commentId: number) {
            self.comments = cast([
                ...self.comments.filter((comment) => comment.id !== commentId),
            ]);
        },
        deletePost(postId: number) {
            self.posts = cast([
                ...self.posts.filter((post) => post.id !== postId),
            ]);
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
            self.users.push(userData);
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
