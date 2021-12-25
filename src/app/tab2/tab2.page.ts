import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  constructor(private postService: PostsService) {}

  ngOnInit() {}

  createData() {
    const data: any = {
      title: 'Kaka Rosqueta',
      body: 'Teste 222',
      userId: 105,
    };
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.postService.addPost(data).subscribe((data) => {
      console.log(data);
    });
  }

  updateData() {
    const data: any = {
      id: 1,
      title: 'Kaka',
      body: 'Teste',
      userId: 105,
    };
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.postService.addPost(data).subscribe((data) => {
      console.log(data);
    });
  }


}
