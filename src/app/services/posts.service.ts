import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CommentsEntity,
  PostsEntity,
} from '../tab1/+state/post/posts.models';
import { UsersEntity } from '../tab1/+state/user/users.models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  fetchPosts(): Observable<PostsEntity[]> {
    return this.http.get<PostsEntity[]>(`${this.baseUrl}/posts`);
  }

  fetchComments(): Observable<CommentsEntity[]> {
    return this.http.get<CommentsEntity[]>(`${this.baseUrl}/comments`);
  }

  fetchUsers(): Observable<UsersEntity[]> {
    return this.http.get<UsersEntity[]>(`${this.baseUrl}/users`);
  }
}
