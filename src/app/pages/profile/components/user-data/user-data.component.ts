import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {
  @Input() public user: IUser = null;

  constructor() { }

  ngOnInit() {}

}
