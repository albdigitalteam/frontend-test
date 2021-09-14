import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserDataComponent } from 'src/app/pages/profile/components/user-data/user-data.component';

@NgModule({
  declarations: [
    UserDataComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    UserDataComponent
  ],
})
export class SharedModule { }
