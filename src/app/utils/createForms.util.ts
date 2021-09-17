import { FormBuilder, Validators } from '@angular/forms';

export class CreateForms {
  static createFormNewComment() {
    const formBuilder = new FormBuilder();
    return formBuilder.group({
      comment: ['', Validators.compose([Validators.required])],
    });
  }

  static createFormNewPost() {
    const formBuilder = new FormBuilder();
    return formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])],
    });
  }
}
