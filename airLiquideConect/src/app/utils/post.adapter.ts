import { Injectable } from '@angular/core';
import { IComment } from '../models/comment.model';
import { IPost } from '../models/post.model';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class PostAdapter {
  constructor() {}

  // função para gerar a lista de posts atrelando a cada um deles o usuário autor, as imagens e os comentários
  public adaptInitialPost(
    posts: IPost[],
    users: IUser[],
    comments: IComment[],
    images: string[]
  ): IPost[] {
    return posts.map((post: IPost) => {
      const postAuthor = users.find((user) => user.id === post.userId);
      const author = postAuthor.username;
      const postComments = comments.filter(
        (comment) => comment.postId === post.id
      );
      const image = this.setPostImages(images);

      if (!image) return { ...post, author, comments: postComments };

      return { ...post, author, comments: postComments, image };
    });
  }

  // função para re-gerar a lista de posts se houver uma atualização de algum comentário
  public adaptPostNewComment(posts: IPost[], comments: IComment[]): IPost[] {
    return posts.map((post: IPost) => {
      const postComments = comments.filter(
        (comment) => comment.postId === post.id
      );

      return { ...post, comments: postComments };
    });
  }

  //função para colocar fotos randomicamente em alguns dos posts
  private readonly setPostImages = (imagesArray: string[]): string => {
    const randIndex = Math.floor(Math.random() * imagesArray.length + 3);
    if (randIndex > imagesArray.length) {
      return;
    }
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];
  };
}
