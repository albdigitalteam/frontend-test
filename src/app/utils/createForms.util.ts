import { FormBuilder, Validators } from '@angular/forms';

export class CreateForms {
  static createFormNewComment() {
    const formBuilder = new FormBuilder();
    return formBuilder.group({
      comment: ['', Validators.compose([Validators.required])],
    });
  }
}
