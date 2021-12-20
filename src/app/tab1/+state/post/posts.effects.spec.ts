import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as PostsActions from './posts.actions';
import { PostsEffects } from './posts.effects';

describe('PostsEffects', () => {
  let actions: Observable<Action>;
  let effects: PostsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        PostsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PostsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PostsActions.init() });

      const expected = hot('-a-|', {
        a: PostsActions.loadPostsSuccess({ posts: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
