import { Injectable } from '@angular/core';
import { IComment } from '../models/comment.model';
import { UtilService } from './util.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient, private utilService: UtilService) { }

  public fetchComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${environment.apiBaseURL}/comments`)
      .pipe(
        catchError(this.utilService.handleError)
      );
  }
}
