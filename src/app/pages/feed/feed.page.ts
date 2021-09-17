import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { forkJoin } from 'rxjs';

import { IComment } from 'src/app/models/comment.model';
import { IRandomImage } from 'src/app/models/images.model';
import { IPost } from 'src/app/models/post.model';
import { IUser } from 'src/app/models/user.model';
import { CommentsService } from 'src/app/services/comments.service';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';
import { IToastData, ToastCreate } from 'src/app/utils/toastCreate.util';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public posts: (IPost & {
    comments: IComment[];
    username: string;
    enableComment: boolean;
    imagePath: string;
  })[] = [];

  public loading = false;

  private toastCreate = new ToastCreate();

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private utilService: UtilService,
  ) { }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');

    this.loading = true;

    forkJoin({
      posts: this.postsService.fetchPosts(),
      comments: this.commentsService.fetchComments(),
      users: this.userService.fetchUsers(),
      images: this.utilService.getRandomImages(),
    }).subscribe(result => {
      this.loading = false;
      const { posts, comments, users, images } = result;

      this.posts = posts.map(post => this.adaptPosts(post, comments, users, images));

      if (userId) {
        this.posts = this.posts.filter(el => el.userId === Number(userId));
      }
    }, async error => {
      this.loading = false;
      console.log(error);

      const toastData: IToastData = {
        message: error,
        color: 'danger',
      };

      await this.toastCreate.create(toastData);
    });
  }

  public addComment(newComment: IComment) {
    this.posts = this.posts.map(post => {
      if (post.id === newComment.postId) {
        const newComments = [
          ...post.comments,
          newComment
        ];

        return {
          ...post,
          comments: newComments,
        };
      }

      return {
        ...post
      };
    });
  }

  public addPost(newPost: IPost) {
    const username = this.userService.getCurrentUser().username;

    this.posts.unshift({
      ...newPost,
      comments: [],
      enableComment: false,
      username,
    });
  }

  private adaptPosts(post: IPost, comments: IComment[], users: IUser[], images: IRandomImage[]): IPost & {
    comments: IComment[];
    username: string;
    enableComment: boolean;
    imagePath: string;
  } {
    const postComments = comments.filter(comment => comment.postId === post.id);
    const username = users.find(user => user.id === post.userId).username;
    const { download_url: imageUrl } = images[this.utilService.getRandomIndex()];

    return {
      ...post,
      comments: postComments,
      username,
      enableComment: false,
      imagePath: post.imagePath || imageUrl
    };
  }
}
