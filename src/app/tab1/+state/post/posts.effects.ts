import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as PostsActions from './posts.actions';

import { map } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';

@Injectable()
export class PostsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.init),
      fetch({
        // eslint-disable-next-line arrow-body-style
        run: (action) => {
          return this.postService
            .fetchPosts()
            .pipe(map((posts) => PostsActions.loadPostsSuccess({ posts })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return PostsActions.loadPostsFailure({ error });
        },
      })
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.deletePost),
      fetch({
        // eslint-disable-next-line arrow-body-style
        run: (action) => {
          return this.postService
            .deleteData(action.post.id)
            .pipe(map((post) => PostsActions.deletePostSuccess({ post: action.post})));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return PostsActions.deletePostFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions, private postService: PostsService) {}
}
