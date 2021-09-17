import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { IToastData, ToastCreate } from 'src/app/utils/toastCreate.util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public user: IUser = null;

  private toastCreate = new ToastCreate();


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');

    if (!userId) {
      return this.getCurrentUser();
    }

    // o melhor nesse caso, seria ter uma rota para buscar apenas 1 usuário
    this.userService.fetchUsers().subscribe(users => {
      const user = users.find(el => el.id === Number(userId));

      if (!user) {
        return;
      }

      this.user = user;
    }, async error => {
      console.log(error);

      const toastData: IToastData = {
        message: error,
        color: 'danger',
      };

      await this.toastCreate.create(toastData);
    });
  }

  private getCurrentUser() {
    this.user = this.userService.getCurrentUser();
  }

}
