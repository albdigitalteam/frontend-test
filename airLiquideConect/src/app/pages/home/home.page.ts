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
    private readonly localStorage: LocalStorageService
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
            this.posts = this.postAdapter(
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

  public openPostDetails(postId: number): void {
    this.router.navigateByUrl(`post-details/${postId}`);
  }

  private postAdapter(
    posts: IPost[],
    users: IUser[],
    comments: IComment[],
    images: string[]
  ): IPost[] {
    return posts.map((post: IPost) => {
      const postAuthor = users.find((user) => user.id === post.userId);
      const author = postAuthor.username;
      const postComments = comments.filter(
        (comment) => comment.postId === post.id
      );
      const lastComment = postComments[postComments.length - 1];
      const image = this.setPostImages(images);

      return { ...post, author, comments: postComments, lastComment, image };
    });
  }

  private readonly setPostImages = (imagesArray: string[]): string => {
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];
  };
}
