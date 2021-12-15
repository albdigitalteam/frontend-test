import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IComment } from 'src/app/models/comment.model';
import { IPost } from 'src/app/models/post.model';
import { IUser } from 'src/app/models/user.model';
import { CommentsService } from 'src/app/services/comments.service';
import { ImagesService } from 'src/app/services/images.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
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
    private readonly postAdapter: PostAdapter
  ) {}

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.isLoading = true;

    this.postsService.getPosts().subscribe((postsArray: IPost[]) => {
      const imagesArray = this.imagesService.getImages();
      this.usersService.getUsers().subscribe((usersArray: IUser[]) => {
        this.commentsService
          .getComments()
          .subscribe((commentsArray: IComment[]) => {
            this.posts = this.postAdapter.adaptInitialPost(
              postsArray,
              usersArray,
              commentsArray,
              imagesArray
            );
            console.log(this.posts);
            this.localStorage.setPosts(this.posts);
            this.localStorage.setComments(commentsArray);
            this.isLoading = false;
          });
      });
    });
  }

  public goToPostDetails(postId: number): void {
    this.router.navigateByUrl(`tabs/post-details/${postId}`);
  }
}
