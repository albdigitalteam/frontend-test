import { StatePost } from './Post';
import { StateUser } from './User';

export interface AppState {
    post: StatePost;
    user: StateUser;
}