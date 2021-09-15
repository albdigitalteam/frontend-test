import { Injectable } from '@angular/core';
import { ICommnent } from '../models/comment.model';
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

  public fetchComments(): Observable<ICommnent[]> {
    return this.http.get<ICommnent[]>(`${environment.apiBaseURL}/comments`)
      .pipe(
        catchError(this.utilService.handleError)
      );
  }
}
