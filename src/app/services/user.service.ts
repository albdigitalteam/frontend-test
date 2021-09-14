import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { getUserMock } from '../utils/userMock.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: IUser = null;

  constructor() { }

  public setCurrentUser() {
    this.currentUser = getUserMock();
  }

  public getCurrentUser() {
    return this.currentUser;
  }
}
