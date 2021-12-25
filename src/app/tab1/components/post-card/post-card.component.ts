import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CombinedPosts } from '../../+state/combinedPosts.models';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() combinedPost: CombinedPosts | undefined;
  @Output() deletePost = new EventEmitter<string | number>();
  @Output() openFormModal = new EventEmitter<string | number>();

  constructor() {}

  ngOnInit() {}

  addComment(id: string | number): void {
    this.openFormModal.emit(id);
  }

  deleteData(id: string | number): void {
    this.deletePost.emit(id);
  }
}
