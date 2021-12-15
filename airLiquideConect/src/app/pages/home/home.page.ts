import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { IPost } from 'src/app/models/post.model';
import { IPostImages } from 'src/app/models/postImages.model';
import { IUser } from 'src/app/models/user.model';
import { CommentsService } from 'src/app/services/comments.service';
import { ImagesService } from 'src/app/services/images.service';
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
    private readonly imagesService: ImagesService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.isLoading = true;

    this.postsService.getPosts().subscribe((postsArray: IPost[]) => {
      const imagesArray = this.imagesService.getImages();
      this.usersService.getUsers().subscribe((usersArray: IUser[]) => {
        this.posts = this.postAdapter(postsArray, usersArray, imagesArray);
        console.log(this.posts);
      });
    });
  }

  public openPostDetails(postId: number): void {
    this.router.navigateByUrl(`post-details/${postId}`);
  }

  private postAdapter(
    posts: IPost[],
    users: IUser[],
    images: string[]
  ): IPost[] {
    return posts.map((post: IPost) => {
      const postAuthor = users.find((user) => user.id === post.userId);
      const author = postAuthor.username;
      const image = this.setPostImages(images);

      return { ...post, author, image };
    });
  }

  private readonly setPostImages = (imagesArray: string[]): string => {
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];
  };
}
