import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  currentUser: IUser = this.loacalStorage.getCurrentUser();

  constructor(private readonly loacalStorage: LocalStorageService) {}

  ngOnInit() {
    console.log(this.currentUser);
  }
}
