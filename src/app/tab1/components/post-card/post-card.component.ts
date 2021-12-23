import { Component, OnInit, Input } from '@angular/core';
import { CombinedPosts } from '../../+state/combinedPosts.models';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() combinedPost: CombinedPosts | undefined;

  constructor() {}

  ngOnInit() {}
}
