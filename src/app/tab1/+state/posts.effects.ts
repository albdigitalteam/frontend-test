import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as PostsActions from './posts.actions';
import * as PostsFeature from './posts.reducer';

import { catchError, map, switchMap } from 'rxjs/operators';
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

  constructor(private readonly actions$: Actions, private postService: PostsService) {}
}
