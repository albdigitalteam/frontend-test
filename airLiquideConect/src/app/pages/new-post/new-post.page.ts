import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPost } from 'src/app/models/post.model';
import { IToastData } from 'src/app/models/toast.model';
import { IUser } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CreateForms } from 'src/app/utils/createForms.util';
import { CreateToast } from 'src/app/utils/createToast.util';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {
  currentUser: IUser = this.localStorage.getCurrentUser();
  posts: IPost[] = this.localStorage.getPosts();
  newPostForm: FormGroup = CreateForms.createNewPostForm();
  showErrors = false;
  isLoading = false;
  postImage = '';

  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly createToast: CreateToast,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  get formControls() {
    return this.newPostForm.controls;
  }

  public savePost(): void {
    this.isLoading = this.showErrors = true;

    if (!this.newPostForm.valid) {
      const toastData: IToastData = {
        message: 'O formulário está inválido, favor verificar',
        color: 'danger',
      };
      this.createToast.create(toastData);
      this.isLoading = false;
      return;
    }

    let newPost: IPost = {
      author: this.currentUser.name,
      userId: this.currentUser.id,
      title: this.newPostForm.value.title,
      body: this.newPostForm.value.body,
      id: this.posts.length + 1,
    };
    if (this.postImage !== '') {
      newPost = { ...newPost, image: this.postImage };
    }

    this.posts.push(newPost);
    this.localStorage.setPosts(this.posts);

    this.goToHome();
  }

  public async selectImage() {
    document.getElementById('fileInput').click();
  }

  async onInputFileChange(event) {
    const inputFile = event.target.files[0];
    const fileType = inputFile.type;

    if (
      fileType !== 'image/png' &&
      fileType !== 'image/jpeg' &&
      fileType !== 'image/jpg'
    ) {
      const toastData: IToastData = {
        message: 'Apenas imagens são permititdas.',
        color: 'danger',
      };

      return await this.createToast.create(toastData);
    }

    this.postImage = URL.createObjectURL(inputFile);
  }

  public deleteImage() {
    this.postImage = '';
  }

  public goToHome(): void {
    this.router.navigateByUrl(`tabs/home`);
  }
}
