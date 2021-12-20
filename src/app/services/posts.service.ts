import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CommentsEntity,
  PostsEntity,
  UserEntity,
} from '../tab1/+state/post/posts.models';

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

  fetchUsers(): Observable<UserEntity[]> {
    return this.http.get<UserEntity[]>(`${this.baseUrl}/users`);
  }
}
