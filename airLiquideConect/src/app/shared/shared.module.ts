import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsSkeletonComponent } from '../components/posts-skeleton/posts-skeleton.component';
import { ErrorContainerComponent } from '../components/error-container/error-container.component';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';

@NgModule({
  declarations: [
    PostsSkeletonComponent,
    ErrorContainerComponent,
    ErrorMessageComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    PostsSkeletonComponent,
    ErrorContainerComponent,
    ErrorMessageComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
