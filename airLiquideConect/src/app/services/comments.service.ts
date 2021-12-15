import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(
      environment.functionsBaseUrl + '/comments'
    );
  }
}
