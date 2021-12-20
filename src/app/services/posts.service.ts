import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // TODO: tipar o retorno
  fetchPosts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/posts`);
  }
}
