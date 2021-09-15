import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IUser } from '../models/user.model';
import { getUserMock } from '../utils/userMock.util';
import { UtilService } from './util.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: IUser = null;

  constructor(private http: HttpClient, private utilService: UtilService) { }

  public setCurrentUser() {
    this.currentUser = getUserMock();
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public fetchUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.apiBaseURL}/users`)
      .pipe(
        catchError(this.utilService.handleError)
      );
  }
}
