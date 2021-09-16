import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IComment } from 'src/app/models/comment.model';
import { IPost } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() public posts: (IPost & {
    comments: IComment[];
    username: string;
    enableComment: boolean;
  })[] = [];

  public disableComment = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  public openUserProfile(userId: string) {
    this.router.navigateByUrl(`/profile/${userId}`);
  }
}
