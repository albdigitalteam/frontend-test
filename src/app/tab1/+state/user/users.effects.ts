import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as UsersActions from './users.actions';
import { PostsService } from 'src/app/services/posts.service';
import { map } from 'rxjs/operators';


@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      fetch({
        // eslint-disable-next-line arrow-body-style
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.postService
            .fetchUsers()
            .pipe(map((users) => UsersActions.loadUsersSuccess({ users })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UsersActions.loadUsersFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions, private postService: PostsService) {}
}
