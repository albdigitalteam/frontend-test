import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CommentsActions from './comments.actions';

import { map } from 'rxjs/operators';
import { PostsService } from 'src/app/services/posts.service';

@Injectable()
export class CommentsEffects {
  loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentsActions.loadComments),
      fetch({
        // eslint-disable-next-line arrow-body-style
        run: (action) => {
          return this.postService
            .fetchComments()
            .pipe(
              map((comments) =>
                CommentsActions.loadCommentsSuccess({ comments })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CommentsActions.loadCommentsFailure({ error });
        },
      })
    )
  );

  createComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentsActions.createComment),
      fetch({
        // eslint-disable-next-line arrow-body-style
        run: (action) => {
          // this.postService.addComment(action.comment).subscribe((res) => res);
          return this.postService
            .addComment(action.comment)
            .pipe(
              map((comment) =>
                CommentsActions.createCommentSuccess({ comment })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CommentsActions.loadCommentsFailure({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private postService: PostsService
  ) {}
}
