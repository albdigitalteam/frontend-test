import { PostsService } from './../services/posts.service';
import { State } from './+state/post/posts.reducer';
import { Component, OnInit } from '@angular/core';
import { Store, on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllPosts } from './+state/post/posts.selectors';
import * as PostsActions from './+state/post/posts.actions';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts$: Observable<any>;

  constructor(private store: Store<State>) {  }

  ngOnInit() {
    this.store.dispatch(PostsActions.init());
    this.posts$ = this.store.select(getAllPosts);
  }

}
