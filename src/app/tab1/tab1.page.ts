/* eslint-disable arrow-body-style */
import { State } from './+state/post/posts.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { getAllPosts } from './+state/post/posts.selectors';
import * as PostsActions from './+state/post/posts.actions';
import * as CommentsActions from './+state/comments/comments.actions';
import { getAllComments } from './+state/comments/comments.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  posts$: Observable<any>;
  comments$: Observable<any>;
  combinedPosts$: Observable<any>;
  combinedPosts: any;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(PostsActions.init());
    this.posts$ = this.store.select(getAllPosts);

    this.store.dispatch(CommentsActions.loadComments());
    this.comments$ = this.store.select(getAllComments);
    // this.comments$.subscribe((comments) => {
    //   console.log('aqui', comments);
    // });

    // combineLatest([this.posts$, this.comments$]).subscribe(
    //   ([posts, comments]) => {
    //     this.combinedPosts = posts.map((post) => {
    //       const filtedComments = comments.filter(
    //         (comment) => comment.postId === post.id
    //       );
    //       return {
    //         ...post,
    //         filtedComments,
    //       };
    //     });
    //     console.log('Aqui', this.combinedPosts);
    //   }
    //   );
  }
}
