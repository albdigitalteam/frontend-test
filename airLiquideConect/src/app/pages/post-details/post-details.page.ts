import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/models/comment.model';
import { IPost } from 'src/app/models/post.model';
import { IToastData } from 'src/app/models/toast.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CreateToast } from 'src/app/utils/createToast.util';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  post: IPost;
  newCommentBody: string = null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly localStorageService: LocalStorageService,
    private readonly createToast: CreateToast
  ) {}

  ngOnInit() {
    this.loadPost();
  }

  private loadPost(): void {
    const currentPost: number =
      +this.activatedRoute.snapshot.paramMap.get('postId');

    const posts: IPost[] = this.localStorageService.getPosts();
    this.post = posts.find((post) => post.id === currentPost);
    console.log(this.post);
  }

  public saveComment(): void {
    if (this.newCommentBody === '') {
      const toastData: IToastData = {
        message: 'Ops... Acho que você esqueceu de digitar',
        color: 'danger',
      };
      this.createToast.create(toastData);
      return;
    }

    const currentUser = this.localStorageService.getCurrentUser();
    const commentsSubject = this.localStorageService.getComments();
    console.log(commentsSubject.length - 1);

    const newComment: IComment = {
      body: this.newCommentBody,
      postId: this.post.id,
      name: currentUser.name,
      email: currentUser.email,
      id: commentsSubject.length,
    };

    commentsSubject.push(newComment);
    this.localStorageService.setComments(commentsSubject);
    console.log(this.post);
  }
}
