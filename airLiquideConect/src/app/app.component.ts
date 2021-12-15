import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly localStorage: LocalStorageService
  ) {
    this.usersService.getUsers().subscribe((usersArray) => {
      const currentUser = usersArray.find((user) => user.id === 1);
      this.localStorage.setCurrentUser(currentUser);
    });
    this.router.navigate(['/tabs']);
  }
}
