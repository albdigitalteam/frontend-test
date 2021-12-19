import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as PostsActions from './posts.actions';
import * as PostsFeature from './posts.reducer';

import { catchError, switchMap } from 'rxjs/operators';


@Injectable()
export class PostsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.init),
      fetch({
        // eslint-disable-next-line arrow-body-style
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return PostsActions.loadPostsSuccess({ posts: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return PostsActions.loadPostsFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
