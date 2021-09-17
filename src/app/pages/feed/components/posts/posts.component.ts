import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { IComment } from 'src/app/models/comment.model';
import { IPost } from 'src/app/models/post.model';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { CreateForms } from 'src/app/utils/createForms.util';
import { NewPostComponent } from '../new-post/new-post.component';

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
  @Output() private newPostEmitter: EventEmitter<IPost> = new EventEmitter<IPost>();

  public currentUser: IUser = null;

  public disableComment = false;
  public showErrors = false;
  public formNewComment = CreateForms.createFormNewComment();

  constructor(private router: Router, private userService: UserService, private modalController: ModalController) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
  }

  public openUserProfile(userId: string) {
    this.router.navigateByUrl(`/profile/${userId}`);
  }

  public addComment(postId: number) {
    this.showErrors = true;

    if (this.formNewComment.invalid) {
      return;
    }

    const { name, email } = this.currentUser;
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

  public async newPost() {
    const modal = await this.modalController.create({
      component: NewPostComponent,
      animated: true,
      swipeToClose: true,
      cssClass: 'newPostModal',
      componentProps: {
        newPostId: this.posts.length + 1
      }
    });

    await modal.present();

    const { data: newPost } = await modal.onDidDismiss<IPost>();

    if (!newPost) {
      return;
    }

    this.newPostEmitter.emit(newPost);
  }

  private buildNewPostId(postId: number): number {
    const post = this.posts.find(el => el.id === postId);

    return post.comments.length + 1;
  }
}
