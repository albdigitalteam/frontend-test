import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { UtilService } from './util.service';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private utilService: UtilService) { }

  public fetchPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.apiBaseURL}posts`)
      .pipe(
        catchError(this.utilService.handleError)
      );
  }
}
