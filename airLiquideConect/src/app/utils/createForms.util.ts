/* eslint-disable @typescript-eslint/naming-convention */
import { FormBuilder, Validators } from '@angular/forms';

export class CreateForms {
  static createNewPostForm() {
    const formBuilder = new FormBuilder();
    return formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])],
    });
  }
}
