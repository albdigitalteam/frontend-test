import { Component, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/comment.model';
import { IPost } from 'src/app/models/post.model';
import { IUser } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  currentUser: IUser = this.loacalStorage.getCurrentUser();
  posts: IPost[] = this.loacalStorage.getPosts();

  userImg = 'assets/systemImages/user.png';

  userTopic = false;
  addressTopic = false;
  companyTopic = false;
  geoTopic = false;

  constructor(private readonly loacalStorage: LocalStorageService) {}

  ngOnInit() {
    this.getUserPosts();
  }

  public getUserPosts(): void {
    const postsCount: IPost[] = this.posts.filter(
      (post) => post.userId === this.currentUser.id
    );

    this.currentUser = { ...this.currentUser, postsCount: postsCount.length };
    this.loacalStorage.setCurrentUser(this.currentUser);
  }

  public toggleSection(topic) {
    this[topic] = !this[topic];
  }
}
