import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IPost } from 'src/app/models/post.model';
import { IToastData } from 'src/app/models/toast.model';
import { IUser } from 'src/app/models/user.model';
import { CommentsService } from 'src/app/services/comments.service';
import { ImagesService } from 'src/app/services/images.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { CreateToast } from 'src/app/utils/createToast.util';
import { PostAdapter } from 'src/app/utils/post.adapter';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: IPost[] = null;
  isLoading = true;

  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
    private readonly commentsService: CommentsService,
    private readonly imagesService: ImagesService,
    private readonly router: Router,
    private readonly localStorage: LocalStorageService,
    private readonly postAdapter: PostAdapter,
    private readonly createToast: CreateToast
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.loadData();
  }

  public loadData() {
    this.isLoading = true;

    if (this.posts) {
      this.posts = this.localStorage.getPosts();
      this.isLoading = false;
      return;
    }

    forkJoin({
      postsArray: this.postsService.getPosts(),
      usersArray: this.usersService.getUsers(),
      commentsArray: this.commentsService.getComments(),
      imagesArray: this.imagesService.getImages(),
    }).subscribe(
      (data) => {
        this.isLoading = false;
        const { postsArray, usersArray, commentsArray, imagesArray } = data;

        this.posts = this.postAdapter.adaptInitialPost(
          postsArray,
          usersArray,
          commentsArray,
          imagesArray
        );
        this.localStorage.setPosts(this.posts);
        this.localStorage.setComments(commentsArray);
        this.isLoading = false;
      },
      async (error) => {
        this.isLoading = false;

        const toastData: IToastData = {
          message: error,
          color: 'danger',
        };

        await this.createToast.create(toastData);
      }
    );
  }

  public toggleTitle(postId: number): void {
    const postTitleIndex = this.posts.findIndex((post) => post.id === postId);

    this.posts[postTitleIndex]['showTitle'] =
      !this.posts[postTitleIndex]['showTitle'];
  }

  public toggleBoddy(postId: number): void {
    const postBodyIndex = this.posts.findIndex((post) => post.id === postId);

    this.posts[postBodyIndex]['showContent'] =
      !this.posts[postBodyIndex]['showContent'];
  }

  public goToPostDetails(postId: number): void {
    this.router.navigateByUrl(`tabs/post-details/${postId}`);
  }
}
