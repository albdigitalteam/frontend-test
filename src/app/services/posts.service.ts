import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsEntity } from '../tab1/+state/post/posts.models';
import { UsersEntity } from '../tab1/+state/user/users.models';
import { CommentsEntity } from '../tab1/+state/comments/comments.models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private options: any = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-type': 'application/json; charset=UTF-8',
    }),
  };

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

  addData(data: any) {
    return this.http.post<PostsEntity[]>(
      `${this.baseUrl}/posts`,
      JSON.stringify(data),
      this.options
    );
  }

  addComment(data: any) {
    return this.http.post<PostsEntity[]>(
      `${this.baseUrl}/comments`,
      JSON.stringify(data),
      this.options
    );
  }

  updateData(data: any) {
    return this.http.put<PostsEntity[]>(
      `${this.baseUrl}/posts`,
      JSON.stringify(data),
      this.options
    );
  }

  deleteData(id: string | number) {
   return this.http.delete<PostsEntity[]>(`${this.baseUrl}/posts/${id}`);
  }
}
