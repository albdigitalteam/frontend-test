import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ErrorContainerComponent } from 'src/app/components/error-container/error-container.component';
import { ErrorMessageComponent } from 'src/app/components/error-message/error-message.component';
import { NewPostComponent } from 'src/app/pages/feed/components/new-post/new-post.component';
import { PostsComponent } from 'src/app/pages/feed/components/posts/posts.component';
import { UserDataComponent } from 'src/app/pages/profile/components/user-data/user-data.component';

@NgModule({
  declarations: [
    UserDataComponent,
    PostsComponent,
    ErrorContainerComponent,
    ErrorMessageComponent,
    NewPostComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    LazyLoadImageModule,
  ],
  exports: [
    UserDataComponent,
    PostsComponent,
    ErrorContainerComponent,
    ErrorMessageComponent,
    NewPostComponent,
  ],
})
export class SharedModule { }
