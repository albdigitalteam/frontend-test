import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, Platform } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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

  constructor(
    private modalController: ModalController,
    private userService: UserService,
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private camera: Camera,
  ) { }

  ngOnInit() { }

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

  public async notCordovaUpload(event: Event) {
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

  public async clickBtnUpload() {
    if (this.platform.is('cordova')) {
      return await this.cordovaUpload();
    }

    document.getElementById('imagePostImage').click();
  }

  public closeModal(newPost?: IPost) {
    this.modalController.dismiss(newPost);
  }

  private async cordovaUpload() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Selecione',
      buttons: [
        {
          text: 'Câmera',
          icon: 'camera-outline',
          handler: async () => {
            await this.takePicture('CAMERA');
          }
        },
        {
          text: 'Biblioteca da Fotos',
          icon: 'image-outline',
          handler: async () => {
            await this.takePicture('PHOTOLIBRARY');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await actionSheet.present();
  }

  private async takePicture(sourceImage: 'PHOTOLIBRARY' | 'CAMERA') {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType[sourceImage]
    };

    const cameraInfo = await this.camera.getPicture(options);
    const image = 'data:image/jpg;base64,' + cameraInfo;

    this.imagePost = {
      imagePath: image,
      imageName: 'Imagem adicionada'
    };
  }
}
