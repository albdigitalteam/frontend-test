import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
    StoreModule.forFeature(
      fromComments.COMMENTS_FEATURE_KEY,
      fromComments.reducer
    ),
    EffectsModule.forFeature([CommentsEffects]),
  ],
  declarations: [Tab1Page, PostCardComponent],
})
export class Tab1PageModule {}
