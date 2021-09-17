import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IPost } from 'src/app/models/post.model';
import { UserService } from 'src/app/services/user.service';
import { CreateForms } from 'src/app/utils/createForms.util';
import { IToastData, ToastCreate } from 'src/app/utils/toastCreate.util';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  @Input() newPostId: number;

  public formNewPost = CreateForms.createFormNewPost();
  public imagePost: {
    imagePath: string;
    imageName: string;
  } = null;
  public showErrors = false;

  private toastCreate = new ToastCreate();

  constructor(private modalController: ModalController, private userService: UserService) { }

  ngOnInit() {}

  public savePost() {
    this.showErrors = true;

    if (this.formNewPost.invalid) {
      return;
    }

    const { id: userId } = this.userService.getCurrentUser();

    const safeImagePath = this.imagePost?.imagePath ?? null;

    const newPost: IPost = {
      id: this.newPostId,
      userId,
      body: this.formNewPost.value.body,
      title: this.formNewPost.value.title,
      imagePath: safeImagePath,
    };

    this.closeModal(newPost);
  }

  public async fileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    if (!file.type.includes('image')) {
      const toastData: IToastData = {
        message: 'Só é possível adicionar imagens',
        color: 'danger',
      };

      return await this.toastCreate.create(toastData);
    }

    this.imagePost = {
      imagePath: URL.createObjectURL(file),
      imageName: file.name,
    };
  }

  public deleteImage() {
    this.imagePost = null;
  }

  public clickBtnUpload() {
    document.getElementById('imagePostImage').click();
  }

  public closeModal(newPost?: IPost) {
    this.modalController.dismiss(newPost);
  }
}
