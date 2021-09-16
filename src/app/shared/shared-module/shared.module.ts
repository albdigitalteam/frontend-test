import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostsComponent } from 'src/app/components/posts/posts.component';
import { UserDataComponent } from 'src/app/pages/profile/components/user-data/user-data.component';

@NgModule({
  declarations: [
    UserDataComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    UserDataComponent,
    PostsComponent
  ],
})
export class SharedModule { }
