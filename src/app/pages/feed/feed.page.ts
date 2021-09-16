import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IComment } from 'src/app/models/comment.model';
import { IPost } from 'src/app/models/post.model';
import { IUser } from 'src/app/models/user.model';
import { CommentsService } from 'src/app/services/comments.service';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';
import { getRandomImgPost } from 'src/app/utils/postImgMock.util';
import { IToastData, ToastCreate } from 'src/app/utils/toastCreate.util';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {
  public posts: (IPost & {
    comments: IComment[];
    username: string;
    enableComment: boolean;
    imagePath: string;
  })[] = [];

  private toastCreate = new ToastCreate();

  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private userService: UserService
  ) { }

  ionViewDidEnter() {
    forkJoin({
      posts: this.postsService.fetchPosts(),
      comments: this.commentsService.fetchComments(),
      users: this.userService.fetchUsers()
    }).subscribe(result => {
      const { posts, comments, users } = result;

      this.posts = posts.map(post => this.adaptPosts(post, comments, users));
    }, async error => {
      console.log(error);

      const toastData: IToastData = {
        message: error,
        color: 'danger',
      };

      await this.toastCreate.create(toastData);
    });
  }

  private adaptPosts(post: IPost, comments: IComment[], users: IUser[]): IPost & {
    comments: IComment[];
    username: string;
    enableComment: boolean;
    imagePath: string;
  } {
    const postComments = comments.filter(comment => comment.postId === post.id);
    const username = users.find(user => user.id === post.userId).username;

    return {
      ...post,
      comments: postComments,
      username,
      enableComment: false,
      imagePath: getRandomImgPost()
    };
  }
}
