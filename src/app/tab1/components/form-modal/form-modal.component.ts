import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  @Input() isPost: boolean;
  @Input() postId: number;
  blogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public modalController: ModalController,
    private postService: PostsService
  ) {}

  ngOnInit() {
    this.buildBlogForm();
  }

  // TODO: quando tiver login colocar os dado usuário logado
  saveForm() {
    const payload = {
      title: this.blogForm.get('title').value,
      body: this.blogForm.get('body').value,
      postId: this.postId,
      name: '',
      email: '',
    };
    this.postService.addComment(payload).subscribe((res) => res);
    this.dismiss();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  private buildBlogForm() {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
}
