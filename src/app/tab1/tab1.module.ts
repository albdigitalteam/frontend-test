import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPosts from './+state/post/posts.reducer';
import { PostsEffects } from './+state/post/posts.effects';
import { PostCardComponent } from './components/post-card/post-card.component';
import * as fromComments from './+state/comments/comments.reducer';
import { CommentsEffects } from './+state/comments/comments.effects';
import * as fromUsers from './+state/user/users.reducer';
import { UsersEffects } from './+state/user/users.effects';
import { FormModalComponent } from './components/form-modal/form-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
    StoreModule.forFeature(
      fromComments.COMMENTS_FEATURE_KEY,
      fromComments.reducer
    ),
    EffectsModule.forFeature([CommentsEffects]),
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  declarations: [Tab1Page, PostCardComponent, FormModalComponent],
})
export class Tab1PageModule {}
