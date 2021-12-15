import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSkeletonComponent } from '../components/posts-skeleton/posts-skeleton.component';

@NgModule({
  declarations: [PostsSkeletonComponent],
  imports: [CommonModule],
  exports: [PostsSkeletonComponent],
})
export class SharedModule {}
