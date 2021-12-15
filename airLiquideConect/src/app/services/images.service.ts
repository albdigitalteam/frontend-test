import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor() {}

  getImages(): string[] {
    return [
      'assets/postsImages/clock-g225091df0_640.jpg',
      'assets/postsImages/confused-g5a5f760db_640.jpg',
      'assets/postsImages/fence-g2e47ac910_640.jpg',
      'assets/postsImages/moon-g51a89dec8_640.jpg',
      'assets/postsImages/non-simultaneity-g7e1c2d3ab_640.jpg',
      'assets/postsImages/oak-g294f9ba69_640.jpg',
      'assets/postsImages/portugal-g56f27da42_640.jpg',
      'assets/postsImages/snow-ge43241de9_640.jpg',
      'assets/postsImages/squirrel-g7d9f9764c_640.jpg',
      'assets/postsImages/waterslide-gfffd2350f_640.jpg',
    ];
  }
}
