import { PostsEntity } from './../../+state/post/posts.models';
import { CombinedPosts } from './../../+state/combinedPosts.models';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() combinedPost: CombinedPosts | undefined;
  @Output() deletePost = new EventEmitter<PostsEntity>();
  @Output() openFormModal = new EventEmitter<string | number>();

  constructor() {}

  ngOnInit() {}

  addComment(id: string | number): void {
    this.openFormModal.emit(id);
  }

  deleteData(): void {
    const payload = {
      id:this.combinedPost.id,
      userId:this.combinedPost.userId,
      title:this.combinedPost.title,
      body:this.combinedPost.body,
    };
    this.deletePost.emit(payload);
  }
}
