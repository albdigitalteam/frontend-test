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

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  declarations: [Tab1Page, PostCardComponent],
})
export class Tab1PageModule {}
