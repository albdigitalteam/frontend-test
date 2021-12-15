import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IComment } from '../models/comment.model';
import { IPost } from '../models/post.model';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public postsSubject = new BehaviorSubject<IPost[]>(undefined);
  public commentsSubject = new BehaviorSubject<IComment[]>(undefined);
  public userSubject = new BehaviorSubject<IUser>(undefined);

  constructor() {}

  setPosts(posts: IPost[]) {
    this.postsSubject.next(posts);
  }

  getPosts(): IPost[] {
    return this.postsSubject.value;
  }

  setComments(comments: IComment[]) {
    this.commentsSubject.next(comments);
  }

  getComments(): IComment[] {
    return this.commentsSubject.value;
  }

  setCurrentUser(user: IUser) {
    this.userSubject.next(user);
  }

  getCurrentUser(): IUser {
    return this.userSubject.value;
  }

  clearSubjects(): void {
    this.postsSubject.next(null);
    this.commentsSubject.next(null);
    this.userSubject.next(null);
  }
}
