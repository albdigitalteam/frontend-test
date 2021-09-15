import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IComment } from '../models/comment.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient, private utilService: UtilService) { }

  public fetchComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${environment.apiBaseURL}comments`)
      .pipe(
        catchError(this.utilService.handleError)
      );
  }
}
