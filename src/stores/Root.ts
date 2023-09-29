import { types, Instance, cast } from 'mobx-state-tree';
import { Post } from './Post';
import { User } from './User';
import { Comment } from './Comment';
import { createContext } from 'react';
import { CommentType, PostType, UserType } from '../types';

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
    })
    .actions((self) => ({
        setPosts(posts: PostType[]) {
            self.posts = cast(posts);
        },
        setUsers(users: UserType[]) {
            const user = { id: users.length + 1, ...DEFAULT_APP_USER };

            self.user = cast(user);
            const concatUsers = [...users, user];
            self.users = cast(concatUsers);
        },
        setComments(comments: CommentType[]) {
            self.comments = cast(comments);
        },
        addUser(user: UserType) {
            self.users.push(user);
        },
        addComment(comment: CommentType) {
            // Mock id because the post API return always the same id after the post
            comment.id = self.comments.length + 1;
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
        setUser(user: UserType) {
            self.user = user;
        },
    }))
    .actions((self) => ({
        deletePost(postId: number) {
            self.posts = cast([
                ...self.posts.filter((post) => post.id !== postId),
            ]);

            // Delete post comments because the API do not remove it so we need to handle here
            self.comments
                .filter((comment) => comment.postId === postId)
                .forEach((cmt) => self.deleteComment(cmt.id));
        },
    }))
    .create({
        posts: [],
        users: [],
        comments: [],
    });

const RootStoreContext = createContext<null | Instance<typeof initialInstance>>(
    null,
);
const StoreProvider = RootStoreContext.Provider;

export { initialInstance, StoreProvider, RootStoreContext };
