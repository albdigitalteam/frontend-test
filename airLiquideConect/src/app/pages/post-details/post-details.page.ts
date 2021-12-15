import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from 'src/app/models/comment.model';
import { IPost } from 'src/app/models/post.model';
import { IToastData } from 'src/app/models/toast.model';
import { IUser } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CreateToast } from 'src/app/utils/createToast.util';
import { PostAdapter } from 'src/app/utils/post.adapter';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  currentUser: IUser = this.localStorageService.getCurrentUser();
  posts: IPost[];
  post: IPost;
  newCommentBody: string = null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly localStorageService: LocalStorageService,
    private readonly createToast: CreateToast,
    private readonly postAdapter: PostAdapter,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.loadPost();
  }

  private loadPost(): void {
    const currentPost: number =
      +this.activatedRoute.snapshot.paramMap.get('postId');

    // melhorar para atualizar com next do storage
    this.posts = this.localStorageService.getPosts();
    this.post = this.posts.find((post) => post.id === currentPost);
  }

  public saveComment(): void {
    if (!this.newCommentBody || this.newCommentBody === '') {
      const toastData: IToastData = {
        message: 'Ops... digite algo para comentar',
        color: 'danger',
      };
      this.createToast.create(toastData);
      return;
    }

    const commentsSubject = this.localStorageService.getComments();

    const newComment: IComment = {
      body: this.newCommentBody,
      postId: this.post.id,
      name: this.currentUser.name,
      email: this.currentUser.email,
      id: commentsSubject.length,
    };

    commentsSubject.push(newComment);
    this.localStorageService.setComments(commentsSubject);

    const updatedPosts = this.postAdapter.adaptPostNewComment(
      this.posts,
      commentsSubject
    );
    this.localStorageService.setPosts(updatedPosts);

    this.loadPost();
  }

  public deletePost(): void {
    if (this.post.userId !== this.currentUser.id) {
      const toastData: IToastData = {
        message: 'Atenção: Você não pode apagar posts de outras pessoas!',
        color: 'danger',
      };
      this.createToast.create(toastData);
      return;
    }

    this.posts.splice(this.post.id - 1, 1);
    this.localStorageService.setPosts(this.posts);

    const toastData: IToastData = {
      message: 'Post excluido com sucesso!',
      color: 'success',
    };
    this.createToast.create(toastData);

    this.goToHome();
  }

  public goToHome(): void {
    this.router.navigateByUrl(`home`);
  }
}
