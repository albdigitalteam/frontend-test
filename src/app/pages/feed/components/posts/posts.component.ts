import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IComment } from 'src/app/models/comment.model';
import { IPost } from 'src/app/models/post.model';
import { UserService } from 'src/app/services/user.service';
import { CreateForms } from 'src/app/utils/createForms.util';

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

  @Output() private newCommentEmitter: EventEmitter<IComment> = new EventEmitter<IComment>();

  public disableComment = false;
  public showErrors = false;
  public formNewComment = CreateForms.createFormNewComment();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {}

  public openUserProfile(userId: string) {
    this.router.navigateByUrl(`/profile/${userId}`);
  }

  public addComment(postId: number) {
    this.showErrors = true;

    if (this.formNewComment.invalid) {
      return;
    }

    const { name, email } = this.userService.getCurrentUser();
    const id = this.buildNewPostId(postId);

    const newComment: IComment = {
      email,
      name,
      postId,
      body: this.formNewComment.value.comment,
      id
    };

    this.newCommentEmitter.emit(newComment);

    this.showErrors = false;
    this.formNewComment.reset();
  }

  private buildNewPostId(postId: number): number {
    const post = this.posts.find(el => el.id === postId);

    return post.comments.length + 2;
  }
}
